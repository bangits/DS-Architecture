import { ThemeValues, createTheme, defaultTheme } from "@mui/core/themes";
import { vars } from "@mui/core/themes/default.css";

export const testTheme: ThemeValues = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    brand: vars.color.brand,
  },
};

export const testThemeClassName = createTheme(testTheme);
