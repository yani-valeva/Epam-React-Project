import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSearch);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
    
  );
}

export default App;
