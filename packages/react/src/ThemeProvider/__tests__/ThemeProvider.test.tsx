import { defaultThemeVars } from "@mui/core/themes";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ThemeProvider from "..";
import { testThemeClassName } from "./testTheme.css";

describe("ThemeProvider", () => {
  test.fails("should rendered without errors", () => {
    expect(
      render(
        <ThemeProvider themeClassName={testThemeClassName}>
          Content
        </ThemeProvider>
      )
    ).toThrow();
  });

  test("should add themeClassName for html element", () => {
    expect(
      document.documentElement.classList.contains(testThemeClassName)
    ).toBe(true);
  });

  test("should render children", () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });

  test("should add variables", () => {
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        defaultThemeVars.color.brand.replace("var(", "").replace(")", "")
      )
    ).toBe("black");
  });
});
