import React from "react"
import { useTheme, useThemeUpdate } from "../ThemeContext"

const ThemeComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  console.log('current theme:', darkTheme)
  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',

    color: darkTheme ? '#173B3B' : '#CEDEDA'

  }


  return (
    <div className="buttonContainer">
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}


export default ThemeComponent