import React from 'react';
//import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css";
import logo from "../images/logo.png"



const Navbar = () => {
    return (
        <header className ={styles.header}>
            
            <div className ={styles.listContainer}>
                <ul className={styles.list}>
                    <li ><img className={styles.logo} src={logo} alt="Logo" /></li>
                    <li><a >صحبت با متخصصان</a></li>
                    <li><a>گوش کنیم</a></li>
                    <li><a>آرام شویم</a></li>
                    
                </ul>
            </div>
            <div className ={styles.profileContainer}>
                <ul className={styles.profileItems}>
                    <li><a>ثبت نام</a></li>
                    <li><a>ورود</a></li>
                </ul>
            </div>
            
        </header>
    );
};

export default Navbar;