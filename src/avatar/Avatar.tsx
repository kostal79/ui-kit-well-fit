import React from "react";
import styles from "./Avatar.module.scss";
import { AvatarIcon } from "../icons";
import clsx from "clsx";

export type AvatarProps = {
  color?: string;
  className?: string;
  url?: string;
  ['data-testid']?: string;
};

const Avatar: React.FC<AvatarProps> = ({ color = "#858FA4", className, url, "data-testid": dataTestId }: AvatarProps) => {
  const avatarClassName = clsx(styles.avatar, className!);
  return (
    <div className={avatarClassName} data-testid={dataTestId ? dataTestId : null}>
      {!url && <AvatarIcon color={color} />}
      {url && <img className={styles.image} src={url} alt="avatar" />}
    </div>
  );
};

export {Avatar};
