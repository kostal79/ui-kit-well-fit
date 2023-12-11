import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: "Avatars/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "black", value: "#1A1A25" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultAvatar: Story = {
  args: {},
};

export const AvatarWithPhoto: Story = {
  args: {
    url: "/1517430665953.jpeg",
  },
  render: function Render(args) {
    return <Avatar {...args} />;
  },
};
