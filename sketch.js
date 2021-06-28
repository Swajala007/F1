var bow , arrow,  scene;
var bowImage, arrowImage,appleImage, mangoImage,orangeImage ,strawBImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("backG.jpg");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  appleImage = loadImage("apple1.jpg");
  mangoImage = loadImage("mango1.jpg");
  orangeImage = loadImage("orange1.jpg");
  strawBImage = loadImage("strawB.jpg");
  
}



function setup() {
  createCanvas(800, 200);
  
  
  //creating background
  scene = createSprite(200,200,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 3.5;

  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
  
  appleG = new Group();
  mangoG = new Group();
  orangeG = new Group();
  strawBG = new Group();
  arrowGroup = new Group();
  
  
  
}

function draw() {
 background(0);
  
  
  
// moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_fruit = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      apple();
    } else if (select_fruit == 2) {
      mango();
    } else if (select_fruit == 3) {
     orange();
    } else if (select_fruit == 4) {
      strawB();
    }
  }  
    
  
  
  
  drawSprites();
    text("Score: "+ score, 300,50);
  
  
  
  if(arrowGroup.isTouching(appleG)){
    appleG.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
     
  }else if(arrowGroup.isTouching(mangoG)){
    mangoG.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }else if(arrowGroup.isTouching(orangeG)){
    orangeG.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }else if(arrowGroup.isTouching(strawBG)){
    strawBG.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }
  
  

  
  
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -15;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   
   arrowGroup.add(arrow);
}

function apple() {
  var apple = createSprite(0,Math.round(random(20, 370)), 10, 10);
  apple.addImage(appleImage);
  apple.velocityX = 10;
  apple.lifetime = 150;
  apple.scale = 0.3;
  
  appleG.add(apple);
  
}

function mango() {
  var mango = createSprite(0,Math.round(random(20, 370)), 10, 10);
  mango.addImage(mangoImage);
  mango.velocityX = 10;
  mango.lifetime = 150;
  mango.scale = 0.4;
  
  mangoG.add(mango);
}

function orange() {
  var orange = createSprite(0,Math.round(random(20, 370)), 10, 10);
  orange.addImage(orangeImage);
  orange.velocityX = 10;
  orange.lifetime = 150;
  orange.scale = 0.3;
  
  orangeG.add(orange);
}

function strawB() {
  var straw = createSprite(0,Math.round(random(20, 370)), 10, 10);
  straw.addImage(strawBImage);
  straw.velocityX = 10;
  straw.lifetime = 150;
  straw.scale = 0.4;
  
  strawBG.add(straw);
}
