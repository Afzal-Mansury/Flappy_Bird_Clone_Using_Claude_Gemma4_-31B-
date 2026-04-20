class Bird {
    constructor() {
        this.x = CONFIG.BIRD_X;
        this.y = CONFIG.CANVAS_HEIGHT / 2;
        this.velocity = 0;
        this.width = CONFIG.BIRD_SIZE;
        this.height = CONFIG.BIRD_SIZE;
    }

    jump() {
        this.velocity = CONFIG.JUMP_FORCE;
    }

    update() {
        this.velocity += CONFIG.GRAVITY;
        this.y += this.velocity;

        // Floor collision
        if (this.y + this.height > CONFIG.CANVAS_HEIGHT) {
            this.y = CONFIG.CANVAS_HEIGHT - this.height;
            return true; // Hit floor
        }
        if (this.y < 0) this.y = 0;
    }

    draw(ctx) {
        // Draw a stylized bird using shapes for a polished, cohesive look

        // 1. Body (Main Circle)
        ctx.fillStyle = '#f7e018'; // Bright yellow
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 2. Eye
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x + this.width * 0.7, this.y + this.height * 0.3, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x + this.width * 0.75, this.y + this.height * 0.3, 2, 0, Math.PI * 2);
        ctx.fill();

        // 3. Beak
        ctx.fillStyle = '#f5a623'; // Orange
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.8, this.y + this.height * 0.4);
        ctx.lineTo(this.x + this.width * 1.1, this.y + this.height * 0.5);
        ctx.lineTo(this.x + this.width * 0.8, this.y + this.height * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 4. Wing
        ctx.fillStyle = '#fff200'; // Slightly different yellow
        ctx.beginPath();
        ctx.ellipse(this.x + this.width * 0.3, this.y + this.height * 0.6, 8, 5, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

class Pipe {
    constructor() {
        this.width = CONFIG.PIPE_WIDTH;
        this.x = CONFIG.CANVAS_WIDTH;

        // Randomize gap position
        const minHeight = 50;
        const maxHeight = CONFIG.CANVAS_HEIGHT - CONFIG.PIPE_GAP - 50;
        this.topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

        this.bottomY = this.topHeight + CONFIG.PIPE_GAP;
        this.scored = false;
    }

    update() {
        this.x -= CONFIG.PIPE_SPEED;
    }

    draw(ctx) {
        // Create a gradient for a 3D effect
        const gradient = ctx.createLinearGradient(this.x, 0, this.x + this.width, 0);
        gradient.addColorStop(0, '#2e7d32'); // Dark green
        gradient.addColorStop(0.3, '#81c784'); // Light green highlight
        gradient.addColorStop(1, '#1b5e20'); // Darker green edge

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;

        // Top pipe
        ctx.fillRect(this.x, 0, this.width, this.topHeight);
        ctx.strokeRect(this.x, 0, this.width, this.topHeight);

        // Top pipe cap
        ctx.fillRect(this.x - 5, this.topHeight - 20, this.width + 10, 20);
        ctx.strokeRect(this.x - 5, this.topHeight - 20, this.width + 10, 20);

        // Bottom pipe
        ctx.fillRect(this.x, this.bottomY, this.width, CONFIG.CANVAS_HEIGHT - this.bottomY);
        ctx.strokeRect(this.x, this.bottomY, this.width, CONFIG.CANVAS_HEIGHT - this.bottomY);

        // Bottom pipe cap
        ctx.fillRect(this.x - 5, this.bottomY, this.width + 10, 20);
        ctx.strokeRect(this.x - 5, this.bottomY, this.width + 10, 20);
    }
}
