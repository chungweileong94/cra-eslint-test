import React from 'react';

/**
 * Try to switch between alias import and relative import for `ReactLink` & `Logo`
 * You can even try to reorder them to trigger the problem
 */
import ReactLink from '@/components/ReactLink';
// import ReactLink from './components/ReactLink';

import Logo from './components/Logo';
// import Logo from '@/components/Logo';

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
