import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import RepoItem from '../RepoItem/RepoItem';
import IssueItem from '../IssueItem/IssueItem';

library.add(fab, faSearch, faChevronRight, faChevronLeft);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <RepoItem /> */}
      <IssueItem />
    </div>
    
  );
}

export default App;
