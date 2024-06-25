import resct, { useEffect } from 'react';
import './gameStyle.css'

// import './gameMain'


function Game() {
  
  return (
  <div>
    <div id="ui">
      <h3>Points: <span id="pointsUI">00</span></h3>
      <br></br>
      <h4 className="gameStat">Game Status: <span id="statusUI">On Going. . .</span></h4>
    </div>


    {/* <script type="module" src="/gameMain.js"></script> */}
  </div>
  )
}

export default Game