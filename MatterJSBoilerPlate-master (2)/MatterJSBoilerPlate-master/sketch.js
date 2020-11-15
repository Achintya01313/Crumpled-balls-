
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledpaper ;
var dustbin ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1= new Dustbin;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	ground = createSprite(350,650,900,20)



  
  drawSprites();
 
}



