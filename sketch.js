var r = 255;
var g =255;
var b=255;

function setup(){

  createCanvas(1550,675);
}

function draw(){
  r = map(mouseX, 0, 1500, 0, 255)
  g = map(mouseY, 0, 600, 0, 255)
  b = (r + g)

  background(r,g,b);

  fill("black")
  ellipse(mouseX, mouseY, 20, 20)
} 
