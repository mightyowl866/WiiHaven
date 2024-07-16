import React, { useState } from "react";
import TileTable from "./tileTable";
import "../css/options.css";
import { useNavigate } from 'react-router-dom';

function OptionsMenu() {
    const navigate = useNavigate();
    const [showTileTable, setShowTileTable] = useState(false);

    const handleProceed = () => {
        navigate('/main-menu');
    };

    const toggleTileTable = () => {
        setShowTileTable(!showTileTable); // Toggle the visibility of the TileTable
    };

    return (
        <div className="options-menu">
            <header className="options-header">
                <img src="assets/wiiHaven_Logo.png" alt="WiiHaven Logo" className="wiiHavenLogo"></img>
            </header>
            <main>
                <div className="options-content">
                    {!showTileTable && (
                        <>
                            <div className="box" id="box1" onClick={toggleTileTable}>
                                <h3>Game Management</h3>
                            </div>
                            <div className="box" id="box2" onClick={toggleTileTable}> {/* Added onClick handler to toggle TileTable */}
                                <h3>Settings</h3>
                            </div>
                        </>
                    )}
                    {showTileTable && (
                        <div className="gameManager">
                            <TileTable />
                        </div>
                    )}
                </div>
            </main>
            <footer className="options-footer">
                <button onClick={handleProceed}>
                    <p>Back</p>
                </button>
            </footer>
        </div>
    );
}

export default OptionsMenu;