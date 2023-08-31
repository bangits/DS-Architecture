import Icon from "@mui/react-docs/src/stories/Icon";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Button from "../Button";

describe("Button Testing", () => {
  let button: HTMLButtonElement;

  const buttonText = "TESTING";
  const handleClick = vi.fn();

  test.fails("should rendered without errors", async () => {
    const renderResult = render(
      <Button
        ref={(btnElement) => (button = btnElement)}
        variant="primary"
        data-testid="btn"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );

    button = (await renderResult.findByTestId("btn")) as HTMLButtonElement;

    expect(renderResult).toThrow();
  });

  test("check children prop", () => {
    expect(button.textContent).toBe(buttonText);
  });

  test("calls click event handler on button click", async () => {
    await userEvent.click(button);

    expect(handleClick).toBeCalled();
  });

  test.fails(
    "disabled button test, the button should be unable to perform pointer interaction",
    async () => {
      button.setAttribute("disabled", "true");
      await userEvent.click(button);
      cleanup();
    }
  );
  test("left icon button testing", async () => {
    const renderResult = render(
      <Button
        iconLeft={<Icon />}
        ref={(btnElement) => (button = btnElement)}
        variant="primary"
        data-testid="btn_2"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );

    button = (await renderResult.findByTestId("btn_2")) as HTMLButtonElement;
    const hasSVG = button.childNodes[0].nodeName === "svg";
    expect(hasSVG).toBe(true);
    cleanup();
  });

  test("right icon button testing", async () => {
    const renderResult = render(
      <Button
        iconRight={<Icon />}
        ref={(btnElement) => (button = btnElement)}
        variant="primary"
        data-testid="btn_3"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );

    button = (await renderResult.findByTestId("btn_3")) as HTMLButtonElement;
    const hasSVG = button.childNodes[1].nodeName === "svg";
    expect(hasSVG).toBe(true);
    cleanup();
  });
});
