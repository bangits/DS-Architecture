import { button, defaultThemeClassName } from "@my-ui/core";

const Button = () => {
  return (
    <div className={defaultThemeClassName}>
      <div className={button()}>Button</div>
    </div>
  );
};

export default Button;
