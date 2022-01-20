
var trex ,trex_running,ground;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,20,50)
 trex.addAnimation("run",trex_running)
 trex.scale=0.6

 ground=createSprite(200,180,400,20)
}


function draw(){
  background("black")
  if(keyDown("space")){
    trex.velocityY=-7    
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground);
  drawSprites();


}
