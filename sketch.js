const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(100);

	bob1=new Bob(260,400);
	bob2=new Bob(330,400);	
	bob3=new Bob(400,400);
	bob4=new Bob(470,400);
	bob5=new Bob(540,400);

	rope1=new Constrain(bob1.body,roof.body,-140,0);
	rope2=new Constrain(bob2.body,roof.body,-70,0);
	rope3=new Constrain(bob3.body,roof.body,0,0);
	rope4=new Constrain(bob4.body,roof.body,70,0);
	rope5=new Constrain(bob5.body,roof.body,140,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();

  roof.display();  

  drawSprites();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	 Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  	}
}


