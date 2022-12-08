
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dodoonto 
var player
var humanos
var database, gameState;
function preload()
{
	//loadAnimation(dodoonto_2,dodoonto_3);
	//loadImage(assets/terra.png);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os corpos aqui.
	dodoonto = createSprite(20,20,20,20);
	//desidir onde colocar sprite
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
	player.x = player.x-5
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   player.x = player.x+5
  }
  
 
}



