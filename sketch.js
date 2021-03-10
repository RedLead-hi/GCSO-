var car,speed,weight, wall

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
  wall= createSprite(1500,200,60,200)
}

function draw() {
  background(255,255,255);  
  if (wall.x-car.x<50){
    car.velocityX=0
    var D = 0.5 * weight * speed * speed/22500
    if (D>180){
      car.shapeColor= "red"
    }
    if (D<180 && D>100){
      car.shapeColor= "yellow"
    }
    if (D<100){
      car.shapeColor= "green"
    }
  }
  drawSprites();

}