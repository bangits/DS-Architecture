import { assertType, it } from "vitest";
import { createTheme } from "../createTheme";
import { ThemeValues } from "../default.css";

it.skip("createTheme returns string", () => {
  assertType<string>(createTheme({} as ThemeValues));
});
