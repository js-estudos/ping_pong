// Select the canvas element from the HTML document
let canvas = document.querySelector("#canvas");

// Get the 2D rendering context of the canvas
let ctx = canvas.getContext("2d");

// Get the width and height of the canvas
let width = canvas.width;
let height = canvas.height;

// Set the fill style to black
ctx.fillStyle = "black";

// Draw a filled rectangle covering the entire canvas
ctx.fillRect(0, 0, width, height);

// Set the fill style to black
ctx.fillStyle = "black";

// Draw a filled rectangle covering the entire canvas
ctx.fillRect(0, 0, width, height);

// Set the fill style to black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

// Set the fill style to white and the ball size
const BALL_SIZE = 5;
let ballPosition = {x: 20, y: 30}

// Draw the ball
ctx.fillStyle = "white";
ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE);

