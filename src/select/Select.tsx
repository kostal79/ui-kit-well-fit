import React, { useState } from "react";
import styles from "./Select.module.scss";
import Options from "./Option/Options";
import clsx from "clsx";
import { ArrowDownIcon } from "../icons";

export const sizes = ["s", "l"] as const;
export type SelectSize = (typeof sizes)[number];
export const defaultSize: SelectSize = sizes[0];

export interface SelectProps {
  classNameAdditional?: string;
  label?: string;
  name: string;
  placeholder: string;
  selectSize: SelectSize;
  optionList?: Array<string>;
  onChange: () => void;
  "data-testid": string;
}

const Select = ({
  classNameAdditional,
  label,
  name,
  selectSize = defaultSize,
  optionList = [],
  "data-testid": dataTestId,
  placeholder,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    placeholder ? placeholder : ""
  );

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const customSelectClassName = clsx(styles.container, classNameAdditional!, {
    [styles["size--s"]]: selectSize === "s",
    [styles["size--l"]]: selectSize === "l",
  });

  const selectButtonClassName = clsx(styles["select-button"], {
    [styles["select-button--open"]] : isOpen,
    [styles["select-button--close"]] : !isOpen
  })

  const optionsClassName = clsx(styles.options, {
    [styles["options--open"]] : isOpen,
    [styles["options--close"]] : !isOpen
  })


  const ariaControl: string = `select-dropdown-${name}`;

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
      >
        <span className={styles["selected-value"]}>{selectedValue}</span>
        <span className={styles.icon}>{<ArrowDownIcon color="#909CB5" />}</span>
      </button>
      <ul className={optionsClassName} role="listbox" id={ariaControl}>
        {<Options optionList={optionList} name={name} />}
      </ul>
    </div>
  );
};

export { Select };
