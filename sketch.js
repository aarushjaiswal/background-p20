var r = 255;
var g =255;
var b=255;

function setup(){

  createCanvas(1550,675);
}

function draw(){
  if (b>205){
    b=b/random(2,5)
  }
  
  if (r>205){
    r=r/random(1,5)
  }

  if (g>205){
    g=g/random(1,5)
  }

  if(r<20){
    r=r+random(5,30)
  }

  if(g<20){
    g=g+random(5,30)
  }

  if(b<20){
    b=b+random(5,30)
  }

  if (r=g){
    b=(2*r+g)/2
  }
  
  r = map(mouseX, 0, b*4/3, 0, 1550)
  g = map(mouseY, 0, b*5/4,0, 675)
  b = (r + g)

  background(r,2*g,b/2);

  fill("black")
  ellipse(mouseX, mouseY, 20, 20)
} 