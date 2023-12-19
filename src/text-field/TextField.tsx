import React, { ChangeEventHandler, useRef } from "react";
import { IMaskInput } from "react-imask";
import clsx from "clsx";
import styles from "./TextField.module.scss";

type TextFieldSize = "s" | "l" ; 
const defaultTextFieldSize: TextFieldSize = "s";

type Background = "primary" | "secondary";
const defaultBackground: Background = "primary";



type TextFieldType =
  | "text"
  | "tel"
  | "email"
  | "password"
  | "number"
  | "textarea";

interface InputProps {
  id?: string;
  className?: string;
  name?: string;
  TextFieldSize?: TextFieldSize;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  placeholder?: string;
  backgroung?: Background;
  type?: TextFieldType;
  mask?: React.ComponentProps<typeof IMaskInput>["mask"];
  onChange?: ChangeEventHandler;
  onAccept?: React.ComponentProps<typeof IMaskInput>["onAccept"];
  maxLength?: number;
  minLength?: number;
  tabindex?: number;
  value?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const TextField: React.FC<InputProps> = ({
  className,
  id,
  name,
  TextFieldSize = defaultTextFieldSize,
  label,
  required = false,
  icon,
  placeholder,
  type = "text",
  backgroung = defaultBackground,
  onChange,
  maxLength,
  minLength,
  tabindex,
  value,
  disabled = false,
  min,
  max,
  mask = /[\w*\d*]*/,
  onAccept,
}) => {
  const conponentClassName = clsx(styles.container, className, {
    [styles["with-icon"]]: icon,
    [styles["background--primary"]]: backgroung === "primary",
    [styles["background--secondary"]]: backgroung === "secondary",
    [styles["size--s"]]: TextFieldSize === "s",
    [styles["size--l"]]: TextFieldSize === "l",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={conponentClassName}>
      <label>
        {label && (
          <p className={styles.label}>
            {label} {required && <span className={styles.star}>*</span>}
          </p>
        )}
        {type !== "textarea" && (
          <div className={styles["input-box"]}>
            <IMaskInput
              type={type}
              mask={mask}
              className={styles.input}
              radix="."
              value={value}
              unmask={true} // true|false|'typed'
              inputRef={inputRef}
              onAccept={onAccept}
              name={name}
              minLength={minLength}
              maxLength={maxLength}
              placeholder={placeholder}
              required={required}
              tabIndex={tabindex}
              disabled={disabled}
              min={min}
              max={max}
            />
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
        )}
        {type === "textarea" && (
          <div className={styles["input-box"]}>
            <textarea
              id={id}
              className={styles.input}
              name={name}
              placeholder={placeholder}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              required={required}
              tabIndex={tabindex}
              value={value}
              disabled={disabled}
            />
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
        )}
      </label>
    </div>
  );
};

export { TextField };
