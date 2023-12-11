import React from "react";
import { Checkbox, CheckboxProps, SizeProp } from "../checkbox/Checkbox";
import styles from "./CheckboxGroup.module.scss";
import clsx from "clsx";

type Order = "row" | "column";
const defaultOrder: Order = "column";

type CheckboxGroupProps = {
  className?: string;
  items: CheckboxProps[];
  order?: Order;
  size?: SizeProp;
  title?: string;
  name: string;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  items,
  className,
  order = defaultOrder,
  size = "s",
  title,
  name,
}: CheckboxGroupProps) => {
  const groupClassName = clsx(styles.group, {
    [styles["order--column"]]: order === "column",
    [styles["order--row"]]: order === "row",
    [styles["size--s"]]: size === "s",
    [styles["size--l"]]: size === "l",
  });

  const containerClassName = clsx(styles.container, className!);

  return (
    <div className={containerClassName}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={groupClassName}>
        {items.map((item: CheckboxProps) => {
          return <Checkbox {...item} size={size} name={name}/>;
        })}
      </div>
    </div>
  );
};

export { CheckboxGroup };
