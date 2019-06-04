import React from 'react';
import styles from './Input.module.css';

const input = props => <input className={`${styles.Input}`} placeholder='Search for a github repo' {...props} />;

export default input;