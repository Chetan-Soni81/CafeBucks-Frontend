import React from 'react'
import './admindashboard.css'

import { Outlet, NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'
import { FaHome,FaCube,FaBox,FaThList,FaUsers } from 'react-icons/fa'

const AdminDashboardPage = () => {
    return (
        <main className='admin_dash_main'>
            <div className='side_bar_panel'>
                <Nav vertical className='side_nav'>
                    <li>
                        <NavLink to='/admin/dashboard/home' className={(navClass) => navClass.isActive ? 'link__active' : ''}>
                            <FaHome />
                            <label>Home</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/dashboard/category' className={(navClass) => navClass.isActive ? 'link__active' : ''}>
                            <FaThList/>
                            <label>Categories</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/dashboard/product'  className={(navClass) => navClass.isActive ? 'link__active' : ''}>
                            <FaCube />
                            <label>Products</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaBox/>
                            <label>Orders</label>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaUsers/>
                            <label>Users</label>
                        </NavLink>
                    </li>
                </Nav>
            </div>
            <div className='admin_dash_panel'>
                <Outlet />
            </div>
        </main>
    )
}

export default AdminDashboardPage