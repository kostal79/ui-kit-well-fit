import React from "react";
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
    placeholder: "Cities",
    name: "cities",
    label: "Cities",
    optionList: ["New York", "Moscow", "London", "Paris", "Chicago", "Madrid", "Rome", "New Vasyuki"],
  },
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <Select {...args} />
      </div>
    );
  },
};
