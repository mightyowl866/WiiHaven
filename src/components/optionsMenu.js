import React from "react";
import "../css/options.css";
import { useNavigate } from 'react-router-dom';

function OptionsMenu() {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate('/main-menu');
        
    };
    return (
        <div className="options-menu">
            <header className="options-header">
                <img src="assets/wiiHaven_Logo.png" alt="WiiHaven Logo" className="wiiHavenLogo"></img>
            </header>
            <main className="options-content">
                <div className="box" id="box1">Box 1</div>
                <div className="box" id="box2">Box 2</div>
            </main>
            <footer className="options-footer">
                <button onClick={handleProceed}>Back</button>
            </footer>
        </div>
    );
}

export default OptionsMenu;