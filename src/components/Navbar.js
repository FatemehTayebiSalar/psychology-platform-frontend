import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css";
import logo from "../images/logo.png"



const Navbar = () => {
    return (
        <header className ={styles.header}>
            
            <div className ={styles.listContainer}>
                <ul className={styles.list}>
                    <li ><Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link></li>
                    <li><Link to="/">صحبت با متخصصان</Link></li>
                    <li><Link to="/">گوش کنیم</Link></li>
                    <li><Link to="/">آرام شویم</Link></li>
                    
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