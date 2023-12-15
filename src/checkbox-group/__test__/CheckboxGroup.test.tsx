import { fireEvent, render, screen } from "@testing-library/react";
import { CheckboxGroup } from "../CheckboxGroup";
import { ComponentProps } from "react";
import { Checkbox } from "../../checkbox/Checkbox";

const testId = "checkboxTestId";
type CheckboxGroupPorps = ComponentProps<typeof CheckboxGroup>;
type CheckboxProps = ComponentProps<typeof Checkbox>;

const groupItems: CheckboxProps[] = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
];

const renderComponent = (props?: Partial<CheckboxGroupPorps>) => {
  return render(
    <CheckboxGroup {...props} data-testid={testId} items={groupItems} />
  );
};

describe("Component CheckboxGroup", () => {
  describe("Render without errors", () => {
    test("Do not throw errors", () => {
      expect(renderComponent).not.toThrow();
    });
    test("Renders all components", () => {
      renderComponent();
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      expect(group.children.length).toBe(5);
    });
    test("All default props exist", () => {
      renderComponent();
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      expect(group.className).toContain("size--s");
      expect(group.className).toContain("order--column");
    });
  });
  describe("Props checking", () => {
    test("Additional className in className of container", () => {
      const additionalClassName = "additional class name";
      renderComponent({ className: additionalClassName });
      const groupContainer = screen.getByTestId(testId);
      expect(groupContainer.className).toContain(additionalClassName);
    });
    test("Order prop in className of group", () => {
      const order = "row";
      renderComponent({ order });
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      expect(group.className).toContain(`order--${order}`);
    });
    test("Size prop in className of group", () => {
      const size = "l";
      renderComponent({ size });
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      expect(group.className).toContain(`size--${size}`);
    });
    test("Name property assign for all checkbox", () => {
      const name = "CheckboxName";
      renderComponent({ name });
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      const itemsCollection = group.querySelectorAll(
        ".checkbox"
      ) as NodeListOf<HTMLInputElement>;
      itemsCollection.forEach((item) => {
        expect(item.name).toBe(name);
      });
    });
    test("Size property assign for all checkbox", () => {
      const size = "l";
      renderComponent({ size });
      const groupContainer = screen.getByTestId(testId);
      const group = groupContainer.querySelector(".group") as HTMLDivElement;
      const itemsCollection = group.querySelectorAll(
        ".checkbox"
      ) as NodeListOf<HTMLInputElement>;
      itemsCollection.forEach((item) => {
        expect(item.className).toContain(`checkbox__size--${size}`);
      });
    });
    test("Title must being rendered", () => {
      const title = "Title";
      renderComponent({ title });
      const groupContainer = screen.getByTestId(testId);
      expect(groupContainer.textContent).toContain(title);
    });
  });
  describe("Limit checking", () => {
    test("Quantity must be equal or less then limit", () => {
      const limit = 3;
      renderComponent({ limit });
      const groupContainer = screen.getByTestId(testId);
      expect(groupContainer.textContent).toContain("123Показать еще");
    });
    test("Show all when 'more' clicked", () => {
        const limit = 3;
        renderComponent({ limit });
        const groupContainer = screen.getByTestId(testId);
        expect(groupContainer.textContent).toContain("123Показать еще");
        const showMoreButton = groupContainer.querySelector(".more") as HTMLParagraphElement;
        fireEvent.click(showMoreButton);
        expect(groupContainer.textContent).toContain("12345")
    });
  });
});
