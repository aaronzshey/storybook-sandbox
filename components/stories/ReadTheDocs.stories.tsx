import type { Meta, StoryObj } from "@storybook/react";
import { ReadTheDocs } from "../ReadTheDocs";

const meta = {
    title: "Example/ReadTheDocs",
    tags: ["autodocs"],
    component: ReadTheDocs,
} satisfies Meta<typeof ReadTheDocs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Hello world",
        colorId: 1,
    },
};