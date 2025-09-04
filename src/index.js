// Autorally Game - Main Entry Point
// Racing game implementation

import { GameEngine } from './engine/gameEngine.js';
import { RaceTrack } from './track/raceTrack.js';
import { Vehicle } from './vehicle/vehicle.js';
import { InputController } from './input/inputController.js';
import { Renderer } from './graphics/renderer.js';

class AutorallyGame {
  constructor() {
    this.engine = new GameEngine();
    this.track = new RaceTrack();
    this.vehicle = new Vehicle();
    this.input = new InputController();
    this.renderer = new Renderer();
  }

  initialize() {
    console.log('Initializing Autorally Game...');
    this.setupCanvas();
    this.loadAssets();
    this.setupEventListeners();
  }

  setupCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    canvas.id = 'gameCanvas';
    document.body.appendChild(canvas);
  }

  loadAssets() {
    // Load game assets (textures, sounds, etc.)
    console.log('Loading game assets...');
  }

  setupEventListeners() {
    // Setup input event listeners
    this.input.initialize();
  }

  start() {
    console.log('Starting Autorally Game...');
    this.engine.start();
    this.gameLoop();
  }

  gameLoop() {
    // Main game loop
    this.update();
    this.render();
    requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    // Update game state
    this.engine.update();
    this.vehicle.update();
  }

  render() {
    // Render game
    this.renderer.clear();
    this.renderer.drawTrack(this.track);
    this.renderer.drawVehicle(this.vehicle);
  }
}

// Initialize and start the game when page loads
window.addEventListener('DOMContentLoaded', () => {
  const game = new AutorallyGame();
  game.initialize();
  game.start();
});

export { AutorallyGame };
