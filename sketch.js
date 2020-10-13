var ground;
var car,carImg;
var coin,coinImg;
var rock,rockImg;
var coinsGroup,touchSound;
var sun,sunAnimation;
var cloudsGroup,cloudImage;
var score;

function preload(){
carImg = loadImage("car.png")
coinImg = loadImage("coin2.png")  
rockImg = loadImage("stone.png")
sunAnimation = loadAnimation("sun.png")
cloudImage = loadImage("cloud.png")
touchSound = loadSound("touch.wav")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
//  coinGrp = new Group();
  coinsGroup = new Group();
  cloudsGroup = new Group();
    
ground = createSprite(600,350,900,10);
ground.velocityX = -4;
ground.x = ground.width /2;
console.log(ground.x)

car = createSprite(190,325,50,50)
car.addImage(carImg)
car.scale= 0.07;

  
sun = createSprite(480,50,10,10);
sun.addAnimation("sun", sunAnimation);
sun.scale = 0.1;
  
  score = 0;
}

function draw(){  
  background("lightblue");
  textSize(15);
  fill("black")
  text("Score: "+ score,30,50);
   
    ground.velocityX = -(6 + 3*score/100);

    if (ground.x < 200){
      ground.x = ground.width/2;
    }
   if(coinsGroup.isTouching(car)){
     score = score + 1
     touchSound.play()
   }
   
  
    
  spawncoins();
  spawnClouds();  
 
  

  drawSprites();
  
 
} 

  
function spawncoins() {
  if(frameCount % 100 === 0) {
    var coin = createSprite(600,330,150,150);
    coin.setCollider('circle',0,0,45)
    coin.scale = 0.07;
    //coin.debug = true
    //var rand = Math.round(random(0,1));
    coin.addImage(coinImg);
    coin.velocityX = -(3 + 3*score/100);
    coin.lifetime = 300;
    coinsGroup.add(coin);
    
  }
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
  var cloud = createSprite(380,40,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
      cloud.lifetime = 300;
  
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}