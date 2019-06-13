import React from 'react';
import styles from './RepoList.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RepoList extends React.Component {
  state = {
    repoItems: []
  };

  componentDidMount() {
    const query = this.props.route.match.params.query ? this.props.route.match.params.query.trim() : "";
    this.search(query);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update')
    const prevQuery = prevProps.route.match.params.query ? prevProps.route.match.params.query.trim() : undefined;
    const query = this.props.route.match.params.query ? this.props.route.match.params.query.trim() : undefined;

    console.log(prevQuery, query);

    if (query && prevQuery !== query) {
      this.search(query);
    }
  }

  search = query => fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(res => res.json())
    .then(data => this.setState({ repoItems: data.items }));

  render() {
    const data = this.state.repoItems.map((e, i) =>
      (
        <div className={`${styles.container} ${i % 2 !== 0 && styles.even}`} key={e.id}>
          <div className={styles.innerContainer}>
            <div><strong>{e.full_name}</strong></div>
            <div>{e.name}</div>
            <FontAwesomeIcon icon="chevron-right" className={styles.arrow} />
            <br />
            <div>{e.description}</div>
            <Link to="/">{e.url}</Link>
          </div>
        </div>
      )
    );
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchedResult}>{this.state.repoItems.length} Results found for <strong>"Search query"</strong></div>
        {data}
      </div>
    )
  }
}

export default RepoList;
