import { button } from "@mui/core/styles/button/index.css";
import { FC, ReactNode } from "react";


export interface ButtonBaseProps {
  children?: ReactNode;
  onClick?(): void;
}

export interface ButtonWithBothIcons {
  icon?: "both";
  iconRight: ReactNode;
  iconLeft: ReactNode;
}

export interface ButtonWithRightIcon {
  icon?: "iconRight";
  iconRight: ReactNode;
}
export interface ButtonWithLeftIcon {
  icon?: "iconLeft";
  iconLeft: ReactNode;
}

const Button: FC<
  ButtonBaseProps &
    (ButtonWithBothIcons | ButtonWithRightIcon | ButtonWithLeftIcon)
> = (props) => {
  let icon = props.icon;
  let iconLeft = null;
  let iconRight = null;

  if (props.icon === "both") {
    iconRight = props.iconRight;
    iconLeft = props.iconLeft;
  }
  
  if (props.icon === "iconRight") {
    iconRight = props.iconRight;
  }

  if (props.icon === "iconLeft") {
    iconLeft = props.iconLeft;
  }
  
  return (
    <button
      type="button"
      className={button({
        variant: "primary",
      })}
    >
      {icon === "both" ? <>{iconLeft}<span>Button CTA</span>{iconRight}</>:null}
      {icon === "iconRight" ? <><span>Button CTA</span>{iconRight}</>:null}
      {icon === "iconLeft" ? <>{iconLeft}<span>Button CTA</span></>:null}
    </button>
  );
};

export default Button;
