function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hr=hour();
  mn=minute();
  sc=second();
  ScAngle=map(sc,0,60,0,360);
  HrAngle=map(hr,12,0,12,0,360);
  MnAngle=map(0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  push();
  rotate(ScAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push();
  rotate(MnAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push();
  rotate(HrAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  drawSprites();
}