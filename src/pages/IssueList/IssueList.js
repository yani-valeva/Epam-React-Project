import React from 'react';
import styles from './IssueList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IssueList extends React.Component {
    state = {
        issueItems: []
    }

    componentDidMount() {
        console.log(this.props.match)
    }

    render() {

        const labels = [
            {
                "id": 131357154,
                "node_id": "MDU6TGFiZWwxMzEzNTcxNTQ=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/ARM",
                "name": "ARM",
                "color": "666666",
                "default": false
            },
            {
                "id": 62666305,
                "node_id": "MDU6TGFiZWw2MjY2NjMwNQ==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/BSD",
                "name": "BSD",
                "color": "A8191C",
                "default": false
            },
            {
                "id": 15657,
                "node_id": "MDU6TGFiZWwxNTY1Nw==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/C%20API",
                "name": "C API",
                "color": "613411",
                "default": false
            },
            {
                "id": 162246026,
                "node_id": "MDU6TGFiZWwxNjIyNDYwMjY=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Community",
                "name": "Community",
                "color": "fad8c7",
                "default": false
            },
            {
                "id": 173958684,
                "node_id": "MDU6TGFiZWwxNzM5NTg2ODQ=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Compatibility",
                "name": "Compatibility",
                "color": "000000",
                "default": false
            },
            {
                "id": 309020880,
                "node_id": "MDU6TGFiZWwzMDkwMjA4ODA=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Docker",
                "name": "Docker",
                "color": "c7def8",
                "default": false
            },
            {
                "id": 64703,
                "node_id": "MDU6TGFiZWw2NDcwMw==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Documentation",
                "name": "Documentation",
                "color": "ededed",
                "default": false
            },
            {
                "id": 17101473,
                "node_id": "MDU6TGFiZWwxNzEwMTQ3Mw==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Encoding",
                "name": "Encoding",
                "color": "02d7e1",
                "default": false
            },
            {
                "id": 13463,
                "node_id": "MDU6TGFiZWwxMzQ2Mw==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Feature",
                "name": "Feature",
                "color": "25bd0d",
                "default": false
            },
            {
                "id": 311789170,
                "node_id": "MDU6TGFiZWwzMTE3ODkxNzA=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/GitLab",
                "name": "GitLab",
                "color": "E24329",
                "default": false
            },
            {
                "id": 19174,
                "node_id": "MDU6TGFiZWwxOTE3NA==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Install",
                "name": "Install",
                "color": "cff076",
                "default": false
            },
            {
                "id": 16689,
                "node_id": "MDU6TGFiZWwxNjY4OQ==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/JIT",
                "name": "JIT",
                "color": "a6d18e",
                "default": false
            },
            {
                "id": 315180167,
                "node_id": "MDU6TGFiZWwzMTUxODAxNjc=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Keyword%20Arguments",
                "name": "Keyword Arguments",
                "color": "bfe5bf",
                "default": false
            },
            {
                "id": 17060,
                "node_id": "MDU6TGFiZWwxNzA2MA==",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Performance",
                "name": "Performance",
                "color": "ff0099",
                "default": false
            },
            {
                "id": 106198,
                "node_id": "MDU6TGFiZWwxMDYxOTg=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Ruby%201.9",
                "name": "Ruby 1.9",
                "color": "ededed",
                "default": false
            },
            {
                "id": 145158,
                "node_id": "MDU6TGFiZWwxNDUxNTg=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Ruby%202.0",
                "name": "Ruby 2.0",
                "color": "d7e102",
                "default": false
            },
            {
                "id": 162242812,
                "node_id": "MDU6TGFiZWwxNjIyNDI4MTI=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Ruby%202.1",
                "name": "Ruby 2.1",
                "color": "cccccc",
                "default": false
            },
            {
                "id": 162242827,
                "node_id": "MDU6TGFiZWwxNjIyNDI4Mjc=",
                "url": "https://api.github.com/repos/rubinius/rubinius/labels/Ruby%202.2",
                "name": "Ruby 2.2",
                "color": "dddddd",
                "default": false
            },
        ];

        let labelsData = labels.map(e => {
            let divStyle = {
                color: '#' + e.color,
                borderColor: '#' + e.color
            };

            return <div className={styles.labels} style={divStyle} key={e.id}>{e.name}</div>
        });

        const issuesData = this.state.issueItems.map((e, i) => (
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
                <div className={styles.labelContainer}>{labelsData}</div>
            </div>
        ));

        return (
            <div className={styles.wrapper} >
                <div className={styles.goBack}>
                    <FontAwesomeIcon icon="chevron-left" className={styles.arrowLeft} />
                    <div>GO BACK</div>
                </div>
                {issuesData}
            </div>
        );
    }
}

export default IssueList;
