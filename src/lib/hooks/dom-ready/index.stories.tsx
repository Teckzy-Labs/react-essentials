import type { Meta, StoryObj } from "@storybook/react";

import { useDomReady } from "./index";

const meta = {
    component: useDomReady,
} satisfies Meta<typeof useDomReady>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
