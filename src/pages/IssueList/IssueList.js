import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class IssueList extends React.Component {
    firstname = this.props.match.params.firstname;
    lastname = this.props.match.params.lastname;
    page = this.props.match.params.page || 1;
    searchQuery = this.props.location.search.split('=')[1] || '';

    state = {
        issueItems: [],
        issuesCount: 0,
        issuesPerPage: 30
    }

    loadIssues = () => {
        fetch(`https://api.github.com/repos/${this.firstname}/${this.lastname}/issues?page=${this.page}`)
            .then(res => res.json())
            .then(data => this.setState({ issueItems: data, page: this.page }));
    };

    componentDidUpdate() {
        this.page = this.props.match.params.page || 1;

        if (this.state.page !== this.page) {
            this.loadIssues();
        }
    }

    componentDidMount() {
        console.log(this.props.location.search);
        fetch(`https://api.github.com/repos/${this.firstname}/${this.lastname}`)
            .then(res => res.json())
            .then(data => this.setState({ issuesCount: data.open_issues }));

        this.loadIssues();
    }

    handleBack = () => this.props.history.goBack();

    render() {
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
            marginLeft: '5px',
        }

        const nextPage = +this.page + 1 < pageNumbers.length ? +this.page + 1 : pageNumbers.length;

        return (
            <div className={styles.wrapper} >
                <div className={styles.listContainer}>
                    <div className={styles.goBack}>
                        <Link to={`/repos/${this.searchQuery}`} className={styles.goBackContainer} ><FontAwesomeIcon icon="chevron-left" className={styles.arrow} />
                            <div style={style}>GO BACK</div></Link>
                    </div>
                    {issuesData}
                </div>
                <div className={styles.pagingContainer}>
                    <Link to={`/issues/${this.firstname}/${this.lastname}/${(this.page - 1) || 1}`}><FontAwesomeIcon icon="chevron-left" className={styles.arrow} /></Link>
                    <div className={styles.numberContainer}>
                        {pageNumbers.map(number => <Link key={`page-number-${number}`} to={`/issues/${this.firstname}/${this.lastname}/${number}`} className={`${styles.page} ${+this.page === number && styles.active}`}>{number}</Link>)}
                    </div>
                    <Link to={`/issues/${this.firstname}/${this.lastname}/${nextPage}`}><FontAwesomeIcon icon="chevron-right" className={styles.arrow} /></Link>
                </div>
            </div>
        );
    }
}

export default IssueList;
