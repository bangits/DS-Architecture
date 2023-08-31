import axe from "axe-core";
import { expect, test, describe } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { handleAxeRes } from "@mui/react/__tests__/helpers";
import Button from "../Button";

describe("Button testing", () => {
  test("Button render ", async () => {
    render(
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
    );
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
