import React from 'react'

function Dashboard(props) {
  const {balls, strikes, setBalls, setStrikes, outs, setOuts, errors, setErrors, hits, setHits, innings, setInnings} = props;

  const handleStrikes = () => {
    if (strikes === 2) { 
      setStrikes(0);
      setBalls(0);
    }
    else
    {
      setStrikes(strikes + 1);
    }
  }

  const handleBalls = () => {
    if (balls === 3) { 
      setStrikes(0);
      setBalls(0);
    }
    else
    {
      setBalls(balls + 1);
    }
  }

  const handleFouls = () => {
    if (strikes === 0 || strikes === 1) { 
      setStrikes(strikes + 1);
    }
  }

  const handleHits = () => {
    setHits(hits + 1);
    setStrikes(0);
    setBalls(0);
  }

  const handleInnings = () => {
    setInnings(innings + 1)
  }

  const handleErrors = () => {
    setErrors(errors + 1)
  }

  const handleOuts = () => {
    if (outs === 2) { 
      setOuts(0);
    }
    else
    {
      setOuts(outs + 1);
    }
  }

  const resetGame = () => {
    setStrikes(0)
    setInnings(0);
    setBalls(0);
    setOuts(0);
    setErrors(0);
    setHits(0);
  }

  return (
    <section className="buttons">
      <button onClick={()=>handleStrikes()} className="strikeButton">STRIKES</button>
      <button onClick={()=>handleBalls()} className="ballButton">BALLS</button>
      <button onClick={()=>handleFouls()} className="foulButton">FOULS</button>
      <button onClick={()=>handleHits()} className="hitButton">HITS</button>
      <button onClick={()=>handleOuts()} className="outButton">OUTS</button>
      <button onClick={()=>handleInnings()} className="inningButton">INNINGS</button>
      <button onClick={()=>handleErrors()} className="errorButton">ERRORS</button>
      <button onClick={()=>resetGame()} className="resetButton">New Game</button>
    </section>
  );
}

export default Dashboard;