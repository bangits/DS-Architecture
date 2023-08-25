import MyUIButton from "@mui/react/Button";
import ThemeProvider from "@mui/react/ThemeProvider";
import Icon from "./Icon";

export const Button = () => {
  return (
    <ThemeProvider>
      <MyUIButton icon="both" iconLeft={<Icon/>} iconRight={<Icon/>} onClick={() => {}}>Click me</MyUIButton>
    </ThemeProvider>
  );
};
