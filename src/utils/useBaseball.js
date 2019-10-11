import { useState } from 'react';

export const useBaseball = () => {
  const [stats, setStats] = useState({
    strikes: 0,
    balls: 0,
    outs: 0,
    hits: 0,
    innings: 0,
    errors: 0
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
      setStats({ ...stats, outs: stats.outs = 0 });
    } else {
      setStats({ ...stats, outs: stats.outs + 1 });
    }
  };

  const handleErrors = () => {
    setStats({ ...stats, errors: stats.errors + 1 })
  }

  const handleInnings = () => {
    setStats({ ...stats, innings: stats.innings + 1 })
  }

  const handleHits = () => {
    setStats({ ...stats, hits: stats.hits + 1, strikes: stats.strikes = 0, balls: stats.balls = 0 });
    
  }

  const resetGame = () => {
    setStats({ strikes: 0, balls: 0, outs: 0, hits: 0, innings: 0, errors: 0 })
  }
  
  return {stats, handleFouls, handleStrikes, handleBalls, handleOuts, handleHits, handleInnings, handleErrors, resetGame};
};