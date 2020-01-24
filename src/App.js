import React from 'react';

import ReactLink from '@/components/ReactLink';

import Logo from './components/Logo';
import './App.css';


const App = () => (
  <div className="App">
    <header className="App-header">
      <Logo />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <ReactLink />
    </header>
  </div>
);

export default App;
