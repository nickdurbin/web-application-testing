import React from 'react'

function Dashboard({ buttonFunctions }) {

  const labels = ['Fouls', 'Strikes', 'Balls', 'Outs', 'Hits', 'Errors', 'Innings', 'Reset'];
  return (
    Object.values(buttonFunctions)
      .map((button, i) => <button onClick={button}>{labels[i]}</button>)
    );
}

export default Dashboard;