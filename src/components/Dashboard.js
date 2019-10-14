import React from 'react'

function Dashboard({ buttonFunctions }) {

  const labels = ['Fouls', 'Strikes', 'Balls', 'Outs', 'Hits', 'Innings', 'Errors', 'Reset'];
  return (
    Object.values(buttonFunctions)
      .map((button, i) => <button data-testid={labels[i]} onClick={button}>{labels[i]}</button>)
    );
}

export default Dashboard;