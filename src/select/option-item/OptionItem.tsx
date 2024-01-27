import React from "react";
import { IOptionProps } from "../types";
import styles from "../Select.module.scss";
import clsx from "clsx";

const OptionItem = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  tabIndex,
}: IOptionProps) => {
  const liClassName = clsx(styles.li, {
    [styles["li--checked"]] : checked,
    [styles["li--disabled"]] : disabled,
  })

  const labelClassName = clsx(styles["item-label"], {
    [styles["item-label--checked"]] : checked,
    [styles["item-label--disabled"]] : disabled,
  })

  return (
    <li className={liClassName} role="option" key={`${name}-${value}`} tabIndex={tabIndex}>
      <label className={labelClassName} >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </label>
    </li>
  );
};

export default OptionItem;
