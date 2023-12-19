import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import React, { useState } from "react";
import { NonVisibleIcon } from "../icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextField> = {
  title: "TextFields/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleText: Story = {
  args: {
    className: "my-TextField",
    placeholder: "placeholder",
    label: "Simple text",
    mask: /[\w*\d*]*/,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <TextField {...args} />
      </div>
    );
  },
};

export const WithIcon: Story = {
  args: {
    className: "my-TextField",
    placeholder: "placeholder",
    label: "Text with icon",
    required: true,
    icon: <NonVisibleIcon color="#909CB5" />,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <TextField {...args} />
      </div>
    );
  },
};

export const TypeEmail: Story = {
  args: {
    type: "email",
    label: "E-mail",
    required: false,
    onAccept: (value) => console.log(value),
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <TextField {...args} />
      </div>
    );
  },
};

export const TypePassword: Story = {
  args: {
    label: "password",
    required: true,
    onAccept: (value) => console.log(value),
    backgroung: "secondary",
    placeholder: "password",
  },
  render: function Render(args) {
    const [type, setType] = useState<"password" | "text">("password")
    const Icon = () => {
      return (
        <div onClick={() => {
          const newType = type === "password" ? "text" : "password";
          setType(newType)
          }} style={{cursor: "pointer"}}>
          <NonVisibleIcon color="#909CB5" />
        </div>
      )
    }
    return (
      <div style={{ width: "300px" }}>
        <TextField {...args} icon={<Icon />} type={type}/>
      </div>
    );
  },
};

export const TextWithMask: Story = {
  args: {
    type: "text",
    label: "serial number",
    required: false,
    mask: '000-000-000',
    placeholder: "XXX-XXX-XXX",
    onAccept: (value, mask) => console.log(mask.value),
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <TextField {...args} />
      </div>
    );
  },
};

export const TypeTextarea: Story = {
  args: {
    type: "textarea",
    label: "Some text",
    placeholder: "write some text",
    required: false,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <TextField {...args} />
      </div>
    );
  },
};

export const TypePhone: Story = {
  args: {
    type: "tel",
    placeholder: "+7 (_ _ _) - _ _ _ - _ _ - _ _",
    mask: "+{7}(000)-000-00-00",
    required: false,
  },
  render: function Render(args) {
    return (
      <div style={{ width: "200px" }}>
        <TextField {...args} />
      </div>
    );
  },
};
