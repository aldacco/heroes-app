import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    console.log({ user })
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                        to='/Search'
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <li >
                        <p className='text-primary'>
                            {user.name}
                        </p>
                    </li>
                    <li>
                        <NavLink
                            className="nav-item nav-link"
                            to="/login"
                            onClick={() => logout()}
                        >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}