import { assertType, it } from "vitest";
import { createTheme } from "../createTheme";
import { ThemeValues } from "../default.css";

it("createTheme returns string", (t) => {
  t.skip();

  assertType<string>(createTheme({} as ThemeValues));
});
