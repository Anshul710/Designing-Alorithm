var movingPlate,fixedPlate

function setup() {
  createCanvas(800,400);
  movingPlate = createSprite(400, 200, 100, 50);
  fixedPlate = createSprite(400, 200, 50, 100);
  movingPlate.shapeColor = "green"; 
  fixedPlate.shapeColor = "green"; 
}

function draw() {
  background(255,255,255);
  movingPlate.x = mouseX;
  movingPlate.y = mouseY;
  isTouching();  
  drawSprites();
}
function isTouching(){
  if (movingPlate.x-fixedPlate.x <= movingPlate.width/2 + fixedPlate.width/2 &&
    fixedPlate.x-movingPlate.x <= movingPlate.width/2 + fixedPlate.width/2 && 
    movingPlate.y-fixedPlate.y <= movingPlate.height/2 + fixedPlate.height/2 &&
    fixedPlate.y-movingPlate.y <= movingPlate.height/2 + fixedPlate.height/2) {
    movingPlate.shapeColor = "red"; 
    fixedPlate.shapeColor = "red";
  }
  else{
    movingPlate.shapeColor = "green"; 
    fixedPlate.shapeColor = "green";
  }

}