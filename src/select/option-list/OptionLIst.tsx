import React from "react";
import { IOptionsListProps } from "../types";
import OptionItem from "../option-item/OptionItem";
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
}: IOptionsListProps) => {
  if (!items || (items && items.length === 0)) return;

  const ulClassName = clsx(styles.options, {
    [styles["options--opened"]]: isOpen,
    [styles["options--closed"]]: isOpen === false,
    [styles["options--default"]] : isOpen === "default"
  });

  const options = items.map((option, ind) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
      setIsOpen();
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <OptionItem
        label={option.label}
        name={name}
        value={option.value}
        checked={selectedValue === option.value}
        onChange={changeHandler}
        tabIndex={0}
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
