import { defaultThemeClassName } from "@mui/core/themes/default.css";
import { FC, ReactNode, useEffect, useRef } from "react";
import { registerFont } from "./registerFont";

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
    registerFont("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
    document.documentElement.classList.remove(lastThemeClassName.current);
    document.documentElement.classList.add(themeClassName);

    lastThemeClassName.current = themeClassName;
  }, [themeClassName]);

  return <>{children}</>;
};

export default ThemeProvider;
