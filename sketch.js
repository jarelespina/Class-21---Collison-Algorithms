var fixedRect, movingRect; gameObject1,gameObject2,gameObject3,gameObject4


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,30,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(500,100,30,50);
  gameObject1.shapeColor = "darkgreen";
  gameObject1.debug = true;

  gameObject2 = createSprite(550,100,30,50);
  gameObject2.shapeColor = "darkgreen";
  gameObject2.debug = true;

  gameObject3 = createSprite(700,100,30,50);
  gameObject3.shapeColor = "darkgreen";
  gameObject3.debug = true;

  gameObject4 = createSprite(750,100,30,50);
  gameObject4.shapeColor = "darkgreen";
  gameObject4.debug = true;
}

function draw() {
  background(0,0,0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, gameObject1)){
   gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
 }else {
  gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
 }


  drawSprites();
}

function isTouching(object1, object2){
 if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
  } else{
      return false;
  }


}