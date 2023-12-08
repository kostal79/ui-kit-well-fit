import { FC, PropsWithChildren } from "react";
interface IButtonProps {
    className: string;
    label: string;
    primary?: boolean;
    disabled?: boolean;
    icon?: boolean;
    onClick?: () => void;
}
declare const Button: FC<PropsWithChildren<IButtonProps>>;
export { Button };
