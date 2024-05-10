let x, y;
let speedX, speedY;
let redVal, greenVal, blueVal;
let alphaVal = 70;
let angle = 0;

function setup() {
  // TODO: Create canvas and set initial background color
    createCanvas(windowWidth, windowHeight);
    background(50, 50, 50);

  // TODO: Randomize variables used to draw shapes
    x = random(width);
    y = random(height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}

function draw() {
  // TODO: Map key inputs to various shape drawing functions
    if (keyIsPressed && key !== ' ') {
        if (keyCode % 5 === 0) {
            parametricLines();
        } else if (keyCode % 5 === 1) {
            bouncingEllipse()
        } else if (keyCode % 5 === 2) {
            flower();
        }
    }
}

// TODO: Add keyPressed() function to ensure that the drawing functions don't repeat on single key presses
// TODO: Reset canvas on spacebar press
// TODO: Save image on Return/Enter press



// TODO: Add keyReleased() function to randomize values again on key release
function keyReleased() {
    x = random(width);
    y = random(height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}