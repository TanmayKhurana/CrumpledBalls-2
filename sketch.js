
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinl = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(1100, 475, 10000, 20)
	groundSprite.shapeColor = color("red")

	dustbinSprite = createSprite(1035, 331)
	dustbinSprite.addImage("run", dustbinl)
	dustbinSprite.scale = 0.8
	
	//Create the Bodies Here.

	ground = Bodies.rectangle(100, 430, 10000, 20, {isStatic:true})
	World.add(world, ground)

	side1 = new Dustbin(949, 409, 20, 150)
	side2 = new Dustbin(1121, 409, 20, 150)
	side3 = new Dustbin(1035, 454, 190, 20)

	ball = new Paper(90, 350, 2)

	Engine.run(engine);

	
 
}	


function draw() {
  rectMode(CENTER);
  background("yellow");

  side1.display()
  side2.display()
  side3.display()

  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{
			x:0.845,
			y:-0.845
		}
		)
	}
}