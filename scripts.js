// Select the canvas element from the HTML document
let canvas = document.querySelector("#canvas");

// Get the 2D rendering context of the canvas
let ctx = canvas.getContext("2d");

// Get the width and height of the canvas
let width = canvas.width;
let height = canvas.height;

// Set the fill style to white and the ball size
const BALL_SIZE = 5;
let ballPosition = {x: 20, y: 30}
// Set the speed of the ball in the x and y directions
let xSpeed = 4;
let ySpeed = 2;
// Draw a filled rectangle covering the entire canvas
function draw() {
    // Set the fill style to black
    ctx.fillStyle = "black";
    // Draw a filled rectangle covering the entire canvas
    ctx.fillRect(0, 0, width, height);

    // Draw the ball
    ctx.fillStyle = "white";
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);
}
// Update the position of the ball
function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}
// Check if the ball has collided with the walls
function checkCollision() {
    let ball = {
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    }
    if(ball.left < 0 || ball.right > width) {
        xSpeed = -xSpeed;
    }
    if(ball.top < 0 || ball.bottom > height) {
        ySpeed = -ySpeed;
    }
}


// Call the gameLoop function every 30 milliseconds
function gameLoop() {
    draw();
    update();

    // Call this function again after a timeout
    setTimeout(gameLoop,30);
}

gameLoop(); // Start the game loop



