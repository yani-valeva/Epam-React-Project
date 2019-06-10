import React from 'react';
import styles from './RepoItem.module.css';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const repoItem = props =>
    (
        <>
            <div className={styles.Wrapper}>
                <div className={styles.Container}>
                    <div className={styles.InnerContainer}>
                        <div>title/fullname</div>
                        <div>title name</div>
                        <FontAwesomeIcon icon="chevron-right" className={styles.Arrow} />
                        <br />
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repudiandae id sunt.</div>
                        {/* <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quo quisquam!</Link> */}
                    </div>
                </div>
                <div className={`${styles.Container} ${styles.Even}`}>
                    <div className={styles.InnerContainer}>
                        <div>title/fullname</div>
                        <div>title name</div>
                        <FontAwesomeIcon icon="chevron-right" className={styles.Arrow} />
                        <br />
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repudiandae id sunt.</div>
                        {/* <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quo quisquam!</Link> */}
                    </div>
                </div>
                <div className={styles.Container}>
                    <div className={styles.InnerContainer}>
                        <div>title/fullname</div>
                        <div>title name</div>
                        <FontAwesomeIcon icon="chevron-right" className={styles.Arrow} />
                        <br />
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repudiandae id sunt.</div>
                        {/* <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit quo quisquam!</Link> */}
                    </div>
                </div>
            </div>
        </>
    );

export default repoItem;
