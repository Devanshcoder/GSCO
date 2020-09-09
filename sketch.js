var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(30,95);
  weight=random(400,1500);
  car=createSprite(50, 100, 60, 30);
  car.shapeColor="white";
  wall=createSprite(1000, 200, 60,400);
  wall.shapeColor="grey"; 
}
  

function draw() {
  background(0);
  car.velocityX=speed;
  var deformation=(0.5 * weight * speed * speed)/22509;
  if(car.collide(wall))
  {
  car.velocityX=0;  
  if(deformation<100){
  car.shapeColor="green";
  }
  else if(deformation<180&&deformation>100){
    car.shapeColor="yellow";  
  }
  else if (deformation>180){
  car.shapeColor="red";
  }
}
  drawSprites();
  fill("white");
  text("deformation="+deformation,500,300);
  
}
