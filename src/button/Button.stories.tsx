import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BasketIcon,
  CatalogIcon,
  PlusIcon,
} from "../icons/index";
import React from "react";

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
    IconLeft: CatalogIcon,
  },
};

export const RightIcon: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "button",
    IconRight: CatalogIcon,
  },
};

export const LeftIconSecondary: Story = {
  args: {
    className: "my-button",
    view: "secondary",
    label: "button",
    IconLeft: CatalogIcon,
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

export const FullWidth: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "button",
    width: "full",
  },
  render: function Render(args) {
    return (
      <div style={{ width: "500px" }}>
        <Button {...args} />
      </div>
    );
  },
};

export const OverflowLabel: Story = {
  args: {
    className: "my-button",
    view: "primary",
    label: "werylonglabelbutton",
    width: "full",
  },
  render: function Render(args) {
    return (
      <div style={{ width: "160px" }}>
        <Button {...args} />
      </div>
    );
  },
};

const whiteArrowRight = () => <ArrowRightIcon color="white" />;
export const OnlyIcon: Story = {
  args: {
    className: "my-button",
    view: "primary",
    IconRight: whiteArrowRight,
    onlyIcon: true,
    shape: "round",
  },
};
