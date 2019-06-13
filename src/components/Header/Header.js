import React from 'react';
import styles from './Header.module.css';
import logo from '../../logo.svg';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    handleSearchSubmit = () => {
        const query = this.refs.search.value.trim();
        query !== '' && this.props.route.history.push(`/${query}`);
    }
    
    render() {
        return (
            <div className={`${styles.header} ${styles.headerContainer}`}>
                <div className={styles.headerContainer}>
                    <img src={logo} alt="logo" />
                    <div className={styles.headerSubContainers}>
                        <h2 className={styles.headH2}>Github repo explorer</h2>
                        <h4 className={styles.headH4}>learning project created by <span className={styles.underline}>John Doe</span></h4>
                    </div>
                </div>
                <div className={`${styles.headerContainer} ${styles.HeadUI}`}>
                    <div className={styles.inputContainer}>
                        <FontAwesomeIcon icon="search" className={styles.searchIcon} />
                        <input className={`${styles.input}`} placeholder="Search for a github repo" ref="search" />
                    </div>
                    <Button onClick={this.handleSearchSubmit}>Search</Button>
                </div>
            </div>);
    }
}

export default Header;
