import React from 'react'

function Display({ stats: { strikes, balls, outs, hits, innings, errors  }}) {

  return (
     <div className="gameContainer">
        <div className="strikesContainer">
           <h2 className="strikesHeader">Strikes</h2>
           <div className="strikesDisplay">{strikes}</div>
        </div>

        <div className="ballsContainer">
           <h2 className="ballsHeader">Balls</h2>
           <div data-testid='ballsDisplay' className="ballsDisplay">{balls}</div>
        </div>

        <div className="outsContainer">
           <h2 className="outsHeader">Outs</h2>
           <div className="outsDisplay">{outs}</div>
        </div>

        <div className="hitsContainer">
           <h2 className="hitsHeader">Hits</h2>
           <div className="hitsDisplay">{hits}</div>
        </div>

        <div className="inningsContainer">
           <h2 className="inningsHeader">Inning</h2>
           <div className="inningsDisplay">{innings}</div>
        </div>

        <div className="errorsContainer">
           <h2 className="errorsHeader">Errors</h2>
           <div className="errorsDisplay">{errors}</div>
        </div>
     </div>
  );
}

export default Display;