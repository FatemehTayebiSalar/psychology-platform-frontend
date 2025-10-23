import React from 'react';
import { Icon } from '@iconify/react';

import logo from "../../images/logo.png"

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
    const logoStyle = {
        width : "50%",
        marginTop : "10%"
      };
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={logo} style={logoStyle} alt="logoImg" />
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >خانه</NavLink>
                    <NavLink to="/psychs">درمانگران</NavLink>
                    <NavLink to="/events" >رویداد ها</NavLink>
                    <NavLink to="/podcasts" >پادکست ها</NavLink>
                    <NavLink to="/videos" >ویدیو ها</NavLink>
                    
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