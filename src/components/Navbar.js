import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return <header>
        <nav>
            <NavLink to="/" className={ ({isActive}) => 
                isActive ? 'activeLink' : 'nonactiveLink'
            }>Domů</NavLink>
            <NavLink to="/Pokemon" className={({ isActive }) =>
                isActive ? 'activeLink' : 'nonactiveLink'
            }>Pokémon</NavLink>
        </nav>
    </header>
}
  
  export default Navbar