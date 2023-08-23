import { assertType, test, vi } from "vitest";
import { createTheme } from "../createTheme";
import type { ThemeValues } from "../default.css";

vi.mock("@vanilla-extract/css");

test("createTheme returns string", () => {
  assertType<string>(createTheme({} as ThemeValues));
});
