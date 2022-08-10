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
                    <NavLink to="/" activeStyle>خانه</NavLink>
                    <NavLink to="/" activeStyle>متخصصان</NavLink>
                    <NavLink to="/" activeStyle>رویداد ها</NavLink>
                    <NavLink to="/" activeStyle>پادکست ها</NavLink>
                    <NavLink to="/" activeStyle>ویدیو ها</NavLink>
                    
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