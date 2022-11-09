import React from 'react'
import './admindashboard.css'

import { Nav, NavLink } from 'reactstrap'
import { FaHome,FaCube,FaBox,FaThList,FaUsers } from 'react-icons/fa'

const AdminDashboardPage = () => {
    return (
        <main class='admin_dash_main'>
            <div className='side_bar_panel'>
                <Nav vertical className='side_nav'>
                    <li>
                        <NavLink>
                            <FaHome />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaThList/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaCube />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaBox/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaUsers/>
                        </NavLink>
                    </li>
                </Nav>
            </div>
            <div className='admin_dash_panel'>

            </div>
        </main>
    )
}

export default AdminDashboardPage