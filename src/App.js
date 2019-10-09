import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <header data-testid="main-header" className="App-header">
        <p> Baseball Application </p>
        <Display balls={balls} strikes={strikes}/>
        <Dashboard balls={balls} strikes={strikes} setBalls={setBalls} setStrikes={setStrikes} />
      </header>
    </div>
  );
}

export default App;