import React from 'react';
import styles from './Search.module.css';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends React.Component {
    state = {
        searchedItem: this.props.route.match.params.query || ""
    }

    handleSearchSubmit = () => {
        this.props.route.history.push(`/repos/${this.state.searchedItem}`);
    }

    handleSearch = event => this.setState({searchedItem: event.target.value});

    render() {
        return (
            <>
                <div className={styles.inputContainer}>
                    <FontAwesomeIcon icon="search" className={styles.searchIcon} />
                    <input className={`${styles.input}`} placeholder="Search for a github repo" onChange={this.handleSearch} />
                </div>
                <Button onClick={this.handleSearchSubmit}>Search</Button>
            </>
        )
    }
}

export default Search;