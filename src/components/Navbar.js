import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css";
import logo from "../images/logo.png"



const Navbar = () => {
    return (
        <header className ={styles.header}>
            
            <div className ={styles.listContainer}>
                <ul className={styles.list}>
                    <li ><img className={styles.logo} src={logo} alt="Logo" /></li>
                    <li><Link to="/" >متخصصان</Link></li>
                    <li><Link to="/">پادکست </Link></li>
                    <li><Link to="/">مدیتیشن</Link></li>
                    <li><Link to="/">رویدادها</Link></li>
                    <li><Link to="/">درباره ی ما</Link></li>

                    
                </ul>
            </div>
            <div className ={styles.profileContainer}>
                <ul className={styles.profileItems}>
                    <li><Link to="/signup">ثبت نام</Link></li>
                    <li><Link to="/login">ورود</Link></li>
                </ul>
            </div>
            
        </header>
    );
};

export default Navbar;