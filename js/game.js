const GameState = {
    START: 'START',
    PLAYING: 'PLAYING',
    GAME_OVER: 'GAME_OVER'
};

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.state = GameState.START;
        this.score = 0;
        this.frameCounter = 0;

        this.bird = new Bird();
        this.pipes = [];

        this.initInput();
        this.loop();
    }

    initInput() {
        const triggerJump = () => {
            if (this.state === GameState.START) {
                this.startGame();
            } else if (this.state === GameState.PLAYING) {
                this.bird.jump();
            } else if (this.state === GameState.GAME_OVER) {
                this.resetGame();
            }
        };

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') triggerJump();
        });

        this.canvas.addEventListener('mousedown', triggerJump);
    }

    startGame() {
        this.state = GameState.PLAYING;
        document.getElementById('start-screen').classList.remove('active');
    }

    resetGame() {
        this.score = 0;
        this.frameCounter = 0;
        this.bird = new Bird();
        this.pipes = [];
        this.state = GameState.START;

        document.getElementById('game-over-screen').classList.remove('active');
        document.getElementById('start-screen').classList.add('active');
    }

    gameOver() {
        this.state = GameState.GAME_OVER;
        document.getElementById('final-score').innerText = this.score;
        document.getElementById('game-over-screen').classList.add('active');
    }

    update() {
        if (this.state !== GameState.PLAYING) return;

        this.frameCounter++;

        // Update Bird
        const hitFloor = this.bird.update();
        if (hitFloor) this.gameOver();

        // Spawn Pipes
        if (this.frameCounter % CONFIG.PIPE_SPAWN_RATE === 0) {
            this.pipes.push(new Pipe());
        }

        // Update Pipes
        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i];
            pipe.update();

            // Collision check
            if (Physics.checkPipeCollision(this.bird, [pipe])) {
                this.gameOver();
            }

            // Score check
            if (Physics.checkScore(this.bird, pipe)) {
                this.score++;
            }

            // Remove off-screen pipes
            if (pipe.x + pipe.width < 0) {
                this.pipes.splice(i, 1);
            }
        }
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Pipes
        this.pipes.forEach(pipe => pipe.draw(this.ctx));

        // Draw Bird
        this.bird.draw(this.ctx);

        // Draw Score
        if (this.state === GameState.PLAYING) {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '30px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Score: ${this.score}`, this.canvas.width / 2, 50);
        }
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }
}

// Initialize the game when the page loads
window.addEventListener('load', () => {
    new Game();
});
