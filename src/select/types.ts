export const selectSize = ["s", "m", "l"] as const;
export type SelectSize = (typeof selectSize)[number];
export const defaultSelectSize: SelectSize = selectSize[0];

export type OptionList = Pick<IOptionProps, "label" | "name" | "value">;
export type SelectValueFunction = (value: string) => void;

export interface IOptionProps {
  label: string;
  name?: string;
  value: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  tabIndex?: number;
}

export interface IOptionsListProps {
  items?: OptionList[];
  name: string;
  selectedValue?: string;
  onChange?: (e: IOptionProps["value"]) => void;
  isOpen: boolean | "default";
  setIsOpen: () => void;
  setSelectedValue: SelectValueFunction;
}

export interface ISelectProps {
  classNameAdditional?: string;
  label?: string;
  name: string;
  placeholder?: string;
  selectSize?: SelectSize;
  optionList?: OptionList[];
  onChange: () => void;
  "data-testid"?: string;
}
