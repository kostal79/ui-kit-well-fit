import React, { useState } from "react";
import styles from "./Select.module.scss";
import clsx from "clsx";
import { ArrowDownIcon } from "../icons";
import OptionList from "./option-list/OptionLIst";
import {
  ISelectProps,
  SelectValueFunction,
  defaultSelectSize,
} from "./types";

const Select = ({
  classNameAdditional,
  label,
  name,
  selectSize = defaultSelectSize,
  optionList,
  "data-testid": dataTestId,
  placeholder,
}: ISelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    placeholder ? placeholder : ""
  );

  const [isOpen, setIsOpen] = useState<boolean | "default">("default");

  const customSelectClassName = clsx(styles.container, classNameAdditional!, {
    [styles["size--s"]]: selectSize === "s",
    [styles["size--l"]]: selectSize === "l",
  });

  const selectButtonClassName = clsx(styles["select-button"], {
    [styles["select-button--open"]]: isOpen === true,
    [styles["select-button--close"]]: !isOpen,
    [styles["select-button--selected"]] : selectedValue && selectedValue !== placeholder,
  });


  const ariaControl: string = `select-dropdown-${name}`;

  const openToogler: () => void = () => {
    setIsOpen((prev) => {
      if (prev === "default" || prev === false) return true;
      return false
    });
  };

  const selectedValueHandler: SelectValueFunction = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={customSelectClassName} data-testid={dataTestId}>
      {label && <label className={styles.label}>{label}</label>}
      <button
        className={selectButtonClassName}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={ariaControl}
        onClick={openToogler}
      >
        <span className={styles["selected-value"]}>{selectedValue}</span>
        <span className={styles.icon}>{<ArrowDownIcon color="#909CB5" />}</span>
      </button>
      <OptionList
        items={optionList}
        name={name}
        onChange={() => {}}
        isOpen={isOpen}
        setIsOpen={openToogler}
        selectedValue={selectedValue}
        setSelectedValue={selectedValueHandler}
      />
    </div>
  );
};

export { Select };
