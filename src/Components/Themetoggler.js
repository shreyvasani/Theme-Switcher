import React, { useContext } from "react";
import ThemeContext from "../Context/Themecontext.js";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  console.log(themeMode)

  return (
    <div
      onClick={
        () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
    </div>
  );
};

export default ThemeToggler;
