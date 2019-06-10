import React, {Component} from 'react';
import styles from './Header.module.css';
import logo from '../../logo.svg';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    handleSearchSubmit = () => {
        const query = this.refs.search.value.trim();
        query !== '' && this.props.route.history.push(`/${query}`);
    }
    
    render() {
        return (<header>
            <div className={`${styles.Header} ${styles.HeaderContainer}`}>
                <div className={styles.HeaderContainer}>
                    <img src={logo} alt="logo" />
                    <div className={styles.HeaderSubContainers}>
                        <h2 className={styles.HeadH2}>Github repo explorer</h2>
                        <h4 className={styles.HeadH4}>learning project created by <span className={styles.Underline}>John Doe</span></h4>
                    </div>
                </div>
                <div className={`${styles.HeaderContainer} ${styles.HeadUI}`}>
                    <div className={styles.InputContainer}>
                        <FontAwesomeIcon icon="search" className={styles.SearchIcon} />
                        <input className={`${styles.Input}`} placeholder="Search for a github repo" ref="search" />
                    </div>
                    <Button onClick={this.handleSearchSubmit}>Search</Button>
                </div>
            </div>
        </header>);
    }
}

export default Header;
