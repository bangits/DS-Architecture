import { beforeAll } from "vitest";

beforeAll(() => {
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("lang", "en");
  document.title = "Some Title";
});
