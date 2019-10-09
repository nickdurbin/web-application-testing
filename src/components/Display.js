import React from 'react'

function Display(props) {
  const {balls, strikes} = props;

  return (
     <div className="atBatContainer">
        <div className="strikesContainer">
           <h2 className="strikesHeader">Strikes</h2>
           <div className="strikesDisplay">{strikes}</div>
        </div>

        <div className="ballsContainer">
           <h2 className="ballsHeader">Balls</h2>
           <div className="ballsDisplay">{balls}</div>
        </div>
     </div>
  );
}

export default Display;