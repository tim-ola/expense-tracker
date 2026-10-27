import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
