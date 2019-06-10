import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const issueList = props =>
    (
        <>
            <div className={styles.Wrapper}>
                <div className={styles.GoBack}>
                    <FontAwesomeIcon icon="chevron-left" className={styles.ArrowLeft} />
                    <div>GO BACK</div>
                </div>

                <div className={styles.Container}>
                    <div className={styles.ReporterContainer}>
                        <img className={styles.AvatarImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp-PuCnhjtoiAueYMVI9Pw0yz-819jQTavGj8hhlkZrzwkMYG"
                            alt="profile" />
                        <div className={styles.TitleContainer}>
                            <div className={styles.Title}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                            </div>
                            <div className={styles.IssueUser}>
                                <span>issue number</span> opened by
                                <strong>John Doe</strong>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Body}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit illo repellat, nisi debitis eum, commodi aut tempora
                        quaerat excepturi nulla. Laborum porro expedita eos accusamus sapiente dolor nesciunt! Consequatur. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Iure, repellat laborum! Fugit debitis nulla porro laborum
                        consequuntur doloribus quo nostrum error. Voluptate exercitationem, expedita iste veniam minima aliquid incidunt
                        quod.
                    </div>
                </div>
            </div>
        </>
    );  

export default issueList;
