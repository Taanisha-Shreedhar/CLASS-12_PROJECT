var garden, gardenImg, rabbit , rabbitImg, apple, appleImg;
var orangeLeaf, orangeLeafImg, selectSprites,  edges ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
    
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  selectSprites = Math.round(random(1, 2));

  if(frameCount % 80 == 0){
    if(selectSprites == 1){
     createApples();
    }
    else{
      createLeaves();
    }
  }
  drawSprites();
}

function createApples() {
  apple = createSprite(random(20, 380), 20, 10, 10);
  apple.addImage("fruit", appleImg);
  apple.velocityY = 2;
  apple.lifetime = 200;
  apple.scale = 0.07;
}

function createLeaves() {
  orangeLeaf = createSprite(random(20, 380), 20, 10, 10);
  orangeLeaf.addImage("orange", orangeLeafImg);
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 200;
  orangeLeaf.scale = 0.09;
}

