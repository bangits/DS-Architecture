import { defaultThemeClassName } from "@my-ui/core/themes/default.css";
import { FC, ReactNode, useEffect, useRef } from "react";

export interface ThemeProviderProps {
  themeClassName?: string;

  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  themeClassName = defaultThemeClassName,
  children,
}: ThemeProviderProps) => {
  const lastThemeClassName = useRef(themeClassName);

  useEffect(() => {
    document.documentElement.classList.remove(lastThemeClassName.current);
    document.documentElement.classList.add(themeClassName);

    lastThemeClassName.current = themeClassName;
  }, [themeClassName]);

  return <>{children}</>;
};

export default ThemeProvider;
