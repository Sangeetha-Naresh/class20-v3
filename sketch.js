
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball,ground, wedge, wall;
var angle=60;

function setup() 
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
   

  var options ={
     isStatic: true
   }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  wall = Bodies.rectangle(300, 150, 70, 10, options);
  World.add(world,wall);
  

  var wedge_ops={
    isStatic:true
  };
  wedge = Bodies.rectangle(100,200,100,20,wedge_ops);
  World.add(world,wedge);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);

  Engine.update(engine);
  
  Body.rotate(wedge,angle);

  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  fill("orange")
  rect(0,0,100,20);
  angle +=0.1;
  pop();
  
  

  fill("red")
  ellipse(ball.position.x,ball.position.y,20);

  fill("green")
  rect(ground.position.x,ground.position.y,400,20);
 

  fill("pink")
  rect(wall.position.x,wall.position.y,70,20);

  
  
}

