import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import React from "react";
import { NonVisibleIcon } from "../icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputText: Story = {
  args: {
    className: "my-Input",
    title: "Title",
    placeholder: "placeholder",
    label: "Серийный номер",
  },
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <Input {...args} />
      </div>
    );
  },
};

export const WithIcon: Story = {
  args: {
    className: "my-Input",
    title: "Title",
    placeholder: "placeholder",
    label: "Серийный номер",
    required: true,
    icon: <NonVisibleIcon color="#909CB5" />,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <Input {...args} />
      </div>
    );
  },
};


export const TypeDate: Story = {
  args: {
    type: "date",
    label: "Date",
    required: true,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <Input {...args} />
      </div>
    );
  },
};
