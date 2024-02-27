import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="Login">Login</NavLink></li>
            </ul>
        </nav>
    )
}