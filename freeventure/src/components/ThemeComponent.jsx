import React from "react"
import { useTheme, useThemeUpdate } from "../ThemeContext"

const ThemeComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  console.log('current theme:', darkTheme)
  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#CEDEDA' : '#173B3B'
  }


  return (

    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <div style={themeStyles}></div>
    </>

  )
}


export default ThemeComponent