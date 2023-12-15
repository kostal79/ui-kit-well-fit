import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "../Checkbox";
import { ComponentProps } from "react";

const testId = "checkboxTestId";

type CheckboxPropType = ComponentProps<typeof Checkbox>;

const renderComponent = (props: CheckboxPropType = {}) => {
  return render(<Checkbox {...props} data-testid={testId} />);
};

describe("Component Checkbox", () => {
  describe("Render without errors", () => {
    test("Do not throw error", () => {
      expect(renderComponent).not.toThrow();
    });
    test("Check default props", () => {
      renderComponent();
      const label = screen.getByTestId(testId);
      const input = label.querySelector("input") as HTMLInputElement;
      expect(label.className).toContain("label__size--s");
      expect(input.className).toContain("checkbox__size--s");
      expect(input.checked).toBeFalsy();
    });
  });
  describe("ClassName construction checking", () => {
    test("Add className from props to className", () => {
      const className = "dkkghjdfkfhdkdf";
      renderComponent({ className });
      const checkbox = screen.getByTestId(testId);
      expect(checkbox.className).toContain(className);
    });
    test("Add size from props to label className", () => {
      const size = "s";
      renderComponent({ size });
      const checkbox = screen.getByTestId(testId);
      expect(checkbox.className).toContain("label__size--s");
    });
    test("Add size from props to label className", () => {
      const size = "l";
      renderComponent({ size });
      const checkbox = screen.getByTestId(testId);
      expect(checkbox.className).toContain("label__size--l");
    });
    test("Add size from props to input className", () => {
      const size = "s";
      renderComponent({ size });
      const checkbox = screen.getByTestId(testId);
      const input = checkbox.querySelector("input") as HTMLInputElement;
      expect(input.className).toContain("checkbox__size--s");
    });
    test("Add size from props to input className", () => {
      const size = "l";
      renderComponent({ size });
      const checkbox = screen.getByTestId(testId);
      const input = checkbox.querySelector("input") as HTMLInputElement;
      expect(input.className).toContain("checkbox__size--l");
    });
  });
  describe("Label checking", () => {
    test("Label is bieng rendered", () => {
      const label = "Some label";
      renderComponent({ label });
      const checkbox = screen.getByTestId(testId);
      expect(checkbox.textContent).toBe(label);
    });
    test("Children is bieng rendered", () => {
      const children = <span>Some children</span>;
      render(<Checkbox data-testid={testId}>{children}</Checkbox>);
      const checkbox = screen.getByTestId(testId);
      expect(checkbox.textContent).toBe("Some children");
    });
  });
  describe("Name and value checking", () => {
    test("Name form props is bieng input element name", () => {
      const name = "Input name";
      renderComponent({ name });
      const checkbox = screen.getByTestId(testId);
      const input = checkbox.querySelector("input") as HTMLInputElement;
      expect(input.name).toBe(name)
    });
    test("Value form props is bieng input element value", () => {
        const value = "Input value";
        renderComponent({ value });
        const checkbox = screen.getByTestId(testId);
        const input = checkbox.querySelector("input") as  HTMLInputElement;
        expect(input.value).toBe(value)
      });
  });
  describe("Actions checking", () => {
    test("Click was called", () => {
        const handleChange = jest.fn();
        renderComponent({ onChange: handleChange });
        const checkbox = screen.getByTestId(testId);
        const input = checkbox.querySelector("input") as  HTMLInputElement;
        fireEvent.click(input)
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input.checked).toBeTruthy();
    })
  })
});
