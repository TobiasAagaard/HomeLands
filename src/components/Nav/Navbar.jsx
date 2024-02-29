import { NavLink } from "react-router-dom"
import "./Navbar.scss"

export const Navbar = () => {
    return (
            <nav className="navContainer">
                <ul>
                    <li><NavLink to="/">Forside</NavLink></li>
                    <li><NavLink>Boliger til salg</NavLink></li>
                    <li><NavLink to="Login">Login</NavLink></li>
                </ul>
            </nav>
    )
}