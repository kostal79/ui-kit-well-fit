import { describe, expect, test } from "@jest/globals";
import { Avatar } from "../Avatar";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";

const testId = "avatar";

type AvatarProps = ComponentProps<typeof Avatar>;

const renderComponent = (props: AvatarProps = {}) => {
  return render(<Avatar data-testid={testId} {...props} />);
};

describe("Component Avatar", () => {
  test("Do not throw error", () => {
    expect(renderComponent).not.toThrow();
  });
  test("Props className in class of element", () => {
    const className = "aadgadgaaddg";
    renderComponent({ className });
    const element = screen.getByTestId(testId);
    expect(element.className).toContain(className);
  });
  test("Default avatar", () => {
    renderComponent();
    const element = screen.getByTestId(testId);
    const image = element.querySelector("img");
    const svg = element.querySelector("svg")
    expect(image).toBeFalsy();
    expect(svg).toBeTruthy();
    
  });
  test("URL checking", () => {
    const url = "https://www.google.com/avatar.jpg"
    renderComponent({url});
    const element = screen.getByTestId(testId);
    const image = element.querySelector("img");
    expect(image).toBeTruthy();
    expect(image?.src).toEqual(url)
  });

});
