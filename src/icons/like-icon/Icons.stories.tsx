import type { Meta, StoryObj } from "@storybook/react";
import { LikeIcon } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LikeIcon> = {
  title: "Icons/Like",
  component: LikeIcon,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: 'red', value: '#F53B49' },
        { name: 'grey', value: '#909CB5' },
        { name: 'white', value: '#F6F6F6' },
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