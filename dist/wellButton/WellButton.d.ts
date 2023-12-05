import { FC, PropsWithChildren } from "react";
import "./WellButton.css";
export interface ButtonProps {
    color: string;
    big?: boolean;
}
export declare const WellButton: FC<PropsWithChildren<ButtonProps>>;
