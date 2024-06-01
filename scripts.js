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

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 10;

let leftPaddleTop = 10;
let rightPaddleTop = 30;

// Add an event listener to the document for the mousemove event
document.addEventListener("mousemove", e => {
    // Set the top position of the left paddle to the y position of the mouse
    rightPaddleTop = e.y - canvas.offsetTop;
});


// Draw a filled rectangle covering the entire canvas
function draw() {
    // Set the fill style to black
    ctx.fillStyle = "black";
    // Draw a filled rectangle covering the entire canvas
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    // Draw the ball
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

    // Draw the paddles
    ctx.fillRect(
        PADDLE_OFFSET,
        leftPaddleTop,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    );
    // Draw the right paddle
    ctx.fillRect(
        width - PADDLE_WIDTH - PADDLE_OFFSET,
        rightPaddleTop,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    );
}
// Update the position of the ball
function update() {
    ballPosition.x += xSpeed;
    ballPosition.y += ySpeed;
}

// Check if the ball has collided with the walls
function checkCollision() {
    // Create an object representing the ball's position
    let ball = {
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    }
    // Check if the ball has collided with the left or right walls
    if(ball.left < 0 || ball.right > width) {
        // Reverse the x direction of the ball
        xSpeed = -xSpeed;
    }
    // Check if the ball has collided with the top or bottom walls
    if(ball.top < 0 || ball.bottom > height) {
        // Reverse the y direction of the ball
        ySpeed = -ySpeed;
    }
}


// Call the gameLoop function every 30 milliseconds
function gameLoop() {
    draw();
    update();
    checkCollision();

    // Call this function again after a timeout
    setTimeout(gameLoop,30);
}

gameLoop(); // Start the game loop



