# Flappy Bird Clone

<div align="center">
  <img src="assets/images/Bird.png" alt="Flappy Bird" width="100" height="100">
</div>

A recreation of the popular Flappy Bird game built with vanilla JavaScript and HTML5 Canvas.

## Features

- **Classic Gameplay**: Navigate the bird through pipes to score points
- **Smooth Controls**: Jump with spacebar or mouse click
- **Score Tracking**: Keep track of your score as you progress
- **Game States**: Start screen, playing state, and game over screen
- **Physics Engine**: Realistic gravity and collision detection
- **Responsive Canvas**: 800x900 pixel game area

## How to Play

1. Open `index.html` in your web browser
2. Press **Spacebar** or **Click** to make the bird jump
3. Avoid hitting the pipes and screen edges
4. Each pipe you successfully pass increases your score
5. Game ends on collision—press Spacebar or Click to restart

## Project Structure

```
flappy-bird-clone/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Game styling and UI
├── js/
│   ├── config.js      # Game configuration constants
│   ├── entities.js    # Bird and Pipe class definitions
│   ├── physics.js     # Physics calculations and collision detection
│   └── game.js        # Main game loop and state management
└── assets/
    └── images/
        └── Bird.png   # Bird sprite image
```

## Technologies Used

- **HTML5** - Markup structure
- **CSS3** - Styling and UI overlays
- **JavaScript (ES6)** - Game logic and mechanics
- **Canvas API** - Graphics rendering

## Game Configuration

The game behavior can be customized through `js/config.js`:

- `GRAVITY`: Fall acceleration (0.15)
- `JUMP_FORCE`: Jump strength (-4)
- `PIPE_SPEED`: Pipe movement speed (1.5)
- `PIPE_GAP`: Gap size between pipes (240px)
- `PIPE_SPAWN_RATE`: Frames between pipe spawns (180)
- `BIRD_SIZE`: Bird dimensions (34px)
- `CANVAS_WIDTH/HEIGHT`: Game area dimensions (800x900)

## Installation

1. Clone or download this repository
2. Ensure all files maintain the directory structure
3. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
4. Start playing!

## Game Mechanics

- **Bird Physics**: The bird constantly falls due to gravity
- **Jumping**: Pressing spacebar or clicking applies upward force
- **Pipes**: Obstacles move from right to left at constant speed
- **Scoring**: Points are awarded for successfully passing through pipes
- **Collision Detection**: Game ends when the bird touches a pipe or screen edge

## Development

The game is modular with clear separation of concerns:

- **config.js**: All game constants
- **entities.js**: Game object classes (Bird, Pipe)
- **physics.js**: Physics calculations and collision logic
- **game.js**: Main game loop and state management

## Browser Compatibility

Works on all modern browsers supporting:
- HTML5 Canvas
- ES6 JavaScript
- CSS3

## Future Enhancements

Potential improvements could include:
- Sound effects
- Background scrolling
- Different difficulty levels
- Leaderboard/high scores
- Mobile touch controls optimization
- Animated sprite sheets

## License

This is a fan-made clone for educational purposes.

---

**Enjoy the game!** 🐦
