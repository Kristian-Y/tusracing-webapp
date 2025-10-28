import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to blueDark
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "darkTheme");

  // Apply theme to <html> immediately
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
