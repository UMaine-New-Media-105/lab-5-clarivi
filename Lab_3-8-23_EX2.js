//Ex 1. Now add movement for the sprite in the y-direction and make them bounce off of all the borders on the canvas. The result should be a sprite that acts like a Windows theme screensaver. Make sure you randomize the start position for x and y
//Ex 2.  keyPressed() is function that checks for which key is pressed. Use this function to allow interaction with your arrow keys i.e., pressing UP key should change the direction of the sprite to make them move in the upwards direction, pressing the DOWN key should change the direction of the sprite to make them move in the downwards directions, and so on for the other two arrow keys.
function setup() {
  createCanvas(400, 400);
  speedX = 2; //how fast the ball moves
  speedY = 2;
  xPos = random(25, 375); //starting position of the ball
  yPos = random(25, 375);
}

function draw() {
  background(220);
ellipse(xPos, yPos, 50);  //making the ball
  xPos = xPos + speedX; //the ball's x and y positions change
  yPos = yPos + speedY;
  if (xPos >= 375 || xPos < 25) { //if ball hits either horizontal edge, bounce and move the opposite direction
    speedX = speedX * -1;
  }
  if (yPos >= 375 || yPos < 25) { //if ball hits either vertical edge, bounce and move opposite direction
    speedY = speedY * -1;
  }
}

function keyPressed() {   //if up arrow is pressed, make ball always go up
  if (keyCode === UP_ARROW) {
    if (speedY > 0) {  //if the ball is moving down, move up
      speedY = speedY * -1;
    }
  } else if (keyCode === DOWN_ARROW) { //if down arrow is pressed, make ball always go down
    if (speedY < 0) {    //if the ball is moving up, move down
      speedY = speedY * -1; 
    }
  }
}
