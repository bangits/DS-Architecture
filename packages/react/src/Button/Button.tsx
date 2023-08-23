import { button } from "@mui/core/styles/button/index.css";
import { FC } from "react";

export interface ButtonProps {
  onClick(): void;
}

const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={button()}>
      Button
    </button>
  );
};

export default Button;
