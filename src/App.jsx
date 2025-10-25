// src/App.jsx
import React from "react";
import useTheme from "./hooks/useTheme";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className="container"
      style={{ maxWidth: "800px", margin: "40px auto" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Ibrohim Qosimov</h1>
        <button
          className="btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light rejim" : "🌙 Dark rejim"}
        </button>
      </div>

      <div className="card">
        <h2>Portfolio</h2>
        <p style={{ color: "var(--muted)" }}>
          Bu sahifa React’da :root CSS o‘zgaruvchilari yordamida light/dark
          rejim bilan ishlaydi.
        </p>
      </div>
    </div>
  );
}
