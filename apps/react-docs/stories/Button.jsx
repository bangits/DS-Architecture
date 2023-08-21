import { button, defaultThemeClassName } from "@my-ui/core/src";
import "@my-ui/core/src/globals.css";
import React from "react";

export const Button = () => {
  return (
    <div className={defaultThemeClassName}>
      <div
        className={button({
          disabled: true,
        })}
      >
        Button
      </div>
    </div>
  );
};
