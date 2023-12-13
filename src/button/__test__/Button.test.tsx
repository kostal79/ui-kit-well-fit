import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { ComponentProps } from "react";
import { Button } from "../Button";
import { AvatarIcon } from "../../icons";

const testId = "button";

type ButtonProps = ComponentProps<typeof Button>;

const renderComponent = (props: ButtonProps = {}) => {
  return render(<Button data-testid={testId} {...props} />);
};

describe("Component Button", () => {
  describe("Rengder without errors", () => {
    test("Do not throw error", () => {
      expect(renderComponent).not.toThrow();
    });
  });
  describe("Props checking", () => {
    test("Props className in class of element", () => {
      const className = "aadgadgaaddg";
      renderComponent({ className });
      const element = screen.getByTestId(testId);
      expect(element.className).toContain(className);
    });
    test("Check if default props are in className", () => {
      renderComponent({});
      const element = screen.getByTestId(testId);
      expect(element.className).toContain("primary");
      expect(element.tagName).toBe("BUTTON");
      expect(element.className).toContain("size--l");
    });
    test("Check if tug is 'a' is component", () => {
      renderComponent({ tag: "a" });
      const link = screen.getByTestId(testId);
      expect(link.tagName).toBe("A");
    });
    test("Check if props are in className", () => {
      renderComponent({
        view: "secondary",
        width: "full",
        size: "s",
        onlyIcon: true,
        shape: "round",
        IconLeft: AvatarIcon,
      });
      const element = screen.getByTestId(testId);
      expect(element.className).toContain("secondary");
      expect(element.className).toContain("width--full");
      expect(element.className).toContain("size--s");
      expect(element.className).toContain("only-icon");
      expect(element.className).toContain("round");
    });
    test("Check label is in button with tag 'button'", () => {
      const label = "My-label";
      renderComponent({ label });
      const element = screen.getByTestId(testId);
      expect(element.textContent).toBe(label);
    });
    test("Check label is in button with tag 'a'", () => {
      const label = "My-label";
      renderComponent({ label, tag: "a" });
      const element = screen.getByTestId(testId);
      expect(element.textContent).toBe(label);
    });
    test("Check if click was called", () => {
      const clickHandler = jest.fn();
      renderComponent({ onClick: clickHandler });
      const element = screen.getByTestId(testId);
      fireEvent.click(element)
      expect(clickHandler).toBeCalledTimes(1);
    });
  });
  describe("Loader checking", () => {
    test("Check if there is a loader", () => {
      renderComponent({ loading: true });
      const element = screen.getByTestId(testId);
      expect(element.children).toBeTruthy();
      expect(element.children[0].className).toContain("loading");
      expect(element.children[1].className).toBe("lds-ellipsis");
    });
    test("Click not allowed when loading with tag 'button'", () => {
      const clickHandler = jest.fn();
      renderComponent({ loading: true, onClick: clickHandler });
      const button = screen.getByTestId(testId);
      fireEvent.click(button);
      expect(clickHandler).toBeCalledTimes(0);
    });
    test("Click not allowed when loading with tag 'a'", () => {
      const clickHandler = jest.fn();
      renderComponent({ tag: "a", loading: true, onClick: clickHandler });
      const button = screen.getByTestId(testId);
      fireEvent.click(button);
      expect(clickHandler).toBeCalledTimes(0);
    });
  });
  describe("Disabled", () => {
    test("Disabled whith 'button' tag", () => {
      const clickHandler = jest.fn();
      renderComponent({ view: "disabled", onClick: clickHandler });
      const button = screen.getByTestId(testId);
      fireEvent.click(button);
      expect(clickHandler).toBeCalledTimes(0);
      expect(button.className).toContain("disabled");
    });
    test("Disabled with 'a' tag", () => {
      const clickHandler = jest.fn();
      renderComponent({ view: "disabled", onClick: clickHandler, tag: "a" });
      const button = screen.getByTestId(testId);
      fireEvent.click(button);
      expect(clickHandler).toBeCalledTimes(0);
      expect(button.tagName).toBe("A");
      expect(button.className).toContain("disabled");
    });
  });
  describe("Rendering icons", () => {
    const labelText = "Button text";
    const iconTextLeft = "Text icon Left";
    const iconTextRight = "Text icon Right";
    const Icon: React.FC<{ iconText: string }> = ({ iconText }) => {
      return (
        <>
          <span>{iconText}</span>
        </>
      );
    };

    const IconLeft = () => <Icon iconText={iconTextLeft} />;
    const IconRight = () => <Icon iconText={iconTextRight} />;
    test("Icon left", () => {
      renderComponent({
        label: labelText,
        IconLeft: IconLeft,
      });
      const button = screen.getByTestId(testId);
      expect(button.textContent).toBe(iconTextLeft + labelText);
    });
    test("Icon right", () => {
      renderComponent({
        label: labelText,
        IconRight: IconRight,
      });
      const button = screen.getByTestId(testId);
      expect(button.textContent).toBe(labelText + iconTextRight);
    });
    test("Icon right and icon left", () => {
      renderComponent({
        label: labelText,
        IconRight: IconRight,
        IconLeft: IconLeft,
      });
      const button = screen.getByTestId(testId);
      expect(button.textContent).toBe(iconTextLeft + labelText + iconTextRight);
    });
    test("Only icon", () => {
      const LeftIconText = "Left icon";
      renderComponent({
        label: labelText,
        IconRight: IconRight,
        IconLeft: IconLeft,
        onlyIcon: true,
      });
      const button = screen.getByTestId(testId);
      expect(button.textContent).toBe(iconTextLeft);
    });
  });
});
