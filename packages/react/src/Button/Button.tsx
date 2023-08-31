import { button } from "@mui/core/styles/button/index.css";
import { memo, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
}

const Button = memo(({ onClick, children }: ButtonProps) => (
  <button onClick={onClick} type="button" className={button()}>
    {children}
  </button>
));

Button.displayName = "Button";

export default Button;
