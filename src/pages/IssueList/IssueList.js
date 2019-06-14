import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class IssueList extends React.Component {
    state = {
        issueItems: [],
        issuesCount: 0,
        issuesPerPage: 30
    }

    componentDidUpdate() {
        const firstname = this.props.match.params.firstname;
        const lastname = this.props.match.params.lastname;
        const page = this.props.match.params.page;

        if (this.state.page !== page) {
            fetch(`https://api.github.com/repos/${firstname}/${lastname}/issues?page=${page}`)
                .then(res => res.json())
                .then(data => this.setState({ issueItems: data, page }));
        }
    }

    componentDidMount() {
        const firstname = this.props.match.params.firstname;
        const lastname = this.props.match.params.lastname;
        const page = this.props.match.params.page;

        fetch(`https://api.github.com/repos/${firstname}/${lastname}`)
            .then(res => res.json())
            .then(data => this.setState({ issuesCount: data.open_issues }));

        fetch(`https://api.github.com/repos/${firstname}/${lastname}/issues?page=${page}`)
            .then(res => res.json())
            .then(data => this.setState({ issueItems: data }));
    }

    handleBack = () => this.props.history.goBack();

    handleClick = (e) => console.log(e.target);

    render() {
        const firstname = this.props.match.params.firstname;
        const lastname = this.props.match.params.lastname;

        const { issuesPerPage, issuesCount } = this.state;

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

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(issuesCount / issuesPerPage); i++) {
            pageNumbers.push(i);
        }

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
                        {pageNumbers.map(number => <Link to={`/issues/${firstname}/${lastname}/${number}`} className={styles.page}>{number}</Link>)}
                    </div>
                    <FontAwesomeIcon icon="chevron-right" className={styles.arrow} />
                </div>
            </div>
        );
    }
}

export default IssueList;
