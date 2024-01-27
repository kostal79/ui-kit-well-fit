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
    optionList: [
      {label: "New York", value: "New York"},
      {label: "Moscow", value: "Moscow"},
      {label: "London", value: "London"},
      {label: "Paris", value: "Paris"},
      {label: "Tokio", value: "Tokio"},
      {label: "Chicago", value: "Chicago"},
    ],
    onChange: (event) => console.log("value: ", event.target.value)
  },
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <Select {...args} />
      </div>
    );
  },
};
