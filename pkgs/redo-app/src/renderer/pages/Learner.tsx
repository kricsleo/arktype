import React from "react"
import { component } from "blocks"
import {
    Button,
    RespondTo,
    Row,
    Column,
    Text,
    TextInput
} from "redo-components"
import { deactivateLearner, resetLearner } from "state"
import { LearnerEvents, RedoAppBar } from "custom"
import { CircularProgress } from "@material-ui/core"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import ChipInput from "material-ui-chip-input"
import { store } from "../common"

const SAVETEST = gql`
    mutation submitTest(
        $name: String!
        $tags: [TagInput!]!
        $steps: [BrowserEventInput!]!
    ) {
        submitTest(name: $name, tags: $tags, steps: $steps)
    }
`

export type LearnerProps = {}

export const Learner = component({
    name: "Learner",
    defaultProps: {} as Partial<LearnerProps>,
    query: {
        learner: {
            events: null,
            chromiumInstalling: null,
            testName: null,
            testTags: null
        }
    }
})(({ data }) => {
    const {
        events,
        chromiumInstalling,
        testName: name,
        testTags: tags
    } = data.learner!
    const [saveTest] = useMutation(SAVETEST)
    return (
        <Column justify="flex-start">
            <RedoAppBar>{["close"]}</RedoAppBar>
            <Row>
                <TextInput
                    value={name}
                    placeholder="Test Name"
                    onChange={e =>
                        store.mutate({ learner: { testName: e.target.value } })
                    }
                />
                <RespondTo response={{ loading: false }}>
                    <Button
                        kind="primary"
                        onClick={async () => {
                            await saveTest({
                                variables: {
                                    name,
                                    tags: tags.map(_ => ({ name: _ })),
                                    steps: events.map(
                                        ({ __typename, ...inputs }: any) => {
                                            return { ...inputs }
                                        }
                                    )
                                }
                            })
                            resetLearner()
                        }}
                    >
                        Save test
                    </Button>
                </RespondTo>
            </Row>
            {/* TODO Chip input should be moved to redo components as part of: https://trello.com/c/eVo1vyZj */}
            <Row>
                <ChipInput
                    value={tags}
                    placeholder="Add Tags"
                    onAdd={(chip: string) =>
                        store.mutate({
                            learner: { testTags: _ => [..._, chip] }
                        })
                    }
                    onDelete={(chip: string) => {
                        store.mutate({
                            learner: {
                                testTags: _ =>
                                    _.filter(current => current !== chip)
                            }
                        })
                    }}
                />
            </Row>

            <RespondTo
                response={{ loading: chromiumInstalling }}
                options={{
                    loading: {
                        displayAs: ({ value }) =>
                            value ? (
                                <>
                                    <CircularProgress />
                                    <Text align="center">
                                        Downloading Chrome
                                    </Text>
                                </>
                            ) : null,
                        hideContent: false
                    }
                }}
            >
                <LearnerEvents events={events} />
            </RespondTo>
        </Column>
    )
})
