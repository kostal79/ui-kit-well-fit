import React, { useState } from "react";
import { Checkbox, CheckboxProps, SizeProp } from "../checkbox/Checkbox";
import styles from "./CheckboxGroup.module.scss";
import clsx from "clsx";

type Order = "row" | "column";
const defaultOrder: Order = "column";

type CheckboxGroupProps = {
  items: CheckboxProps[];
  name: string;
  className?: string;
  order?: Order;
  size?: SizeProp;
  title?: string;
  limit?: number;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  items,
  className,
  order = defaultOrder,
  size = "s",
  title,
  name,
  limit,
}: CheckboxGroupProps) => {
    const [visible, setVisible] = useState<boolean>(false);
  const groupClassName = clsx(styles.group, {
    [styles["order--column"]]: order === "column",
    [styles["order--row"]]: order === "row",
    [styles["size--s"]]: size === "s",
    [styles["size--l"]]: size === "l",
  });

  const containerClassName = clsx(styles.container, className!);

  const getItems = (
    items: CheckboxProps[],
    from: number,
    to: number
  ): React.ReactNode[] | undefined => {
    const result: React.ReactNode[] | undefined = items.map(
      (item: CheckboxProps, index: number) => {
        if (from <= index + 1 && to >= index + 1) {
          return <Checkbox key={index} {...item} size={size} name={name} />;
        }
        return null;
      }
    );
    return result;
  };

  const visibleToggler = ():void => {
    setVisible(true)
  }

  return (
    <div className={containerClassName}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={groupClassName}>
        {limit && getItems(items, 1, limit)}
        {!limit && getItems(items, 1, items.length)}
        {limit && !visible && limit < items.length && <p className={styles.more} onClick={visibleToggler}>Показать еще</p>}
        {limit && visible && getItems(items, limit + 1, items.length)}
      </div>
    </div>
  );
};

export { CheckboxGroup };
