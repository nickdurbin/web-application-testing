import React from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import { useBaseball } from './utils/useBaseball';

function App() {
 const { stats, ...buttons } = useBaseball();

  return (
    <div className="App">
      <h1> Scoreboard </h1>
      <Display stats={stats}/>
      <Dashboard buttonFunctions={buttons} />
    </div>
  );
}

export default App;