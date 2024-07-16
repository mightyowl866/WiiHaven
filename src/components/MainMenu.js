import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menu.css';
import Tile from '../components/menuTile.js';
import BlackScreen from '../components/blackscreen.js';
import { tilesConfig } from './tileConfig'; // Updated import to use tilesConfig

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
                {tilesConfig.map(tile => <Tile key={tile.id} id={tile.id} image={tile.image}></Tile>)} {/* Updated to pass image prop */}
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