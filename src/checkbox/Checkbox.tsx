import clsx from "clsx";
import React, { PropsWithChildren, useState } from "react";
import styles from "./Checkbox.module.scss";

export type SizeProp = "s" | "l";
export const defaultSizeProp: SizeProp = "s";

export interface Props {
  className?: string;
  name?: string;
  label?: string;
  size?: SizeProp;
  value?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  children?: React.ReactNode
}

const Checkbox: React.FC<PropsWithChildren<Props>> = ({
  className,
  name,
  label,
  size = defaultSizeProp,
  value,
  onChange,
  checked = false,
  children,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const labeClassName = clsx(styles.label, className!, {
    [styles["label__size--l"]]: size === "l",
    [styles["label__size--s"]]: size === "s",
  });

  const checkboxClassName = clsx(styles.checkbox, {
    [styles["checkbox__size--l"]]: size === "l",
    [styles["checkbox__size--s"]]: size === "s",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleClick: React.EventHandler<React.MouseEvent> = () => {
    setIsChecked((prev) => (prev = !prev));
  };


  return (
    <label className={labeClassName}>
      <input
        className={checkboxClassName}
        type="checkbox"
        name={name}
        value={value!}
        onChange={handleChange}
        checked={isChecked}
        onClick={handleClick}
        // disabled
      />
      {!children && label && <span className={styles.text}>{label}</span>}
      {!label && children && <span >{children}</span>}
    </label>
  );
};

export { Checkbox };
