import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [innings, setInnings] = useState(0);
  const [errors, setErrors] = useState(0);
  const [outs, setOuts] = useState(0);
  const [hits, setHits] = useState(0);

  return (
    <div className="App">
      <header data-testid="main-header" className="App-header">
        <p> Scoreboard </p>
        <Display balls={balls} strikes={strikes} errors={errors} innings={innings} outs={outs} hits={hits} />
        <Dashboard balls={balls} strikes={strikes} setBalls={setBalls} setStrikes={setStrikes} innings={innings} errors={errors} outs={outs} setOuts={setOuts} setInnings={setInnings} setErrors={setErrors} hits={hits} setHits={setHits} />
      </header>
    </div>
  );
}

export default App;