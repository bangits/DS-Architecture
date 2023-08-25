import { button } from "@mui/core/styles/button/index.css";
import { memo } from "react";

export interface ButtonProps {
  onClick(): void;
}

const Button = memo(({ onClick }: ButtonProps) => (
  <button onClick={onClick} type="button" className={button()}>
    Button
  </button>
));

Button.displayName = "Button";

export default Button;
