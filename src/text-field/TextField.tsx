import React, { ChangeEventHandler, useRef } from "react";
import { IMaskInput } from "react-imask";
import clsx from "clsx";
import styles from "./TextField.module.scss";

export const textFieldSize = ["s", "l"] as const;
export type TextFieldSize = (typeof textFieldSize)[number];
export const defaultTextFieldSize: TextFieldSize = textFieldSize[0];

export const background = ["primary", "secondary"] as const;
export type Background = (typeof background)[number];
const defaultBackground: Background = background[0];

export const textFieldTypes = [
  "text",
  "tel",
  "email",
  "password",
  "number",
  "textarea",
] as const;
export type TextFieldType = (typeof textFieldTypes)[number];
export const defaultTextFieldType: TextFieldType = textFieldTypes[0];

interface InputProps {
  id?: string;
  "data-testid"?: string;
  className?: string;
  name?: string;
  TextFieldSize?: TextFieldSize;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  placeholder?: string;
  backgroung?: Background;
  type?: TextFieldType;
  onChange?: ChangeEventHandler;
  onAccept?: React.ComponentProps<typeof IMaskInput>["onAccept"];
  maxLength?: number;
  minLength?: number;
  tabindex?: number;
  value?: string;
  disabled?: boolean;
  maskOptions?: React.ComponentProps<typeof IMaskInput>;
}

const TextField: React.FC<InputProps> = ({
  className,
  id,
  "data-testid": dataTestId,
  name,
  TextFieldSize = defaultTextFieldSize,
  label,
  required = false,
  icon,
  placeholder,
  type = defaultTextFieldType,
  backgroung = defaultBackground,
  onChange,
  maxLength,
  minLength,
  tabindex,
  value,
  disabled = false,
  maskOptions,
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
    <div className={conponentClassName} data-testid={dataTestId}>
      <label>
        {label && (
          <p className={styles.label}>
            {label}{required && <span className={styles.star}> *</span>}
          </p>
        )}
        {type !== "textarea" && (
          <div className={styles["input-box"]}>
            <IMaskInput
              {...maskOptions}
              type={type}
              className={styles.input}
              value={value}
              inputRef={inputRef}
              name={name}
              minLength={minLength}
              maxLength={maxLength}
              placeholder={placeholder}
              required={required}
              tabIndex={tabindex}
              disabled={disabled}
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
