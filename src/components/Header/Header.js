import React from 'react';
import styles from './Header.module.css';
import logo from '../../logo.svg';
import Search from '../Search/Search';

const Header = props => (
    <div className={`${styles.header} ${styles.headerContainer}`}>
        <div className={styles.headerContainer}>
            <img src={logo} alt="logo" />
            <div className={styles.headerSubContainers}>
                <h2 className={styles.headH2}>Github repo explorer</h2>
                <h4 className={styles.headH4}>learning project created by <span className={styles.underline}>John Doe</span></h4>
            </div>
        </div>
        <div className={`${styles.headerContainer} ${styles.HeadUI}`}>
            <Search route={props.route} />
        </div>
    </div>);



export default Header;
