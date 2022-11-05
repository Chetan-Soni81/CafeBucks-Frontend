import React from 'react'

import { Container, Nav } from 'reactstrap'

import { BsHouseDoor, BsSpeedometer2, BsTable, BsGrid, BsPersonCircle, BsCart3 } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import logo from '../../images/favicon-32x32.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="header__main">
                <Container>
                    <div className="navigation">
                        <Link to="/" className="nav__title">
                            <img src={logo} width={40} height={32} alt="logo" /> CafeBucks
                        </Link>

                        <Nav className="col-12 col-lg-auto text-small nav__links">
                            <motion.li whileHover={{ scale: .9 }} className='nav__item'>
                                <NavLink to="/home" className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                    <BsHouseDoor />
                                    Home
                                </NavLink>
                            </motion.li>

                            <motion.li whileHover={{ scale: .9 }} className='nav__item'>
                                <NavLink to="/dashboard" className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                    <BsSpeedometer2 />
                                    Dashboard
                                </NavLink>
                            </motion.li>

                            <motion.li whileHover={{ scale: .9 }} className='nav__item'>
                                <NavLink to="/orders" className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                    <BsTable />
                                    Orders
                                </NavLink>
                            </motion.li>

                            <motion.li whileHover={{ scale: .9 }} className='nav__item'>
                                <NavLink to="/cart" className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                    <BsCart3 />
                                    Cart
                                </NavLink>
                            </motion.li>

                            <motion.li whileHover={{ scale: .9 }} className='nav__item'>
                                <NavLink to="/product" className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                    <BsGrid />
                                    Products
                                </NavLink>
                            </motion.li>

                            <motion.li whileHover={{ scale: .9 }} className='nav__item dropdown'>
                                <span>
                                    <BsPersonCircle />
                                    <div className="dropdown-content">
                                        <Link to="/login">Login/Signup</Link>
                                        <Link to="/order">Orders</Link>
                                        <Link to="">Account Settings</Link>
                                    </div>
                                    Customers
                                </span>
                            </motion.li>
                        </Nav>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header