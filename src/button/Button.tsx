import React, { FC } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export type TagProp = "a" | "button";
export const defaultTagProp: TagProp = "button";
export type Width = "default" | "full";
export const defaultWidth: Width = "default";
export type Size = "s" | "m" | "l";
export const defautSize: Size = "l";
export type View = "primary" | "secondary" | "disabled";
export const defaultView: View = "primary";
export type LoadingProp = boolean;
export type OnlyIconProp = boolean;
export const defaultLoading: LoadingProp = false;
export const defaultOnlyIcon: OnlyIconProp = false;
export type ShapeProp = "round" | "default";
export const defaultShapeProp: ShapeProp = "default";
export type HrefProp = string;
export const defaultHrefProp: HrefProp = "#";

export interface IButtonProps {
  tag?: TagProp;
  className?: string;
  label?: string;
  view?: View;
  width?: Width;
  shape?: ShapeProp;
  size?: Size;
  IconLeft?: React.ComponentType;
  IconRight?: React.ComponentType;
  onlyIcon?: OnlyIconProp;
  loading?: LoadingProp;
  onClick?: React.EventHandler<React.MouseEvent>;
  href?: string;
  ["data-testid"]?: string;
}

const Button: FC<IButtonProps> = ({
  tag = defaultTagProp,
  className,
  label,
  view = defaultView,
  IconLeft,
  IconRight,
  width = defaultWidth,
  shape = defaultShapeProp,
  size = defautSize,
  onlyIcon = defaultOnlyIcon,
  loading = defaultLoading,
  onClick,
  href = defaultHrefProp,
  "data-testid": DataTestId,
}) => {
  const buttonOnlyIcon =
    onlyIcon &&
    !label &&
    ((IconLeft && !IconRight) || (IconRight && !IconLeft));

  const buttonLabel = label ?? "";

  const buttonClassName = clsx(styles.button, className, {
    [styles.primary]: view === "primary",
    [styles.secondary]: view === "secondary",
    [styles.disabled]: view === "disabled",
    [styles["width--full"]]: width === "full",
    [styles["size--s"]]: size === "s",
    [styles["size--m"]]: size === "m",
    [styles["size--l"]]: size === "l",
    [styles["only-icon"]]: buttonOnlyIcon === true,
    [styles["shape--round"]]: shape === "round",
  });

  const disabled = view === "disabled";
  let loader = (
    <div className={styles["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const tagContent = (
    <>
      <div className={clsx(styles.content, { [styles.loading]: loading })}>
        {IconLeft && (
          <span className={styles["icon--left"]}>{<IconLeft />}</span>
        )}
        {!onlyIcon && <span className={styles.text}>{buttonLabel}</span>}
        {!onlyIcon && IconRight && (
          <span className={styles["icon--right"]}>{<IconRight />}</span>
        )}
      </div>
      {loading && loader}
    </>
  );

  if (tag === "a") {
    return (
      <a
        className={buttonClassName}
        href={href}
        data-testid={DataTestId && DataTestId}
      >
        {tagContent}
      </a>
    );
  }
  return (
    <button
      className={buttonClassName}
      onClick={clickHandler}
      data-testid={DataTestId && DataTestId}
    >
      {tagContent}
    </button>
  );
};

export { Button };
