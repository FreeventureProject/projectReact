import { Link } from "react-router-dom"
import { useTheme } from "../ThemeContext";

function NavBar({ title }) {

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#173B3B' : '#CEDEDA',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const linkFont = {
    color: darkTheme ? '#173B3B' : '#CEDEDA',
  }

  return <nav className="nav" style={themeStyles}>
    <Link to='/' style={linkFont} className="logo">{title}</Link>
    <ul className="navList" >
      <li><Link to="/" style={linkFont}>Home</Link></li>
      <li><Link to="/forecast" style={linkFont}>Forecast</Link></li>
      <li><Link to="/astronomy" style={linkFont}>Astronomy</Link></li>
    </ul>
  </nav>

}

export default NavBar