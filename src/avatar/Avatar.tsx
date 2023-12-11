import React from "react";
import styles from "./Avatar.module.scss";
import { AvatarIcon } from "../icons";
import clsx from "clsx";

export type Props = {
  color?: string;
  className?: string;
  url?: string;
};

const Avatar: React.FC = ({ color = "#858FA4", className, url }: Props) => {
  const avatarClassName = clsx(styles.avatar, className!);
  return (
    <div className={avatarClassName}>
      {!url && <AvatarIcon color={color} />}
      {url && <img className={styles.image} src={url} alt="avatar" />}
    </div>
  );
};

export {Avatar};
