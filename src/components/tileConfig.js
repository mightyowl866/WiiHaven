// Exporting an array of objects, each representing a tile's configuration including its id and image path
export const tilesConfig = [
  { id: "Sonic Adventure 2", image: "../../public/assets/sa2.png" },
  { id: "Among Us", image: "../../public/assets/amongus.png" },
  { id: "Voices of the Void", image: "../../public/assets/votv.jpg" },
  { id: "Paper Mario: The Thousand Year Door", image: "../../public/assets/ttyd.webp" },
  { id: "Elden Ring", image: "../../public/assets/eldenring.jpg" },
  { id: "F-Zero X", image: "../../public/assets/fzero.jpg" },
  { id: "tile7", image: "/images/tile7.jpg" },
  { id: "tile8", image: "/images/tile8.jpg" },
  { id: "tile9", image: "/images/tile9.jpg" },
  { id: "tile10", image: "/images/tile10.jpg" },
  { id: "tile11", image: "/images/tile11.jpg" },
  { id: "tile12", image: "/images/tile12.jpg" }
];

// Function to update the background images of tiles on the webpage
function updateTileBackgrounds() {
  // Select all elements with the class 'empty-tile'
  const tiles = document.querySelectorAll('.empty-tile');
  // Get the base URL of the site to resolve absolute paths
  const baseUrl = window.location.origin;

  // Iterate over each tile element
  tiles.forEach((tile, index) => {
    // Get the corresponding tile configuration using the current index
    const tileConfig = tilesConfig[index];
    // Check if the tile configuration exists and has an image path
    if (tileConfig && tileConfig.image) {
      let imagePath = tileConfig.image;

      // If the image path is relative to the 'public/assets' directory, adjust it to be absolute
      if (imagePath.startsWith('../../public/assets')) {
        imagePath = `${baseUrl}/assets${imagePath.substring('../../public/assets'.length)}`;
      } else if (imagePath.startsWith('/images')) {
        // If the image path is already absolute, prepend the base URL
        imagePath = `${baseUrl}${imagePath}`;
      }

      // Set the tile's background image using the resolved image path
      tile.style.backgroundImage = `url(${imagePath})`;
    }
  });
}


// TODO: Have this preloaded when the program runs. Instead of when then the page is manually refreshes.
// Add an event listener to run the updateTileBackgrounds function when the page loads
window.addEventListener('load', updateTileBackgrounds);