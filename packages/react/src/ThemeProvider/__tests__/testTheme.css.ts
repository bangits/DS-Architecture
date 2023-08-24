import { ThemeValues, createTheme } from "@mui/core/themes";

export const testTheme: ThemeValues = {
  color: {
    brand: "black",
  },
};

export const testThemeClassName = createTheme(testTheme);
