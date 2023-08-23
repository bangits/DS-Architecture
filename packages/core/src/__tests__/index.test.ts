import { expect, it } from "vitest";
import * as allExports from "../index";

it.fails("index.ts not throw error", () => {
  expect(allExports).toThrow();
});
