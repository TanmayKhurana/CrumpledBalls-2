
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

	dustbinSprite = createSprite(1035, 316)
	dustbinSprite.addImage("run", dustbinl)
	dustbinSprite.scale = 0.9
	
	//Create the Bodies Here.

	ground = Bodies.rectangle(100, 448, 10000, 20, {isStatic:true})
	World.add(world, ground)

	side1 = new Dustbin(949, 409, 20, 150)
	side2 = new Dustbin(1121, 370, 20, 200)


	ball = new Paper(90, 350, 2)

	Engine.run(engine);

	
 
}	


function draw() {
  rectMode(CENTER);
  background("yellow");

  side1.display()
  side2.display()

  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{
			x:0.86,
			y:-0.86
		}
		)
	}
}