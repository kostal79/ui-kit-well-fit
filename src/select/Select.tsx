import React from "react";
import styles from "./Select.module.scss";
import { makeOptions } from "./helpers";
import clsx from "clsx";

const sizes = ["s", "l"] as const;
type SelectSize = (typeof sizes)[number];
const defaultSize: SelectSize = sizes[0];

interface SelectProps extends React.ComponentProps<"select"> {
  classNameAdditional?: string;
  label?: string;
  selectSize: SelectSize;
  optionList?: Array<string>;
  "data-testid": string;
}

const Select = ({
  classNameAdditional,
  label,
  name,
  selectSize = defaultSize,
  optionList = [],
  "data-testid": dataTestId,
  ...otherProps
}: SelectProps) => {
  const options = makeOptions(optionList, name!);

  const customSelectClassName = clsx(styles.container, classNameAdditional!, {
    [styles["size--s"]]: selectSize === "s",
    [styles["size--l"]]: selectSize === "l",
  })

  return (
    <div className={customSelectClassName} data-testid={dataTestId}>
      <label>
        {label && <span className={styles.label}>{label}</span>}
        <select className={styles.select} {...otherProps}>
          {options}
        </select>
      </label>
    </div>
  );
};

export { Select };
