import React from 'react';
import styles from './Header.module.css';
import logo from '../logo.svg';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const header = props =>
    (<header>
        <div className={`${styles.Header} ${styles.HeaderContainer}`}>
            <div className={styles.HeaderContainer}>
                <img src={logo} alt="logo" />
                <div className={styles.HeaderSubContainers}>
                    <h2 className={styles.HeadH2}>Github repo explorer</h2>
                    <h4 className={styles.HeadH4}>learning project created by <span className={styles.Underline}>John Doe</span></h4>
                </div>
            </div>
            <div className={`${styles.HeaderContainer} ${styles.HeadUI}`}>
                <Input />
                <Button>Search</Button>
            </div>
        </div>
    </header>);


export default header;
