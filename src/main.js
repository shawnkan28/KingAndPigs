import { Entity } from "./engine/Entity.js";
import { TILE_DATA } from "./data/tiles.js";
import { LEVEL_1 } from "./data/level1.js";
import { TileMap } from "./engine/TileMap.js";

const canvas = document.getElementById("game-canvas");
const screen = canvas.getContext("2d");

// Resolution
canvas.width = TILE_DATA.cellSize[0] * 32; // 1024
canvas.height = TILE_DATA.cellSize[1] * 18; // 576
const map = new TileMap({
  path: "./src/assets/tiles/Terrain (32x32).png",
  metaData: TILE_DATA,
  mapData: LEVEL_1,
});

let lastTime = 0;
function render(now) {
  const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.1) : 0;
  lastTime = now;

  screen.fillStyle = "#1a1a2e";
  screen.fillRect(0, 0, canvas.width, canvas.height);

  // Add Scene here
  map.render(screen);

  screen.font = "20px arial";
  screen.fillStyle = "white";
  screen.textBaseline = "top";
  screen.fillText((dt * 1000).toFixed(1) + " ms", 16, 16);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
