import React from "react";
import { OptionsListProps } from "../types";
import Option from "../option/Option";
import styles from "../Select.module.scss";
import clsx from "clsx";

const OptionList = ({
  items,
  onChange,
  name,
  isOpen,
  setIsOpen,
  selectedValue,
  setSelectedValue,
}: OptionsListProps) => {
  if (!items || (items && items.length === 0)) return;

  const ulClassName = clsx(styles.options, {
    [styles["options--opened"]]: isOpen,
    [styles["options--closed"]]: isOpen === false,
    [styles["options--default"]] : isOpen === "default"
  });

  const options = items.map((option) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
      setIsOpen();
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <Option
        label={option.label}
        name={name}
        value={option.value}
        checked={selectedValue === option.value}
        onChange={changeHandler}
      />
    );
  });

  return (
    <ul className={ulClassName} role="listbox">
      {options}
    </ul>
  );
};

export default OptionList;
