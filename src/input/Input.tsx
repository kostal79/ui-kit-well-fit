import React, { ComponentProps } from "react";
import styles from "./Input.module.scss";
import { BasketIcon } from "../icons";
import clsx from "clsx";

export type InputSize = "s" | "l";
const defaultInputSize: InputSize = "s";

export type Background = "primary" | "secondary";
const defaultBackground: Background = "primary";

interface InputProps extends ComponentProps<"input"> {
  className?: string;
  inputSize?: InputSize;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  backgroung: Background;
}

const Input: React.FC<InputProps> = ({
  className,
  inputSize = defaultInputSize,
  label,
  required = false,
  icon,
  placeholder,
  type = "text",
  backgroung = defaultBackground,
  onChange,
  ...otherProps
}) => {
  const conponentClassName = clsx(styles.container, className, {
    [styles["with-icon"]]: icon,
    [styles["background--primary"]]: backgroung === "primary",
    [styles["background--secondary"]]: backgroung === "secondary",
    [styles["size--s"]]: inputSize === "s",
    [styles["size--l"]]: inputSize === "l",
  });

  const changeHandler : React.ChangeEventHandler<HTMLInputElement> = () => {
    
  }
  return (
    <div className={conponentClassName}>
      <label>
        {label && (
          <p className={styles.label}>
            {label} {required && <span className={styles.star}>*</span>}
          </p>
        )}
        <div className={styles["input-box"]}>
          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...otherProps}
          />
          {icon && <div className={styles.icon}>{icon}</div>}
        </div>
      </label>
    </div>
  );
};

export { Input };
