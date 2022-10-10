
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var circle1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(670,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	circle1 = Matter.Bodies.circle(200,200,10);
	World.add(world, circle1);

	ground = new Ground(335,390,670,10);
	leftSide = new Ground(424,326,20,120);
	rightSide = new Ground(590,326,20,120);


	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}



