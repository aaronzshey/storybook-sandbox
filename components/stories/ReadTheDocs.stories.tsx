import type { Meta, StoryObj } from "@storybook/react";
import { ReadTheDocs } from "../ReadTheDocs";

/*
* The title attribute decides where the story is placed in the sidebar.
* Foo/BarComponent will place the BarComponent under the "Foo" collapsible group
*/

const meta = {
    title: "Components/ReadTheDocs",
    tags: ["autodocs"],
    component: ReadTheDocs,
    parameters: {
        componentSubtitle: "A component with two color options that displays text."
    },
    argTypes: {
        colorId: {
            control: {
                type: "select",
            },
            options: [1, 2],
        }
    }
} satisfies Meta<typeof ReadTheDocs>;

export default meta;
//type Story = StoryObj<typeof meta>;

/**
 * Two colors are supported.
 */
export const Primary = {
    render: () => (
        <>
            <ReadTheDocs colorId={1}>colorId = 1</ReadTheDocs>
            <ReadTheDocs colorId={2}>colorId = 2</ReadTheDocs>
        </>
    )
};