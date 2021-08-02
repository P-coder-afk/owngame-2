var mario;
var bee;
var bird;
var platformGroup, obstacleGroup;
var marioAnimation1, obstacleAnimation, wallAnimation, groundAnimation,beeAnimation,birdAnimation;
var b1,b2,b3,b4,b5;
var t1,t2,t3,t4;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
function preload()
{
  marioAnimation1=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
  beeAnimation=loadAnimation("bee1.png","bee2.png");
  obstacleAnimation=loadAnimation("covidvirus.png.png");
  groundAnimation=loadAnimation("road.png.jpg");  
  b1Animation=loadAnimation("building1.png.png");
  b2Animation=loadAnimation("building2.png.png");
  b3Animation=loadAnimation("building3.png.png");
  b4Animation=loadAnimation("building4.png.png");
  b5Animation=loadAnimation("building5.png.png");
  t1Animation=loadAnimation("tree1.png.png");
  t2Animation=loadAnimation("tree2.png.png");
  t3Animation=loadAnimation("tree3.png.png");
  t4Animation=loadAnimation("tree4.png.png");
  birdAnimation=loadAnimation("crow.png");
}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  
  
  //creating a player mario
  mario = new Player();
  
  //creating a group
  platformGroup= createGroup();
  obstacleGroup=createGroup();
  //adding platforms to stand for mario
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build
      //adding wall to the game
      if(i%3===0)
      {
      
      platformGroup.add(platform.spt);
      }
      //adding obstacles to the game
      if(i%4==0)
      {
      obstacle=new Obstacle(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
  }
  b1=createSprite(1103,423);
  b1.addAnimation("b1",b1Animation);
  b1.scale=1;

  b2=createSprite(2003,423);
  b2.addAnimation("b2",b2Animation);
  b2.scale=0.9;

  b3=createSprite(3003,500);
  b3.addAnimation("b3",b3Animation);
  b3.scale=0.9;

  b4=createSprite(4003,500);
  b4.addAnimation("b4",b4Animation);
  b4.scale=0.9;

  b5=createSprite(5003,500);
  b5.addAnimation("b5",b5Animation);
  b5.scale=0.9;

  t1=createSprite(1503,460);
  t1.addAnimation("t1",t1Animation);
  t1.scale=0.9;

  t2=createSprite(2503,420);
  t2.addAnimation("t2",t2Animation);
  t2.scale=0.9;

  t3=createSprite(3303,450);
  t3.addAnimation("t3",t3Animation);
  t3.scale=0.9;

  t4=createSprite(4403,480);
  t4.addAnimation("t4",t4Animation);
  t4.scale=0.9;

  t1=createSprite(5503,460);
  t1.addAnimation("t1",t1Animation);
  t1.scale=0.9;

  bird=createSprite(1510,460);
  bird.addAnimation("bird",birdAnimation);
  bird.scale=0.08;

  bird=createSprite(2510,460);
  bird.addAnimation("bird",birdAnimation);
  bird.scale=0.08;

  bird=createSprite(3310,460);
  bird.addAnimation("bird",birdAnimation);
  bird.scale=0.08;

  bird=createSprite(4410,460);
  bird.addAnimation("bird",birdAnimation);
  bird.scale=0.08;
}

function draw() {
  background('skyblue');
  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)//Play state
  {  
          //apply gravity to mario and set colliding with platforms
        mario.applyGravity();
        mario.spt.collide(platformGroup);
        
        //Calling various function to controll mario
        if (keyDown("left"))  
        { 
          mario.moveLeft();
          
        }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }
       if(frameCount % 200 === 0){
        bee=createSprite(7500,240);
        bee.addAnimation("bee",beeAnimation);
        bee.scale=0.4;
      bee.velocityX= -5;
       }
        
text(mouseX+""+","+""+mouseY,1400,240);
   }

  if(gameState==LOSE)//END State
  {   }

  if(gameState==WIN)//WIN state
  {  }
  

   drawSprites();
}



