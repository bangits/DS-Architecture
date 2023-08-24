import MyUIButton from "@mui/react/Button";
import ThemeProvider from "@mui/react/ThemeProvider";

export const Button = () => {
  return (
    <ThemeProvider>
      <MyUIButton onClick={() => {}}>Click me</MyUIButton>
    </ThemeProvider>
  );
};
