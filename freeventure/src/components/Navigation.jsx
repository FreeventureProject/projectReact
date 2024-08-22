import { Link } from "react-router-dom"
function NavBar({ title }) {
  return <nav className="nav">
    <Link to='/'>{title}</Link>
    <ul>
      <li>
        <Link to="/astrology">Astrology</Link>
      </li>
    </ul>
  </nav>

}

export default NavBar