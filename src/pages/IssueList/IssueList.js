import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class IssueList extends React.Component {
    state = {
        issueItems: []
    }

    componentDidMount() {
        const firstname = this.props.match.params.firstname;
        const lastname = this.props.match.params.lastname;
        const page = this.props.match.params.page;

        fetch(`https://api.github.com/repos/${firstname}/${lastname}/issues?page=${page}`)
            .then(res => res.json())
            .then(data => this.setState({ issueItems: data }));
    }

    handleBack = () => {
        this.props.history.goBack()
    }

    render() {

        let labelsData = ({ labels }) => labels.map(label => {
            let divStyle = {
                color: '#' + label.color,
                borderColor: '#' + label.color
            };

            return <div className={styles.labels} style={divStyle} key={label.id}>{label.name}</div>
        });

        const issuesData = this.state.issueItems.map(e => (
            <div className={styles.issueContainer} key={e.id}>
                <div className={styles.reporterContainer}>
                    <img className={styles.avatarImg} src={e.user.avatar_url}
                        alt="profile" />
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            {e.title}
                        </div>
                        <div className={styles.issueUser}>
                            <span>#{e.number}:</span> opened by
                                <strong> {e.user.login}</strong>
                        </div>
                    </div>
                </div>
                <div className={styles.body}>{e.body}</div>
                <div className={styles.labelContainer}>{labelsData(e)}</div>
            </div>
        ));

        const style = {
            cursor: 'pointer',
            marginLeft: '5px'
        }

        return (
            <div className={styles.wrapper} >
                <div className={styles.listContainer}>
                    <div className={styles.goBack}>
                        <FontAwesomeIcon icon="chevron-left" className={styles.arrow} onClick={this.handleBack} />
                        <div style={style} onClick={this.handleBack}>GO BACK</div>
                    </div>
                    {issuesData}
                </div>
                <div className={styles.pagingContainer}>
                    <FontAwesomeIcon icon="chevron-left" className={styles.arrow} />
                    <div className={styles.numberContainer}>
                        <Link to={`https://api.github.com/repos/mojombo/god/issues/1`} className={styles.page}>1</Link>
                        <Link to={`https://api.github.com/repos/mojombo/god/issues/2`} className={`${styles.page} ${styles.active}`}>2</Link>
                        <Link to={`https://api.github.com/repos/mojombo/god/issues/3`} className={styles.page}>3</Link>
                        <Link to={`https://api.github.com/repos/mojombo/god/issues/4`} className={styles.page}>4</Link>
                    </div>
                    <FontAwesomeIcon icon="chevron-right" className={styles.arrow} />
                </div>
            </div>
        );
    }
}

export default IssueList;
