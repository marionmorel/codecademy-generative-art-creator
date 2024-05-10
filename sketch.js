let x, y;
let speedX, speedY;
let redVal, greenVal, blueVal;
let alphaVal = 70;
let angle = 0;


function setup() {
  // TODO: Create canvas and set initial background color
    createCanvas(windowWidth, windowHeight);
    background(50);

  // TODO: Randomize variables used to draw shapes
    x = random(width);
    y = random(height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}

function draw() {
  // TODO: Map key inputs to various shape drawing functions
    if (keyIsPressed && key !== ' ' && keyCode !== 67) {
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
function keyPressed() {
    if (key !== ' ') {
        if (keyCode !== 67) {
            if (keyCode % 5 === 3) {
                roundedRect();
            }
            if (keyCode % 5 === 4) {
                star(random(30, 50), random(30, 50), random(4, 7));
            }
            if (keyCode === 13) {
                saveCanvas('canvas-' + frameCount, 'png');
            }
        } else {
            let r = random(255);
            let g = random(255);
            let b = random(255);
            background(r, g, b);
        }
    } else {
        clear();
        background(50);
    }
}

// TODO: Reset canvas on spacebar press
// TODO: Save image on Return/Enter press



// TODO: Add keyReleased() function to randomize values again on key release
function keyReleased() {
    x = random(width);
    y = random(height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}