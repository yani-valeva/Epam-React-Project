import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RepoItem from '../RepoItem/RepoItem';

library.add(fab, faSearch, faChevronRight);

function App() {
  return (
    <div className="App">
      <Header />
      <RepoItem />
    </div>
    
  );
}

export default App;
