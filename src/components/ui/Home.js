import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth'

export const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.name)
    return (
        <div className='d-flex'>
            <div className="card w-25">
                <NavLink
                    className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                    to="/marvel"
                >
                    <img className='w-100' src="https://diseñoscreativos.com/wp-content/uploads/2017/11/marvel-dise%C3%B1os-creativos-1024x258.png" />
                </NavLink>
            </div>
            <div className="card w-25">
                <NavLink
                    className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
                    to="/dc"
                >
                    <img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png" />
                </NavLink>
            </div>
        </div>
    )
}
