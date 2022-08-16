import React from 'react';
import { Icon } from '@iconify/react';
// import {Link, NavLink} from 'react-router-dom';
// import styles from "./Navbar.module.css";
// import logo from "../images/logo.png"

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLogo
} from './NavbarElements';



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <h1>Logo</h1>
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle ={{ color:'black' }}>خانه</NavLink>
                    <NavLink to="/psychs" activeStyle ={{ color:'black' }}>درمانگران</NavLink>
                    <NavLink to="/" activeStyle ={{ color:'black' }}>رویداد ها</NavLink>
                    <NavLink to="/" activeStyle ={{ color:'black' }}>پادکست ها</NavLink>
                    <NavLink to="/" activeStyle ={{ color:'black' }}>ویدیو ها</NavLink>
                    
                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to="/signup">ثبت نام</NavBtnLink> */}
                    <NavBtnLink to="/login"><Icon icon="heroicons-outline:login"  />ورود
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;