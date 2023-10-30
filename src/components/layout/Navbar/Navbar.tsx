import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink></li>
                <li className={styles.li}><NavLink activeClassName={styles.active} to="/dialogs">Messages</NavLink></li>
                <li className={styles.li}><NavLink activeClassName={styles.active} to="/news">News</NavLink></li>
                <li className={styles.li}><NavLink activeClassName={styles.active} to="/music">Music</NavLink></li>
                <li className={styles.li}><NavLink activeClassName={styles.active} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

