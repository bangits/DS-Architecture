import MyUIButton from "@my-ui/react/Button";
import ThemeProvider from "@my-ui/react/ThemeProvider";

export const Button = () => {
  return (
    <ThemeProvider>
      <MyUIButton onClick={() => {}}>Click me</MyUIButton>
    </ThemeProvider>
  );
};
