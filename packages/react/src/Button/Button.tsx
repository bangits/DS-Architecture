import { button } from "@mui/core/styles/button/index.css";
import { FC, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;

  onClick?(): void;
}

const Button: FC<ButtonProps> = ({ children, iconLeft, iconRight }) => (
  <button
    type="button"
    className={button({
      variant: "primary",
    })}
  >
    {iconLeft}

    <span>{children}</span>

    {iconRight}
  </button>
);

export default Button;
