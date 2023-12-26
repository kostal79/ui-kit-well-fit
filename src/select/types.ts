export const selectSize = ["s", "m", "l"] as const;
export type SelectSize = (typeof selectSize)[number];
export const defaultSelectSize: SelectSize = selectSize[0];

export type OptionList = Pick<OptionProps, "label" | "name" | "value">;
export type SelectValueFunction = (value: string) => void;

export interface OptionProps {
  label: string;
  name?: string;
  value: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export interface OptionsListProps {
  items?: OptionList[];
  name: string;
  selectedValue?: string;
  onChange?: (e: OptionProps["value"]) => void;
  isOpen: boolean | "default";
  setIsOpen: () => void;
  setSelectedValue: SelectValueFunction;
}

export interface SelectProps {
  classNameAdditional?: string;
  label?: string;
  name: string;
  placeholder?: string;
  selectSize?: SelectSize;
  optionList?: OptionList[];
  onChange: () => void;
  "data-testid"?: string;
}
