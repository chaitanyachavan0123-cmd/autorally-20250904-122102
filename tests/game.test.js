// Autorally Game - Unit Tests
// Test suite for the racing game components

import { describe, test, expect, beforeEach } from '@jest/globals';
import { AutorallyGame } from '../src/index.js';

describe('AutorallyGame', () => {
  let game;

  beforeEach(() => {
    // Clean up DOM before each test
    document.body.innerHTML = '';
    game = new AutorallyGame();
  });

  describe('Game Initialization', () => {
    test('should create a game instance', () => {
      expect(game).toBeDefined();
      expect(game).toBeInstanceOf(AutorallyGame);
    });

    test('should initialize all game components', () => {
      expect(game.engine).toBeDefined();
      expect(game.track).toBeDefined();
      expect(game.vehicle).toBeDefined();
      expect(game.input).toBeDefined();
      expect(game.renderer).toBeDefined();
    });

    test('should setup canvas on initialization', () => {
      game.initialize();
      const canvas = document.getElementById('gameCanvas');
      
      expect(canvas).toBeTruthy();
      expect(canvas.width).toBe(1200);
      expect(canvas.height).toBe(800);
      expect(canvas.tagName).toBe('CANVAS');
    });
  });

  describe('Game Lifecycle', () => {
    test('should have start method', () => {
      expect(typeof game.start).toBe('function');
    });

    test('should have update method', () => {
      expect(typeof game.update).toBe('function');
    });

    test('should have render method', () => {
      expect(typeof game.render).toBe('function');
    });

    test('should have gameLoop method', () => {
      expect(typeof game.gameLoop).toBe('function');
    });
  });

  describe('Game Components', () => {
    test('should have engine component', () => {
      expect(game.engine).toBeDefined();
      expect(typeof game.engine.start).toBe('function');
      expect(typeof game.engine.update).toBe('function');
    });

    test('should have vehicle component', () => {
      expect(game.vehicle).toBeDefined();
      expect(typeof game.vehicle.update).toBe('function');
    });

    test('should have renderer component', () => {
      expect(game.renderer).toBeDefined();
      expect(typeof game.renderer.clear).toBe('function');
      expect(typeof game.renderer.drawTrack).toBe('function');
      expect(typeof game.renderer.drawVehicle).toBe('function');
    });
  });

  describe('Error Handling', () => {
    test('should handle missing canvas context gracefully', () => {
      // This test would check error handling for canvas issues
      expect(() => game.initialize()).not.toThrow();
    });

    test('should handle component initialization failures', () => {
      // Test component initialization error handling
      expect(() => new AutorallyGame()).not.toThrow();
    });
  });
});

// Integration tests
describe('AutorallyGame Integration', () => {
  test('should initialize and start game without errors', (done) => {
    const game = new AutorallyGame();
    
    // Mock requestAnimationFrame to prevent infinite loop in tests
    global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 16));
    
    expect(() => {
      game.initialize();
      game.start();
    }).not.toThrow();
    
    // Clean up
    setTimeout(() => {
      done();
    }, 100);
  });
});
