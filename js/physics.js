const Physics = {
    /**
     * Checks for collision between the bird and pipes
     * @param {Bird} bird
     * @param {Pipe[]} pipes
     * @returns {boolean} True if collision occurred
     */
    checkPipeCollision(bird, pipes) {
        for (let pipe of pipes) {
            // Check if bird is within the horizontal bounds of the pipe
            if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipe.width) {
                // Check if bird hits the top pipe or the bottom pipe
                if (bird.y < pipe.topHeight || bird.y + bird.height > pipe.bottomY) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * Checks if the bird has passed a pipe to increment score
     * @param {Bird} bird
     * @param {Pipe} pipe
     * @returns {boolean} True if bird passed the pipe
     */
    checkScore(bird, pipe) {
        if (!pipe.scored && bird.x > pipe.x + pipe.width) {
            pipe.scored = true;
            return true;
        }
        return false;
    }
};
