import React from 'react'

function Dashboard(props) {
  const {balls, strikes, setBalls, setStrikes} = props;

  const handleStrike = () => {
    if (strikes == 2) { 
      setStrikes(0);
      setBalls(0);
    }
    else
    {
      setStrikes(strikes+1);
    }
  }

  const handleBall = () => {
    if (balls == 3) { 
      setStrikes(0);
      setBalls(0);
    }
    else
    {
      setBalls(balls+1);
    }
  }

  const handleFoul = () => {
    if (strikes == 0 || strikes == 1) { 
      setStrikes(strikes+1);
    }
  }

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <section className="buttons">
      <button onClick={()=>handleStrike()} className="strikeButton">STRIKE</button>
      <button onClick={()=>handleBall()} className="ballButton">BALL</button>
      <button onClick={()=>handleFoul()} className="foulButton">FOUL</button>
      <button onClick={()=>handleHit()} className="hitButton">HIT</button>
    </section>
  );
}

export default Dashboard;