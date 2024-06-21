import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menu.css';
import Tile from '../components/menuTile.js';
import BlackScreen from '../components/blackscreen.js';

function App() {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate('/optionsMenu');
        
    };
    return (
      <div>
        <BlackScreen />
        <div id='backgroundStripes'>
          <div id="teleport" className="teleport"></div>
          <div className="wrapper">
            <div className="slide-one">
              <div className="start-wrap" id="startW">
                <Tile id="Sonic Adventure 2"></Tile>
                <Tile id="tile2"></Tile>
                <Tile id="tile3"></Tile>
                <Tile id="tile4"></Tile>
                <Tile id="tile5"></Tile>
                <Tile id="tile6"></Tile>
                <Tile id="tile7"></Tile>
                <Tile id="tile8"></Tile>
                <Tile id="tile9"></Tile>
                <Tile id="tile10"></Tile>
                <Tile id="tile11"></Tile>
                <Tile id="tile12"></Tile>
              </div>
                    </div>
                    <div id="tile-content" className="hidden">
                        <div className="wiiMenu">
                            <div id="Wiimenu" className="bubble-option">
                                <a href="/" className="option-1">Wii Menu</a>
                            </div>
                            <div className="bubble-option-1">
                                <a className="option-2" id="StartText" href="/">Start</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <img src="assets/blankbutton.png" className="blankbutton" alt="blankbutton"></img>
                        
                            <img src="assets/wiibubble.png" className="wiibubble" alt="wiibubble" onClick={handleProceed}></img>
                        
                        <img src="assets/bottom.png" className="bottom" alt="bottom"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;