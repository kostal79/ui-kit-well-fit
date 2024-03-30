import React, { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import clsx from "clsx";
import { ArrowDownIcon } from "../icons";
import OptionList from "./option-list/OptionLIst";
import { ISelectProps, SelectValueFunction, defaultSelectSize } from "./types";

const Select = ({
  classNameAdditional,
  label,
  name,
  selectSize = defaultSelectSize,
  optionList,
  "data-testid": dataTestId,
  placeholder,
  defaultValue,
  disabled,
  onChange,
}: ISelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    defaultValue ? defaultValue : placeholder ? placeholder : ""
  );

  const [isOpen, setIsOpen] = useState<boolean | "default">("default");

  const customSelectClassName = clsx(styles.container, classNameAdditional!, {
    [styles["size--s"]]: selectSize === "s",
    [styles["size--l"]]: selectSize === "l",
  });

  const selectButtonClassName = clsx(styles["select-button"], {
    [styles["select-button--open"]]: isOpen === true,
    [styles["select-button--close"]]: !isOpen,
    [styles["select-button--selected"]]:
      selectedValue && selectedValue !== placeholder,
    [styles["select-button--disabled"]]: disabled,
  });

  const ariaControl: string = `select-dropdown-${name}`;

  const openToogler: () => void = () => {
    setIsOpen((prev) => {
      if (prev === "default" || prev === false) return true;
      return false;
    });
  };

  const selectRef = useRef<HTMLDivElement>(null);

  const onClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const selectedValueHandler: SelectValueFunction = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={customSelectClassName} data-testid={dataTestId} ref={selectRef}>
      {label && <label className={styles.label}>{label}</label>}
      <button
        className={selectButtonClassName}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={ariaControl}
        onClick={openToogler}
        disabled={disabled}
      >
        <span className={styles["selected-value"]}>{selectedValue}</span>
        <span className={styles.icon}>{<ArrowDownIcon color="#909CB5" />}</span>
      </button>
      <OptionList
        items={optionList}
        name={name}
        isOpen={isOpen}
        setIsOpen={openToogler}
        selectedValue={selectedValue}
        onChange={onChange}
        setSelectedValue={selectedValueHandler}
      />
    </div>
  );
};

export { Select };

//second