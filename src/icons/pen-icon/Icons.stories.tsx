import type { Meta, StoryObj } from "@storybook/react";
import { PenIcon } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PenIcon> = {
  title: "Icons/Pen",
  component: PenIcon,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: 'grey', value: '#909CB5' },
      ],
    }, 
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const White: Story = {
  args: {
    color: "white"
  }
};

export const Red: Story = {
  args: {
    color: "#F53B49"
  }
};