import { defaultThemeClassName } from "@my-ui/core/themes/default.css";
import { ReactNode, useEffect, useRef } from "react";

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
    document.documentElement.classList.remove(lastThemeClassName.current);
    document.documentElement.classList.add(themeClassName);

    lastThemeClassName.current = themeClassName;
  }, [themeClassName]);

  return children;
};

export default ThemeProvider;
