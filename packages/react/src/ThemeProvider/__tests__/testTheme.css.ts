import { ThemeValues, createTheme } from "@my-ui/core/themes";

export const testTheme: ThemeValues = {
  color: {
    brand: "black",
  },
};

export const testThemeClassName = createTheme(testTheme);
