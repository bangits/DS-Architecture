import MyUIButton from "@mui/react/Button";
import ThemeProvider from "@mui/react/ThemeProvider";

export const Button = () => (
  <ThemeProvider>
    <MyUIButton variant="primary">Button CTA</MyUIButton>
  </ThemeProvider>
);
