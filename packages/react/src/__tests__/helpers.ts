import axe from "axe-core";
import "vitest-canvas-mock";

export const handleAxeRes = (res: axe.AxeResults) => {
  if (res.violations.length) {
    // eslint-disable-next-line no-console
    console.log(
      res.violations.map((item) => ({
        type: item.id,
        description: item.description,
        help: item.help,
        helpUrl: item.helpUrl,
      }))
    );
  }
};
