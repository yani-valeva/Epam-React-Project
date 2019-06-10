import React, { Component } from 'react';
import styles from './RepoList.module.css';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RepoList extends Component {

    state = {
        repoItems: []
    };

    componentDidMount() {
        const { route } = this.props;
        const query = route.match.params.query;
    }

    render() {

        const data = {
            "total_count": 54994,
            "incomplete_results": false,
            "items": [
              {
                "id": 10425992,
                "node_id": "MDEwOlJlcG9zaXRvcnkxMDQyNTk5Mg==",
                "name": "css-element-queries",
                "full_name": "marcj/css-element-queries",
                "private": false,
                "owner": {
                  "login": "marcj",
                  "id": 450980,
                  "node_id": "MDQ6VXNlcjQ1MDk4MA==",
                  "avatar_url": "https://avatars0.githubusercontent.com/u/450980?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/marcj",
                  "html_url": "https://github.com/marcj",
                  "followers_url": "https://api.github.com/users/marcj/followers",
                  "following_url": "https://api.github.com/users/marcj/following{/other_user}",
                  "gists_url": "https://api.github.com/users/marcj/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/marcj/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/marcj/subscriptions",
                  "organizations_url": "https://api.github.com/users/marcj/orgs",
                  "repos_url": "https://api.github.com/users/marcj/repos",
                  "events_url": "https://api.github.com/users/marcj/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/marcj/received_events",
                  "type": "User",
                  "site_admin": false
                },
                "html_url": "https://github.com/marcj/css-element-queries",
                "description": "CSS Element-Queries aka Container Queries. High-speed element dimension/media queries in valid css.",
                "fork": false,
                "url": "https://api.github.com/repos/marcj/css-element-queries",
                "forks_url": "https://api.github.com/repos/marcj/css-element-queries/forks",
                "keys_url": "https://api.github.com/repos/marcj/css-element-queries/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/marcj/css-element-queries/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/marcj/css-element-queries/teams",
                "hooks_url": "https://api.github.com/repos/marcj/css-element-queries/hooks",
                "issue_events_url": "https://api.github.com/repos/marcj/css-element-queries/issues/events{/number}",
                "events_url": "https://api.github.com/repos/marcj/css-element-queries/events",
                "assignees_url": "https://api.github.com/repos/marcj/css-element-queries/assignees{/user}",
                "branches_url": "https://api.github.com/repos/marcj/css-element-queries/branches{/branch}",
                "tags_url": "https://api.github.com/repos/marcj/css-element-queries/tags",
                "blobs_url": "https://api.github.com/repos/marcj/css-element-queries/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/marcj/css-element-queries/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/marcj/css-element-queries/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/marcj/css-element-queries/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/marcj/css-element-queries/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/marcj/css-element-queries/languages",
                "stargazers_url": "https://api.github.com/repos/marcj/css-element-queries/stargazers",
                "contributors_url": "https://api.github.com/repos/marcj/css-element-queries/contributors",
                "subscribers_url": "https://api.github.com/repos/marcj/css-element-queries/subscribers",
                "subscription_url": "https://api.github.com/repos/marcj/css-element-queries/subscription",
                "commits_url": "https://api.github.com/repos/marcj/css-element-queries/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/marcj/css-element-queries/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/marcj/css-element-queries/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/marcj/css-element-queries/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/marcj/css-element-queries/contents/{+path}",
                "compare_url": "https://api.github.com/repos/marcj/css-element-queries/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/marcj/css-element-queries/merges",
                "archive_url": "https://api.github.com/repos/marcj/css-element-queries/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/marcj/css-element-queries/downloads",
                "issues_url": "https://api.github.com/repos/marcj/css-element-queries/issues{/number}",
                "pulls_url": "https://api.github.com/repos/marcj/css-element-queries/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/marcj/css-element-queries/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/marcj/css-element-queries/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/marcj/css-element-queries/labels{/name}",
                "releases_url": "https://api.github.com/repos/marcj/css-element-queries/releases{/id}",
                "deployments_url": "https://api.github.com/repos/marcj/css-element-queries/deployments",
                "created_at": "2013-06-01T17:48:50Z",
                "updated_at": "2019-06-10T17:57:03Z",
                "pushed_at": "2019-06-03T11:35:18Z",
                "git_url": "git://github.com/marcj/css-element-queries.git",
                "ssh_url": "git@github.com:marcj/css-element-queries.git",
                "clone_url": "https://github.com/marcj/css-element-queries.git",
                "svn_url": "https://github.com/marcj/css-element-queries",
                "homepage": "http://marcj.github.io/css-element-queries/",
                "size": 3063,
                "stargazers_count": 3450,
                "watchers_count": 3450,
                "language": "JavaScript",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": false,
                "has_pages": true,
                "forks_count": 414,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 43,
                "license": {
                  "key": "mit",
                  "name": "MIT License",
                  "spdx_id": "MIT",
                  "url": "https://api.github.com/licenses/mit",
                  "node_id": "MDc6TGljZW5zZTEz"
                },
                "forks": 414,
                "open_issues": 43,
                "watchers": 3450,
                "default_branch": "master",
                "score": 91.190315
              },
              {
                "id": 23282991,
                "node_id": "MDEwOlJlcG9zaXRvcnkyMzI4Mjk5MQ==",
                "name": "elasticsearch-sql",
                "full_name": "NLPchina/elasticsearch-sql",
                "private": false,
                "owner": {
                  "login": "NLPchina",
                  "id": 7099924,
                  "node_id": "MDEyOk9yZ2FuaXphdGlvbjcwOTk5MjQ=",
                  "avatar_url": "https://avatars0.githubusercontent.com/u/7099924?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/NLPchina",
                  "html_url": "https://github.com/NLPchina",
                  "followers_url": "https://api.github.com/users/NLPchina/followers",
                  "following_url": "https://api.github.com/users/NLPchina/following{/other_user}",
                  "gists_url": "https://api.github.com/users/NLPchina/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/NLPchina/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/NLPchina/subscriptions",
                  "organizations_url": "https://api.github.com/users/NLPchina/orgs",
                  "repos_url": "https://api.github.com/users/NLPchina/repos",
                  "events_url": "https://api.github.com/users/NLPchina/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/NLPchina/received_events",
                  "type": "Organization",
                  "site_admin": false
                },
                "html_url": "https://github.com/NLPchina/elasticsearch-sql",
                "description": "Use SQL to query Elasticsearch",
                "fork": false,
                "url": "https://api.github.com/repos/NLPchina/elasticsearch-sql",
                "forks_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/forks",
                "keys_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/teams",
                "hooks_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/hooks",
                "issue_events_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/issues/events{/number}",
                "events_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/events",
                "assignees_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/assignees{/user}",
                "branches_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/branches{/branch}",
                "tags_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/tags",
                "blobs_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/languages",
                "stargazers_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/stargazers",
                "contributors_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/contributors",
                "subscribers_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/subscribers",
                "subscription_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/subscription",
                "commits_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/contents/{+path}",
                "compare_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/merges",
                "archive_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/downloads",
                "issues_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/issues{/number}",
                "pulls_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/labels{/name}",
                "releases_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/releases{/id}",
                "deployments_url": "https://api.github.com/repos/NLPchina/elasticsearch-sql/deployments",
                "created_at": "2014-08-24T14:26:31Z",
                "updated_at": "2019-06-10T09:44:30Z",
                "pushed_at": "2019-06-09T14:04:33Z",
                "git_url": "git://github.com/NLPchina/elasticsearch-sql.git",
                "ssh_url": "git@github.com:NLPchina/elasticsearch-sql.git",
                "clone_url": "https://github.com/NLPchina/elasticsearch-sql.git",
                "svn_url": "https://github.com/NLPchina/elasticsearch-sql",
                "homepage": "",
                "size": 5873,
                "stargazers_count": 5090,
                "watchers_count": 5090,
                "language": "Java",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 1168,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 194,
                "license": {
                  "key": "apache-2.0",
                  "name": "Apache License 2.0",
                  "spdx_id": "Apache-2.0",
                  "url": "https://api.github.com/licenses/apache-2.0",
                  "node_id": "MDc6TGljZW5zZTI="
                },
                "forks": 1168,
                "open_issues": 194,
                "watchers": 5090,
                "default_branch": "master",
                "score": 90.7011
              },
              {
                "id": 2158982,
                "node_id": "MDEwOlJlcG9zaXRvcnkyMTU4OTgy",
                "name": "querydsl",
                "full_name": "querydsl/querydsl",
                "private": false,
                "owner": {
                  "login": "querydsl",
                  "id": 7044479,
                  "node_id": "MDEyOk9yZ2FuaXphdGlvbjcwNDQ0Nzk=",
                  "avatar_url": "https://avatars0.githubusercontent.com/u/7044479?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/querydsl",
                  "html_url": "https://github.com/querydsl",
                  "followers_url": "https://api.github.com/users/querydsl/followers",
                  "following_url": "https://api.github.com/users/querydsl/following{/other_user}",
                  "gists_url": "https://api.github.com/users/querydsl/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/querydsl/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/querydsl/subscriptions",
                  "organizations_url": "https://api.github.com/users/querydsl/orgs",
                  "repos_url": "https://api.github.com/users/querydsl/repos",
                  "events_url": "https://api.github.com/users/querydsl/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/querydsl/received_events",
                  "type": "Organization",
                  "site_admin": false
                },
                "html_url": "https://github.com/querydsl/querydsl",
                "description": "Unified Queries for Java",
                "fork": false,
                "url": "https://api.github.com/repos/querydsl/querydsl",
                "forks_url": "https://api.github.com/repos/querydsl/querydsl/forks",
                "keys_url": "https://api.github.com/repos/querydsl/querydsl/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/querydsl/querydsl/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/querydsl/querydsl/teams",
                "hooks_url": "https://api.github.com/repos/querydsl/querydsl/hooks",
                "issue_events_url": "https://api.github.com/repos/querydsl/querydsl/issues/events{/number}",
                "events_url": "https://api.github.com/repos/querydsl/querydsl/events",
                "assignees_url": "https://api.github.com/repos/querydsl/querydsl/assignees{/user}",
                "branches_url": "https://api.github.com/repos/querydsl/querydsl/branches{/branch}",
                "tags_url": "https://api.github.com/repos/querydsl/querydsl/tags",
                "blobs_url": "https://api.github.com/repos/querydsl/querydsl/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/querydsl/querydsl/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/querydsl/querydsl/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/querydsl/querydsl/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/querydsl/querydsl/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/querydsl/querydsl/languages",
                "stargazers_url": "https://api.github.com/repos/querydsl/querydsl/stargazers",
                "contributors_url": "https://api.github.com/repos/querydsl/querydsl/contributors",
                "subscribers_url": "https://api.github.com/repos/querydsl/querydsl/subscribers",
                "subscription_url": "https://api.github.com/repos/querydsl/querydsl/subscription",
                "commits_url": "https://api.github.com/repos/querydsl/querydsl/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/querydsl/querydsl/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/querydsl/querydsl/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/querydsl/querydsl/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/querydsl/querydsl/contents/{+path}",
                "compare_url": "https://api.github.com/repos/querydsl/querydsl/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/querydsl/querydsl/merges",
                "archive_url": "https://api.github.com/repos/querydsl/querydsl/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/querydsl/querydsl/downloads",
                "issues_url": "https://api.github.com/repos/querydsl/querydsl/issues{/number}",
                "pulls_url": "https://api.github.com/repos/querydsl/querydsl/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/querydsl/querydsl/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/querydsl/querydsl/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/querydsl/querydsl/labels{/name}",
                "releases_url": "https://api.github.com/repos/querydsl/querydsl/releases{/id}",
                "deployments_url": "https://api.github.com/repos/querydsl/querydsl/deployments",
                "created_at": "2011-08-05T06:46:32Z",
                "updated_at": "2019-06-10T16:18:12Z",
                "pushed_at": "2019-06-07T13:11:37Z",
                "git_url": "git://github.com/querydsl/querydsl.git",
                "ssh_url": "git@github.com:querydsl/querydsl.git",
                "clone_url": "https://github.com/querydsl/querydsl.git",
                "svn_url": "https://github.com/querydsl/querydsl",
                "homepage": "http://www.querydsl.com",
                "size": 49213,
                "stargazers_count": 2302,
                "watchers_count": 2302,
                "language": "Java",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 543,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 465,
                "license": {
                  "key": "apache-2.0",
                  "name": "Apache License 2.0",
                  "spdx_id": "Apache-2.0",
                  "url": "https://api.github.com/licenses/apache-2.0",
                  "node_id": "MDc6TGljZW5zZTI="
                },
                "forks": 543,
                "open_issues": 465,
                "watchers": 2302,
                "default_branch": "master",
                "score": 86.86462
              }
            ]
          }

        data.items.map(e =>
            (
                <>
                    <div className={styles.Wrapper}>
                        <div className={styles.Container}>
                            <div className={styles.InnerContainer}>
                                <div><strong>{data.items[0].full_name}</strong></div>
                                <div>{data.items[0].name}</div>
                                <FontAwesomeIcon icon="chevron-right" className={styles.Arrow} />
                                <br />
                                <div>{data.items[0].description}</div>
                                {/* <Link to="/">{data.items[0].url}</Link> */}
                            </div>
                        </div>
                    </div>
                </>
            )
        )

        return data.items.map((e, i) =>
            (
                <div className={styles.Wrapper} key={e.id}>
                    <div className={`${styles.Container} ${i % 2 !== 0 && styles.Even}`}>
                        <div className={styles.InnerContainer}>
                            <div><strong>{e.full_name}</strong></div>
                            <div>{e.name}</div>
                            <FontAwesomeIcon icon="chevron-right" className={styles.Arrow} />
                            <br />
                            <div>{e.description}</div>
                            {/* <Link to="/">{e.url}</Link> */}
                        </div>
                    </div>
                </div>
            )
        )
    }
}


export default RepoList;
