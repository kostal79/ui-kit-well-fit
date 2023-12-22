import { Select } from "./index";
import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
    title: "Select/Select",
    component: Select,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary: Story = {
    args: {
        label: "Cities",
        optionList: ["New York", "Moscow", "London"]
    },
}