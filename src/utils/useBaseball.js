import { useState } from 'react';
export const useBaseball = () => {
  const [stats, setStats] = useState({
    strikes: 0,
    balls: 0,
    outs: 0,
    innings: 0,
    errors: 0,
    hits: 0
  });
  const handleFouls = () => {
    if (stats.strikes < 2) {
      setStats({ ...stats, strikes: stats.strikes + 1 });
    }
  };
  const handleStrikes = () => {
    if (stats.strikes === 2) {
      setStats({ ...stats, strikes: stats.strikes = 0 })
    } else {
      setStats({ ...stats, strikes: stats.strikes + 1 });
    }
  };

  const handleBalls = () => {
    if (stats.balls === 3) {
      setStats({ ...stats, balls: stats.balls = 0 })
    } else {
      setStats({ ...stats, balls: stats.balls + 1 });
    }
  };

  const handleOuts = () => {
    if (stats.outs === 2) { 
      setStats({ ...stats, outs: stats.outs = 0});
    } else {
      setStats({ ...stats, outs: stats.outs + 1 });
    }
  };

  const handleErrors = () => {
    setStats({ ...stats, errors: stats.errors + 1)
  }

  const handleInnings = () => {
    setStats({ ...stats, innings: stats.innings + 1)
  }

  const handleHits = () => {
    setStats({ ...stats, hits: stats.hits + 1 });
    setStats({ ...stats, strikes: stats.strikes = 0 })
    setStats({ ...stats, balls: stats.balls = 0 })
  }

  const resetGame = () => {
    setStrikes(0)
    setInnings(0);
    setBalls(0);
    setOuts(0);
    setErrors(0);
    setHits(0);
  }
  return {stats, handleStrikes, handleBalls, handleFouls, handleHits, handleInnings, handleErrors, handleOuts, resetGame};
};