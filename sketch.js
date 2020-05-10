
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,woodenBar,ground;

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

  var bar_options={
    isStatic: true
  }

woodenBar = Bodies.rectangle(250,100,200,20,bar_options);
World.add(world,woodenBar);

ball  = Bodies.circle(250,250,35,35);
World.add(world,ball);

var options = {
  bodyA : ball,
  bodyB : woodenBar,
  stiffness: 1.0,
  length : 200
}
var string = Constraint.create(options);
World.add(world,string);

}

function draw() {
  background(0); 
  Engine.update(engine);
  
 fill("brown");
 rectMode(CENTER);
 rect(woodenBar.position.x,woodenBar.position.y,);

fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);

strokeWeight(10);
stroke("white");
line(ball.position.x,ball.position.y,woodenBar.position.x,woodenBar.position.y);

if(keyDown("space")){
ball.position.x = mouseX;
ball.position.y = mouseY;
}
if(keyDown("enter")){
  ball.position.x = 250;
  ball.position.y = 250;
}
}








