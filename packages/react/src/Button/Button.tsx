import { button } from "@mui/core/styles/button/index.css";
import { FC, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} disabled type="button" className={button({
      variant: "primary"
    })}>
      Button CTA
    </button>
  );
};

export default Button;
