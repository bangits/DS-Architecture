import { defaultThemeClassName } from "@my-ui/core/themes/default.css";
import { ReactNode, useEffect, useRef } from "react";
import { registerFont } from "./registerFont";

export interface ThemeProviderProps {
  themeClassName?: string;

  children: ReactNode;
}

const ThemeProvider = ({
  themeClassName = defaultThemeClassName,
  children,
}: ThemeProviderProps): ReactNode => {
  const lastThemeClassName = useRef(themeClassName);

  useEffect(() => {
    registerFont("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
    document.documentElement.classList.remove(lastThemeClassName.current);
    document.documentElement.classList.add(themeClassName);

    lastThemeClassName.current = themeClassName;
  }, [themeClassName]);

  return children
};

export default ThemeProvider;
