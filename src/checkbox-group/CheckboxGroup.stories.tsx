import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckboxGroup> = {
  title: "CheckboxGroup/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "white", value: "white" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const GroupColumn: Story = {
  args: {
    items: [
      { label: "Checkbox1", checked: false, value: "check1" },
      { label: "Checkbox2", checked: false, value: "check1" },
      { label: "Checkbox3", checked: false, value: "check1" },
    ],
    title: "Group",
    name: "Group"
  },
};

export const GroupRow: Story = {
  args: {
    items: [
      { label: "Checkbox1", checked: false, value: "check1" },
      { label: "Checkbox2", checked: false, value: "check1" },
      { label: "Checkbox3", checked: false, value: "check1" },
    ],
    title: "Group",
    name: "Group",
    order: "row"
  },
};

export const GroupWithLimit: Story = {
  args: {
    items: [
      { label: "Checkbox1", checked: false, value: "check1" },
      { label: "Checkbox2", checked: false, value: "check1" },
      { label: "Checkbox3", checked: false, value: "check1" },
      { label: "Checkbox4", checked: false, value: "check1" },
      { label: "Checkbox5", checked: false, value: "check1" },
      { label: "Checkbox6", checked: false, value: "check1" },
      { label: "Checkbox7", checked: false, value: "check1" },
      { label: "Checkbox8", checked: false, value: "check1" },
      { label: "Checkbox9", checked: false, value: "check1" },
    ],
    title: "Group",
    name: "Group",
    limit: 4
  },
};


