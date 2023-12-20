import React from "react";
import {
  TextField,
  background,
  textFieldSize,
  textFieldTypes,
} from "../TextField";
import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

type TextFieldProps = React.ComponentProps<typeof TextField>;

const testId = "textfield";
const renderComponent = (props: TextFieldProps = {}) => {
  return render(<TextField data-testid={testId} {...props} />);
};
const getRender = () => {
  return screen.getByTestId(testId);
};

const getInput = () => {
  return screen.getByTestId(testId).querySelector("input");
};

const getTextarea = () => {
    return screen.getByTestId(testId).querySelector("textarea")
}

describe("Component TextField", () => {
  describe("Renders without errors", () => {
    test("Do not throw errors", () => {
      expect(renderComponent).not.toThrow();
    });
  });
  describe("Props checking", () => {
    test("Props className in class of element", () => {
      const className = "kharhgpakhadlkjh";
      renderComponent({ className });
      const component = getRender();
      expect(component).not.toBeUndefined();
      expect(component.className).toContain(className);
    });
    test("Check if default props are in className", () => {
      renderComponent();
      const component = getRender();
      expect(component.className).toContain("background--primary");
      expect(component.className).toContain("size--s");
      expect(component.className).toContain("container");
    });

    textFieldSize.forEach((size) => {
      test(`Prop size--${size} must be in className`, () => {
        renderComponent({ TextFieldSize: size });
        const component = getRender();
        expect(component.className).toContain(`size--${size}`);
      });
    });
    background.forEach((type) => {
      test(`Prop background--${type} must be in className`, () => {
        renderComponent({ backgroung: type });
        const component = getRender();
        expect(component.className).toContain(`background--${type}`);
      });
    });
    textFieldTypes.forEach((type) => {
      test(`Type of input must be ${type}`, () => {
        if (type !== "textarea") {
          renderComponent({ type });
          const input = getInput() as HTMLInputElement;
          expect(input.type).toBe(type);
        } else {
            renderComponent({ type });
            const textarea = getTextarea();
            expect(textarea).not.toBeUndefined();
        }
      });
    });
    test("Label is being rendered", () => {
        const label = "Some label";
        renderComponent({label});
        const component = getRender();
        expect(component.textContent).toBe(label)
    })
    test("Required label is being rendered", () => {
        const label = "Some label";
        renderComponent({label, required: true});
        const component = getRender();
        expect(component.textContent).toBe(label+" *")
    })
    test("Icon is being rendered on the right", () => {
        const Icon = () => {
            return <span>icon</span>
        }
        renderComponent({icon: <Icon />});
        const component = getRender();
        expect(component.textContent).toBe("icon")
    })
    test("Placeholder is being rendered", () => {
        const placeholder = "Some placeholder";
        renderComponent({placeholder});
        const input = getInput() as HTMLInputElement;
        expect(input.placeholder).toBe(placeholder)
    })
  });
  describe("OnChange and onAccept checking", () => {
    test("OnChange is being called and is being gotten correct value", () => {
        const changeHandle = jest.fn();
        const value = "value"
        renderComponent({type: "textarea", onChange: changeHandle})
        const textarea = getTextarea() as HTMLTextAreaElement;
        fireEvent.focus(textarea);
        fireEvent.change(textarea, {target: {value: value}});
        expect(changeHandle).toBeCalled()
        expect(changeHandle).toBeCalledTimes(1)
        expect(textarea.value).toBe(value)
    });
  })
});
