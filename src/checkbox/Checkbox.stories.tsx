import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Checkbox> = {
  title: "Checkbox/Checkbox",
  component: Checkbox,
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
export const UncheckedS: Story = {
  args: {
    label: "Checkbox",
    checked: false,
    name: "check1",
    value: "check1",
  },
};

export const CheckedS: Story = {
  args: {
    label: "Checkbox",
    checked: true,
    name: "check2",
    value: "check2",
  },
};

export const UncheckedL: Story = {
  args: {
    label: "Checkbox",
    checked: false,
    size: "l",
    name: "check3",
    value: "check3",
  },
};

export const CheckedL: Story = {
  args: {
    label: "Checkbox",
    checked: true,
    size: "l",
    name: "check4",
    value: "check4",
  },
};

export const LongText: Story = {
  args: {
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat nostrum cupiditate odio temporibus voluptates officiis iure architecto explicabo ut nobis dolores, iusto quisquam. Soluta nobis error vitae velit molestias?",
    checked: true,
    size: "l",
    name: "check5",
    value: "check5",
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <Checkbox {...args} />
      </div>
    );
  },
};

const Child: React.FC = () => {
  return (
    <>
      <h4 style={{marginTop: "0"}}>Title</h4>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed
          nam illum ea fuga. Voluptatum laboriosam at veritatis natus ipsam
          quaerat, aut commodi accusantium, fuga nam explicabo maxime repellat
          amet.
        </p>
      </div>
    </>
  );
};

export const WhithChildren: Story = {
  args: {
    checked: true,
    size: "l",
    name: "check5",
    value: "check5",
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <Checkbox {...args}>{<Child />}</Checkbox>
      </div>
    );
  },
};
