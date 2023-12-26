import React from "react";
import { OptionProps } from "../types";
import styles from "../Select.module.scss";
import clsx from "clsx";

const Option = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
}: OptionProps) => {
  const liClassName = clsx(styles.li, {
    [styles["li--checked"]] : checked,
    [styles["li--disabled"]] : disabled,
  })

  const labelClassName = clsx(styles["item-label"], {
    [styles["item-label--checked"]] : checked,
    [styles["item-label--disabled"]] : disabled,
  })

  return (
    <li className={liClassName} role="option" key={`${name}-${value}`}>
      <label className={labelClassName}>
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

export default Option;
