import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const getInitialDarkMode = () => {
  const prefersColor = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storeDarkMode = localStorage.getItem("darkTheme");
  if (storeDarkMode) {
    return storeDarkMode === "true";
  }

  return prefersColor;
};
export function GlobalAppContext({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(getInitialDarkMode());

  const [search, setSearch] = useState("avengers");

  const body = document.querySelector("body");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    // body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  useEffect(() => {
    body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, search, toggleDarkTheme, setSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
