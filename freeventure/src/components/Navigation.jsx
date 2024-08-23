import { Link } from "react-router-dom"
function NavBar({ title }) {
  return <nav className="nav">
    <Link to='/'>{title}</Link>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/forecast">Forecast</Link></li>
      <li><Link to="/astronomy">Astronomy</Link></li>
    </ul>
  </nav>

}

export default NavBar