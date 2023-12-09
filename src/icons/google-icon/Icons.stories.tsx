import type { Meta, StoryObj } from "@storybook/react";
import { GoogleIcon } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof GoogleIcon> = {
  title: "Icons/Google",
  component: GoogleIcon,
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
export const Base: Story = {}
