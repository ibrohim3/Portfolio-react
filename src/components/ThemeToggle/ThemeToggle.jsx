import React from "react";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <button
        className="btn"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default ThemeToggle;
