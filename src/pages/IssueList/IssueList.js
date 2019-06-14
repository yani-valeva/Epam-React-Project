import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className={styles.container} key={e.id}>
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
            cursor: 'pointer'
        }

        return (
            <div className={styles.wrapper} >
                <div className={styles.goBack}>
                    <FontAwesomeIcon icon="chevron-left" className={styles.arrowLeft} onClick={this.handleBack} />
                    <div style={style} onClick={this.handleBack}>GO BACK</div>
                </div>
                {issuesData}
            </div>
        );
    }
}

export default IssueList;
