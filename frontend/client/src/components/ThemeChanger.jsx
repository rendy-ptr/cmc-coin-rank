import React, { useEffect } from "react";
import { useState } from "react";

function ThemeChanger() {
  const [theme, setTheme] = useState("default");

  const themeConfig = [
    "light",
    "dark",
    "cyberpunk",
    "valentine",
    "forest",
    "aqua",
    "pastel",
    "wireframe",
    "luxury",
    "dracula",
    "autumn",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "sunset",
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (event) => {
    const seledtedTheme = event.target.value;
    setTheme(seledtedTheme);
    document.documentElement.setAttribute("data-theme", seledtedTheme);
    localStorage.setItem("theme", seledtedTheme);
  };

  return (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary> Theme </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              {themeConfig.map(
                (t) => (
                  <li key={t}>
                    <label className="flex items-center p-2 cursor-pointer">
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="radio mr-2 bg-base-200"
                        aria-label={t}
                        value={t}
                        checked={theme === t}
                        onChange={handleThemeChange}
                      />
                      <span className="text-base-content">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                    </label>
                  </li>
                )
              )}
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
}

export default ThemeChanger;
