import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import BaseContext from './context/BaseContext';

function App() {
  function clickMe() {
    console.log("I'm Clicked");
  }

  return (
    <div>
      <BaseContext.Provider value={clickMe}>
        <Dashboard />
      </BaseContext.Provider>
    </div>
  );
}

export default App;
