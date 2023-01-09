// Scss
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export default function Menu() {
    let activeClass = 'navlink-active';
    let inactiveClass = 'navlink-inactive';

    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/pokedex'}
                        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                    >
                        Pokédex
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/404'}
                        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                    >
                        404
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
