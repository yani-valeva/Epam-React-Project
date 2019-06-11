import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IssueList extends React.Component {
    render() {

        const issues = [
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/259",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/259/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/259/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/259/events",
                "html_url": "https://github.com/mojombo/grit/issues/259",
                "id": 425619547,
                "node_id": "MDU6SXNzdWU0MjU2MTk1NDc=",
                "number": 259,
                "title": "Hehe",
                "user": {
                    "login": "jjlehtinen",
                    "id": 31004317,
                    "node_id": "MDQ6VXNlcjMxMDA0MzE3",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/31004317?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/jjlehtinen",
                    "html_url": "https://github.com/jjlehtinen",
                    "followers_url": "https://api.github.com/users/jjlehtinen/followers",
                    "following_url": "https://api.github.com/users/jjlehtinen/following{/other_user}",
                    "gists_url": "https://api.github.com/users/jjlehtinen/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/jjlehtinen/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/jjlehtinen/subscriptions",
                    "organizations_url": "https://api.github.com/users/jjlehtinen/orgs",
                    "repos_url": "https://api.github.com/users/jjlehtinen/repos",
                    "events_url": "https://api.github.com/users/jjlehtinen/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/jjlehtinen/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2019-03-26T19:56:11Z",
                "updated_at": "2019-03-26T19:56:11Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": null
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/258",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/258/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/258/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/258/events",
                "html_url": "https://github.com/mojombo/grit/issues/258",
                "id": 388500645,
                "node_id": "MDU6SXNzdWUzODg1MDA2NDU=",
                "number": 258,
                "title": "Updated Docs",
                "user": {
                    "login": "bala1203006",
                    "id": 21353592,
                    "node_id": "MDQ6VXNlcjIxMzUzNTky",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/21353592?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bala1203006",
                    "html_url": "https://github.com/bala1203006",
                    "followers_url": "https://api.github.com/users/bala1203006/followers",
                    "following_url": "https://api.github.com/users/bala1203006/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bala1203006/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bala1203006/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bala1203006/subscriptions",
                    "organizations_url": "https://api.github.com/users/bala1203006/orgs",
                    "repos_url": "https://api.github.com/users/bala1203006/repos",
                    "events_url": "https://api.github.com/users/bala1203006/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bala1203006/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2018-12-07T04:23:41Z",
                "updated_at": "2018-12-07T04:23:41Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "Added some extra links"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/256",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/256/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/256/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/256/events",
                "html_url": "https://github.com/mojombo/grit/issues/256",
                "id": 371798309,
                "node_id": "MDU6SXNzdWUzNzE3OTgzMDk=",
                "number": 256,
                "title": "test",
                "user": {
                    "login": "builder12",
                    "id": 36386637,
                    "node_id": "MDQ6VXNlcjM2Mzg2NjM3",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/36386637?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/builder12",
                    "html_url": "https://github.com/builder12",
                    "followers_url": "https://api.github.com/users/builder12/followers",
                    "following_url": "https://api.github.com/users/builder12/following{/other_user}",
                    "gists_url": "https://api.github.com/users/builder12/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/builder12/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/builder12/subscriptions",
                    "organizations_url": "https://api.github.com/users/builder12/orgs",
                    "repos_url": "https://api.github.com/users/builder12/repos",
                    "events_url": "https://api.github.com/users/builder12/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/builder12/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2018-10-19T03:59:36Z",
                "updated_at": "2018-10-19T03:59:36Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "test"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/222",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/222/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/222/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/222/events",
                "html_url": "https://github.com/mojombo/grit/issues/222",
                "id": 356251581,
                "node_id": "MDU6SXNzdWUzNTYyNTE1ODE=",
                "number": 222,
                "title": "boyh",
                "user": {
                    "login": "davidko158",
                    "id": 42899684,
                    "node_id": "MDQ6VXNlcjQyODk5Njg0",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/42899684?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/davidko158",
                    "html_url": "https://github.com/davidko158",
                    "followers_url": "https://api.github.com/users/davidko158/followers",
                    "following_url": "https://api.github.com/users/davidko158/following{/other_user}",
                    "gists_url": "https://api.github.com/users/davidko158/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/davidko158/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/davidko158/subscriptions",
                    "organizations_url": "https://api.github.com/users/davidko158/orgs",
                    "repos_url": "https://api.github.com/users/davidko158/repos",
                    "events_url": "https://api.github.com/users/davidko158/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/davidko158/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2018-09-02T04:15:58Z",
                "updated_at": "2018-09-02T04:15:58Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": null
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/221",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/221/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/221/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/221/events",
                "html_url": "https://github.com/mojombo/grit/issues/221",
                "id": 336685171,
                "node_id": "MDU6SXNzdWUzMzY2ODUxNzE=",
                "number": 221,
                "title": "stan issue test",
                "user": {
                    "login": "StanleyOned",
                    "id": 6315252,
                    "node_id": "MDQ6VXNlcjYzMTUyNTI=",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/6315252?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/StanleyOned",
                    "html_url": "https://github.com/StanleyOned",
                    "followers_url": "https://api.github.com/users/StanleyOned/followers",
                    "following_url": "https://api.github.com/users/StanleyOned/following{/other_user}",
                    "gists_url": "https://api.github.com/users/StanleyOned/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/StanleyOned/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/StanleyOned/subscriptions",
                    "organizations_url": "https://api.github.com/users/StanleyOned/orgs",
                    "repos_url": "https://api.github.com/users/StanleyOned/repos",
                    "events_url": "https://api.github.com/users/StanleyOned/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/StanleyOned/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2018-06-28T16:05:49Z",
                "updated_at": "2018-06-28T16:05:49Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": null
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/218",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/218/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/218/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/218/events",
                "html_url": "https://github.com/mojombo/grit/issues/218",
                "id": 246423249,
                "node_id": "MDU6SXNzdWUyNDY0MjMyNDk=",
                "number": 218,
                "title": "asdf",
                "user": {
                    "login": "jeremytestapp[bot]",
                    "id": 29053318,
                    "node_id": "MDM6Qm90MjkwNTMzMTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/in/2652?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/jeremytestapp%5Bbot%5D",
                    "html_url": "https://github.com/apps/jeremytestapp",
                    "followers_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/followers",
                    "following_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/following{/other_user}",
                    "gists_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/subscriptions",
                    "organizations_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/orgs",
                    "repos_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/repos",
                    "events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/received_events",
                    "type": "Bot",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-07-28T18:22:06Z",
                "updated_at": "2017-07-28T18:22:06Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "asdf"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/217",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/217/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/217/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/217/events",
                "html_url": "https://github.com/mojombo/grit/issues/217",
                "id": 246422728,
                "node_id": "MDU6SXNzdWUyNDY0MjI3Mjg=",
                "number": 217,
                "title": "asdf",
                "user": {
                    "login": "jeremytestapp[bot]",
                    "id": 29053318,
                    "node_id": "MDM6Qm90MjkwNTMzMTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/in/2652?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/jeremytestapp%5Bbot%5D",
                    "html_url": "https://github.com/apps/jeremytestapp",
                    "followers_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/followers",
                    "following_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/following{/other_user}",
                    "gists_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/subscriptions",
                    "organizations_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/orgs",
                    "repos_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/repos",
                    "events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/received_events",
                    "type": "Bot",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-07-28T18:19:52Z",
                "updated_at": "2017-07-28T18:19:52Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "asdf"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/216",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/216/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/216/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/216/events",
                "html_url": "https://github.com/mojombo/grit/issues/216",
                "id": 246422300,
                "node_id": "MDU6SXNzdWUyNDY0MjIzMDA=",
                "number": 216,
                "title": "Hello",
                "user": {
                    "login": "jeremytestapp[bot]",
                    "id": 29053318,
                    "node_id": "MDM6Qm90MjkwNTMzMTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/in/2652?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/jeremytestapp%5Bbot%5D",
                    "html_url": "https://github.com/apps/jeremytestapp",
                    "followers_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/followers",
                    "following_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/following{/other_user}",
                    "gists_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/subscriptions",
                    "organizations_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/orgs",
                    "repos_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/repos",
                    "events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/received_events",
                    "type": "Bot",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-07-28T18:18:11Z",
                "updated_at": "2017-07-28T18:18:11Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "Hello"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/215",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/215/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/215/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/215/events",
                "html_url": "https://github.com/mojombo/grit/issues/215",
                "id": 246422103,
                "node_id": "MDU6SXNzdWUyNDY0MjIxMDM=",
                "number": 215,
                "title": "Hello GitHub",
                "user": {
                    "login": "jeremytestapp[bot]",
                    "id": 29053318,
                    "node_id": "MDM6Qm90MjkwNTMzMTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/in/2652?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/jeremytestapp%5Bbot%5D",
                    "html_url": "https://github.com/apps/jeremytestapp",
                    "followers_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/followers",
                    "following_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/following{/other_user}",
                    "gists_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/subscriptions",
                    "organizations_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/orgs",
                    "repos_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/repos",
                    "events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/jeremytestapp%5Bbot%5D/received_events",
                    "type": "Bot",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-07-28T18:17:15Z",
                "updated_at": "2017-07-28T18:17:15Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "Hello GitHub"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/210",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/210/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/210/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/210/events",
                "html_url": "https://github.com/mojombo/grit/issues/210",
                "id": 235658373,
                "node_id": "MDU6SXNzdWUyMzU2NTgzNzM=",
                "number": 210,
                "title": "weq",
                "user": {
                    "login": "thiagomgd",
                    "id": 12170252,
                    "node_id": "MDQ6VXNlcjEyMTcwMjUy",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/12170252?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/thiagomgd",
                    "html_url": "https://github.com/thiagomgd",
                    "followers_url": "https://api.github.com/users/thiagomgd/followers",
                    "following_url": "https://api.github.com/users/thiagomgd/following{/other_user}",
                    "gists_url": "https://api.github.com/users/thiagomgd/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/thiagomgd/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/thiagomgd/subscriptions",
                    "organizations_url": "https://api.github.com/users/thiagomgd/orgs",
                    "repos_url": "https://api.github.com/users/thiagomgd/repos",
                    "events_url": "https://api.github.com/users/thiagomgd/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/thiagomgd/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-06-13T19:04:43Z",
                "updated_at": "2017-06-13T19:04:43Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "qwqwe"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/209",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/209/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/209/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/209/events",
                "html_url": "https://github.com/mojombo/grit/issues/209",
                "id": 235658041,
                "node_id": "MDU6SXNzdWUyMzU2NTgwNDE=",
                "number": 209,
                "title": "weq",
                "user": {
                    "login": "thiagomgd",
                    "id": 12170252,
                    "node_id": "MDQ6VXNlcjEyMTcwMjUy",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/12170252?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/thiagomgd",
                    "html_url": "https://github.com/thiagomgd",
                    "followers_url": "https://api.github.com/users/thiagomgd/followers",
                    "following_url": "https://api.github.com/users/thiagomgd/following{/other_user}",
                    "gists_url": "https://api.github.com/users/thiagomgd/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/thiagomgd/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/thiagomgd/subscriptions",
                    "organizations_url": "https://api.github.com/users/thiagomgd/orgs",
                    "repos_url": "https://api.github.com/users/thiagomgd/repos",
                    "events_url": "https://api.github.com/users/thiagomgd/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/thiagomgd/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-06-13T19:03:34Z",
                "updated_at": "2017-06-13T19:03:34Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "qwqwe"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/208",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/208/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/208/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/208/events",
                "html_url": "https://github.com/mojombo/grit/issues/208",
                "id": 235657369,
                "node_id": "MDU6SXNzdWUyMzU2NTczNjk=",
                "number": 208,
                "title": "weq",
                "user": {
                    "login": "thiagomgd",
                    "id": 12170252,
                    "node_id": "MDQ6VXNlcjEyMTcwMjUy",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/12170252?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/thiagomgd",
                    "html_url": "https://github.com/thiagomgd",
                    "followers_url": "https://api.github.com/users/thiagomgd/followers",
                    "following_url": "https://api.github.com/users/thiagomgd/following{/other_user}",
                    "gists_url": "https://api.github.com/users/thiagomgd/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/thiagomgd/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/thiagomgd/subscriptions",
                    "organizations_url": "https://api.github.com/users/thiagomgd/orgs",
                    "repos_url": "https://api.github.com/users/thiagomgd/repos",
                    "events_url": "https://api.github.com/users/thiagomgd/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/thiagomgd/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-06-13T19:01:03Z",
                "updated_at": "2017-06-13T19:01:03Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "qwqwe"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/207",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/207/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/207/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/207/events",
                "html_url": "https://github.com/mojombo/grit/issues/207",
                "id": 235653790,
                "node_id": "MDU6SXNzdWUyMzU2NTM3OTA=",
                "number": 207,
                "title": "weq",
                "user": {
                    "login": "thiagomgd",
                    "id": 12170252,
                    "node_id": "MDQ6VXNlcjEyMTcwMjUy",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/12170252?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/thiagomgd",
                    "html_url": "https://github.com/thiagomgd",
                    "followers_url": "https://api.github.com/users/thiagomgd/followers",
                    "following_url": "https://api.github.com/users/thiagomgd/following{/other_user}",
                    "gists_url": "https://api.github.com/users/thiagomgd/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/thiagomgd/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/thiagomgd/subscriptions",
                    "organizations_url": "https://api.github.com/users/thiagomgd/orgs",
                    "repos_url": "https://api.github.com/users/thiagomgd/repos",
                    "events_url": "https://api.github.com/users/thiagomgd/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/thiagomgd/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2017-06-13T18:48:35Z",
                "updated_at": "2017-06-13T18:48:35Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "qwqwe"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/188",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/188/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/188/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/188/events",
                "html_url": "https://github.com/mojombo/grit/issues/188",
                "id": 38883245,
                "node_id": "MDU6SXNzdWUzODg4MzI0NQ==",
                "number": 188,
                "title": "Link also to gitlabhq/grit",
                "user": {
                    "login": "schmunk42",
                    "id": 649031,
                    "node_id": "MDQ6VXNlcjY0OTAzMQ==",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/649031?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/schmunk42",
                    "html_url": "https://github.com/schmunk42",
                    "followers_url": "https://api.github.com/users/schmunk42/followers",
                    "following_url": "https://api.github.com/users/schmunk42/following{/other_user}",
                    "gists_url": "https://api.github.com/users/schmunk42/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/schmunk42/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/schmunk42/subscriptions",
                    "organizations_url": "https://api.github.com/users/schmunk42/orgs",
                    "repos_url": "https://api.github.com/users/schmunk42/repos",
                    "events_url": "https://api.github.com/users/schmunk42/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/schmunk42/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 2,
                "created_at": "2014-07-28T11:57:49Z",
                "updated_at": "2015-11-02T20:59:07Z",
                "closed_at": null,
                "author_association": "NONE",
                "body": "Looks to me like https://github.com/gitlabhq/grit is actively maintained and eg. still in use for gollum/gollum.\nJust thought it would be helpful for users researching issues with grit - like me.\n"
            },
            {
                "url": "https://api.github.com/repos/mojombo/grit/issues/186",
                "repository_url": "https://api.github.com/repos/mojombo/grit",
                "labels_url": "https://api.github.com/repos/mojombo/grit/issues/186/labels{/name}",
                "comments_url": "https://api.github.com/repos/mojombo/grit/issues/186/comments",
                "events_url": "https://api.github.com/repos/mojombo/grit/issues/186/events",
                "html_url": "https://github.com/mojombo/grit/pull/186",
                "id": 30073750,
                "node_id": "MDExOlB1bGxSZXF1ZXN0MTM5MjI3NzY=",
                "number": 186,
                "title": "grit: fix sort order of newly-created trees with sub-trees",
                "user": {
                    "login": "peff",
                    "id": 45925,
                    "node_id": "MDQ6VXNlcjQ1OTI1",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/45925?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/peff",
                    "html_url": "https://github.com/peff",
                    "followers_url": "https://api.github.com/users/peff/followers",
                    "following_url": "https://api.github.com/users/peff/following{/other_user}",
                    "gists_url": "https://api.github.com/users/peff/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/peff/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/peff/subscriptions",
                    "organizations_url": "https://api.github.com/users/peff/orgs",
                    "repos_url": "https://api.github.com/users/peff/repos",
                    "events_url": "https://api.github.com/users/peff/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/peff/received_events",
                    "type": "User",
                    "site_admin": true
                },
                "labels": [

                ],
                "state": "open",
                "locked": false,
                "assignee": null,
                "assignees": [

                ],
                "milestone": null,
                "comments": 0,
                "created_at": "2014-03-24T20:44:33Z",
                "updated_at": "2017-05-01T20:00:39Z",
                "closed_at": null,
                "author_association": "CONTRIBUTOR",
                "pull_request": {
                    "url": "https://api.github.com/repos/mojombo/grit/pulls/186",
                    "html_url": "https://github.com/mojombo/grit/pull/186",
                    "diff_url": "https://github.com/mojombo/grit/pull/186.diff",
                    "patch_url": "https://github.com/mojombo/grit/pull/186.patch"
                },
                "body": "Git has odd sorting requirements for tree entries. The entries are sorted by name, but sub-trees sort as if they had \"/\" at the end. That means when you add full paths to the index like this:\n\n```\nindex.add(\"foo.bar\", \"content\")\nindex.add(\"foo/file\", \"content\")\nindex.write_tree()\n```\n\nthe resulting tree ends up sorted correctly (`foo` must come after `foo.bar`, because `/` comes after `.`). But if you provide individual sha1s, like this:\n\n```\nindex.add(\"foo.bar\", \"content\")\nindex.add(\"foo\", [some_tree_sha1, \"40000\"])\nindex.write_tree()\n```\n\nwe end up sorting the entries in the wrong order. Git complains (and may provide incorrect answers for diffs, since we rely on the sort order there).\n\nThe fix is fairly straightforward; we already take special care to use a separate sorting key that includes the \"/\", but we missed the case of a sub-tree being named explicitly by its sha1.\n\nI know Grit is in \"deprecated mode\", but this is a real bug that can cause corrupt objects to be created. It's probably worth including.\n"
            }
        ];      

        const issuesData = issues.map((e, i) => (
            <div className={styles.Container} key={e.id}>
                    <div className={styles.ReporterContainer}>
                        <img className={styles.AvatarImg} src={issues[i].user.avatar_url}
                            alt="profile" />
                        <div className={styles.TitleContainer}>
                            <div className={styles.Title}>
                                {issues[i].title}
                            </div>
                            <div className={styles.IssueUser}>
                                <span>#{issues[i].number}:</span> opened by
                                <strong> {issues[i].user.login}</strong>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Body}>{issues[i].body}</div>
                </div>
        ));

        return (
            <div className={styles.Wrapper} >           
                <div className={styles.GoBack}>
                    <FontAwesomeIcon icon="chevron-left" className={styles.ArrowLeft} />
                    <div>GO BACK</div>
                </div>
                {issuesData}                
            </div>
        );
    }
}

export default IssueList;
