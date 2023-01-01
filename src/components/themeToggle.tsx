import React, { useContext } from "react"
import styled from "styled-components"
import DarkThemeContext from "../context/DarkTheme"
import Moon from "../images/Moon"
import Sun from "../images/Sun"

const ToggleLabel = styled.label`
  display: block;

  .toggle {
    height: 32px;
    width: 65px;
    background: ${({ theme }) => theme.color.foreground};
    border-radius: 20px;
    padding: 6px;
    position: relative;
    transition: background 0.5s ease;
    cursor: pointer;
  }

  .toggle::before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    background: ${({ theme }) => theme.color.background};
    position: absolute;
    z-index: 2;
    transform: translate(0);
    transition: transform 0.5s ease, background 0.5s ease;
  }

  .toggle.enabled::before {
    transform: translateX(32px);
  }

  .toggle input {
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .toggle .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 2.5px;
  }

  .toggle .icons svg {
    fill: ${({ theme }) => theme.color.background};
    height: 15px;
    width: 15px;
    z-index: 0;
  }
`

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkThemeContext)

  const onToggleTheme = () => {
    window.localStorage.setItem("color-mode", isDarkMode ? "light" : "dark")
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ToggleLabel className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isDarkMode ? "enabled" : "disabled"}`}>
        <div className="icons">
          <Sun />
          <Moon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          onClick={onToggleTheme}
        />
      </div>
    </ToggleLabel>
  )
}

export default ThemeToggle
