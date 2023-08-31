import { handleAxeRes } from "@mui/react/__tests__/helpers";
import { cleanup, render } from "@testing-library/react";
import axe from "axe-core";
import { describe, expect, test, vi } from "vitest";
import Button from "../Button";

describe("Button testing", () => {
  const onClick = vi.fn();

  test("Button render ", async () => {
    render(<Button onClick={onClick}>Click me</Button>);
    expect(document.getElementsByTagName("button")[0].innerHTML).toBe(
      "Click me"
    );
  });

  test("Button accesibility", async () => {
    const res = await axe.run();
    handleAxeRes(res);
    expect(res.violations.length).toBe(0);
    cleanup();
  });
});
