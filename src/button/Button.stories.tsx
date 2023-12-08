import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowDownIcon, BasketIcon, MenuIcon, PlusIcon } from "../icons/index";
import React, { Fragment } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
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
    className: "my-button",
    view: "primary",
    label: "button",
  },
};

export const Secondary: Story = {
  args: {
    view: "secondary",
    label: "button",
  },
};

export const Disabled: Story = {
  args: {
    view: "disabled",
    label: "button",
  },
};

export const Loading: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "button",
    loading: true,
  },
};

export const LeftIcon: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "button",
    IconLeft: MenuIcon,
  },
};

export const RightIcon: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "button",
    IconRight: MenuIcon,
  },
};

export const LeftIconSecondary: Story = {
  args: {
    className: "my-button",
    view: "secondary",
    label: "button",
    IconLeft: MenuIcon,
  },
};

export const LeftIconBasket: Story = {
  args: {
    className: "my-button",
    view: "secondary",
    label: "button",
    IconLeft: BasketIcon,
  },
};

export const Plus: Story = {
  args: {
    className: "my-button",
    view: "secondary",
    label: "button",
    IconLeft: PlusIcon,
  },
};

export const ArrowDown: Story = {
  args: {
    className: "my-button",
    view: "secondary",
    label: "button",
    IconRight: ArrowDownIcon,
  },
};
