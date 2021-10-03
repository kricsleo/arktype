import {
    ExcludeByValue,
    FilterByValue,
    TypeError,
    Evaluate,
    MergeAll,
    RemoveSpaces,
    Split
} from "@re-do/utils"
import { InvalidTypeDefError } from "./definitions.js"
import {
    OrDefinition,
    ListDefinition,
    OptionalDefinition,
    BuiltInDefinition,
    BuiltInDefinitionMap,
    UnvalidatedObjectDefinition,
    FunctionDefinition
} from "./common.js"

export type ParseStringDefinition<
    Definition extends string,
    TypeSet,
    ParsableDefinition extends string = RemoveSpaces<Definition>
> = ParsableDefinition extends OptionalDefinition<infer OptionalType>
    ? ParseStringDefinitionRecurse<OptionalType, TypeSet> | undefined
    : ParseStringDefinitionRecurse<ParsableDefinition, TypeSet>

export type ParseStringTupleDefinitionRecurse<
    Definitions extends string,
    TypeSet,
    DefinitionList extends string[] = Split<Definitions, ",">
> = Definitions extends ""
    ? []
    : [
          ...{
              [Index in keyof DefinitionList]: ParseStringDefinitionRecurse<
                  DefinitionList[Index] & string,
                  TypeSet
              >
          }
      ]

export type ParseStringFunctionDefinitionRecurse<
    Parameters extends string,
    Return extends string,
    TypeSet
> = Evaluate<
    (
        ...args: ParseStringTupleDefinitionRecurse<Parameters, TypeSet>
    ) => ParseStringDefinitionRecurse<Return, TypeSet>
>

export type ParseError<Fragment extends string = string> =
    TypeError<`Unable to parse the type of '${Fragment}'.`>

export type ParseStringOrDefinitionRecurse<
    First extends string,
    Second extends string,
    TypeSet,
    FirstParseResult = ParseStringDefinitionRecurse<First, TypeSet>,
    SecondParseResult = ParseStringDefinitionRecurse<Second, TypeSet>
> = FirstParseResult extends ParseError
    ? FirstParseResult
    : SecondParseResult extends ParseError
    ? SecondParseResult
    : FirstParseResult | SecondParseResult

export type ParseStringDefinitionRecurse<
    Fragment extends string,
    TypeSet
> = Fragment extends FunctionDefinition<infer Parameters, infer Return>
    ? ParseStringFunctionDefinitionRecurse<Parameters, Return, TypeSet>
    : Fragment extends ListDefinition<infer ListItem>
    ? ParseStringDefinitionRecurse<ListItem, TypeSet>[]
    : Fragment extends OrDefinition<infer First, infer Second>
    ? ParseStringOrDefinitionRecurse<First, Second, TypeSet>
    : Fragment extends keyof TypeSet
    ? ParseType<TypeSet[Fragment], TypeSet>
    : Fragment extends BuiltInDefinition
    ? BuiltInDefinitionMap[Fragment]
    : ParseError<Fragment>

export type ParseObjectDefinition<Definition extends object, TypeSet> = {
    [PropName in keyof ExcludeByValue<
        Definition,
        OptionalDefinition
    >]: ParseType<Definition[PropName], TypeSet>
} &
    {
        [PropName in keyof FilterByValue<
            Definition,
            OptionalDefinition
        >]?: Definition[PropName] extends OptionalDefinition<infer OptionalType>
            ? ParseType<OptionalType, TypeSet>
            : TypeError<`Expected property ${Extract<
                  PropName,
                  string | number
              >} to be optional.`>
    }

export type ParseListDefinition<Definition extends any[], TypeSet> = {
    [Index in keyof Definition]: ParseType<Definition[Index], TypeSet>
}

export type ParseType<Definition, TypeSet> = Definition extends string
    ? ParseStringDefinition<Definition, TypeSet>
    : Definition extends UnvalidatedObjectDefinition
    ? Definition extends any[]
        ? Evaluate<ParseListDefinition<Definition, TypeSet>>
        : Evaluate<ParseObjectDefinition<Definition, TypeSet>>
    : InvalidTypeDefError

export type ParseTypeSetDefinitions<
    Definitions,
    Merged = MergeAll<Definitions>
> = {
    [TypeName in keyof Merged]: ParseType<Merged[TypeName], Merged>
}