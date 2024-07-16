// Import React and the Tile component
import React from 'react';
import Tile from './menuTile';
import "../css/menu.css";
// Import the updated configuration
import { tilesConfig } from './tileConfig'; // Updated import to use tilesConfig

function TileTable() {
  const createTable = () => {
    let table = [];
    let rowIndex = 0;
    for (let i = 0; i < tilesConfig.length; i += 4) {
      let row = [];
      for (let j = i; j < i + 4 && j < tilesConfig.length; j++) {
        // Updated to pass image prop to Tile
        row.push(
          <td key={tilesConfig[j].id}>
            <Tile id={tilesConfig[j].id} image={tilesConfig[j].image}></Tile>
          </td>
        );
      }
      table.push(<tr key={rowIndex}>{row}</tr>);
      rowIndex++;
    }
    return table;
  };

  return (
    <table>
      <tbody>{createTable()}</tbody>
    </table>
  );
}

export default TileTable;