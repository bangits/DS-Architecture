import { button, ButtonVariants } from "@mui/core/styles/button/index.css";
import { FC, ReactNode } from "react";

export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: ButtonVariants;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  disabled?: true | false;
}
const Button: FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant,
  ...rest

}) => (
  
  <button {...rest} className={button({ variant })} 
  >
    {iconLeft}

    <span>{children}</span>

    {iconRight}
  </button>
);

export default Button;
