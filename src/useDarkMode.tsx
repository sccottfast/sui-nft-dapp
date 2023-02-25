import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState<boolean>(true);
  console.log(theme);

  const handleSetTheme = () => {
    localStorage.setItem("theme", !theme ? "light" : "dark");
    setTheme(!theme);
  };
  useEffect(() => {
    const defaultTheme = window.localStorage.getItem("theme");
    if (!defaultTheme) {
      setTheme(true);
      return;
    }
    setTheme(defaultTheme === "light");
    // if (!defaultTheme) {
    //   setTheme(false);
    //   return;
    // }

    // setTheme(defaultTheme === "dark");
  }, []);

  // set theme
  useEffect(() => {
    const root = window.document.documentElement.classList;
    if (!theme) {
      root.remove("light");
      root.add("dark");
      return;
    } else {
      root.remove("dark");
      root.add("light");
    }
  }, [theme]);

  return [theme, handleSetTheme] as const;
}
