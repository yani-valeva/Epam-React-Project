import React from 'react';
import Header from '../components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import RepoList from '../pages/RepoList/RepoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IssueList from '../pages/IssueList/IssueList';
import Message from '../components/Message/Message';

library.add(fab, faSearch, faChevronRight, faChevronLeft);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/issues/:firstname/:lastname/:page(\d+)?" component={IssueList} />
          <Route exact path="/repos/:query/:page(\d+)?" component={RepoList} />
          <Route exact path="/" component={Message} />
          <Route render={() => <>Page not found!</>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
