import type { Meta, StoryObj } from "@storybook/react";
import { FilterIcon } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FilterIcon> = {
  title: "Icons/Filter",
  component: FilterIcon,
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
export const Grey: Story = {
  args: {
    color: "#384255"
  }
};

export const Red: Story = {
  args: {
    color: "#F53B49"
  }
};