import React, { FC, PropsWithChildren, useRef, useState } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type Width = "default" | "full";
type Size = "s" | "m" | "l";
type View = "primary" | "secondary" | "disabled";

interface IButtonProps {
  className: string;
  label: string;
  view?: View;
  width?: Width;
  size: Size;
  IconLeft?: React.ComponentType;
  IconRight?: React.ComponentType;
  loading?: boolean;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  className,
  label,
  view = "primary",
  IconLeft,
  IconRight,
  width = "default",
  size = "l",
  onClick,
  loading = false,
}) => {
  const buttonClassName = clsx(styles.button, className, {
    [styles.primary]: view === "primary",
    [styles.secondary]: view === "secondary",
    [styles.disabled]: view === "disabled",
    [styles["width--default"]]: width === "default",
    [styles["width--full"]]: width === "full",
    [styles["size--s"]]: size === "s",
    [styles["size--m"]]: size === "m",
    [styles["size--l"]]: size === "l",
  });

  const disabled = view === "disabled";
  let loader = (
    <div className={styles["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={clsx(styles.content, { [styles.loading]: loading })}>
        {IconLeft && (
          <span className={styles["icon--left"]}>
            {<IconLeft />}
          </span>
        )}
        <span className={styles.text}>{label}</span>
        {IconRight && (
          <span className={styles["icon--right"]}>
            {<IconRight />}
          </span>
        )}
      </div>
      {loading && loader}
    </button>
  );
};

export { Button };
