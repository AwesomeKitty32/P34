
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground, ground2;
var ball;

var wall, wall2, wall3;

var border, border2, border3;


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(400,389,1000,20,{isStatic:true});
  World.add(world,ground);

  ground2 = Bodies.rectangle(1150,389,100,20,{isStatic:true});
  World.add(world,ground2);

  wall = Bodies.rectangle(400,90,30,250,{isStatic:true});
  World.add(world,wall);

  wall2 = Bodies.rectangle(600,310,30,140, {isStatic: true});
  World.add(world,wall2)

  wall3 = Bodies.rectangle(800,90,30,250, {isStatic: true});
  World.add(world,wall3)

  border = Bodies.rectangle(900,450,30,140, {isStatic: true});
  World.add(world, border);

  border2 = Bodies.rectangle(1100,450,30,140, {isStatic: true});
  World.add(world, border2);

  border3 = Bodies.rectangle(1000,500,180,30, {isStatic: true});
  World.add(world, border3);


  var ball_options={
    isStatic:false,
		restitution:0.3,
		friction:30,
		density:3
  }

  ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

}


function draw(){

  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("grey");
  Engine.update(engine);

  //fill("yellow");
  stroke("red");
  //stroke-width(3);
  strokeWeight(3);
  rect(ground.position.x, ground.position.y, 1000,20);

  //fill("black");
  rect(ground2.position.x, ground2.position.y, 100,20);

  //fill("white");
  rect(wall.position.x, wall.position.y, 30,200);

  //fill("white");
  rect(wall2.position.x, wall2.position.y, 30,140);

  rect(wall3.position.x, wall3.position.y, 30,250);

  //fill("blue");
  rect(border.position.x, border.position.y, 30,140);

  rect(border2.position.x, border2.position.y, 30,140);

  rect(border3.position.x, border3.position.y, 180,30);


  ellipse(ball.position.x,ball.position.y, 20);
  
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 2;

  }

  if(Matter.SAT.collides(ball,wall).collided){
    swal({
      title: "Game Over",
      text: "try again",
      icon: "error",
      button: "continue"
    })

  }

  if(Matter.SAT.collides(ball,wall2).collided){
    swal({
      title: "Game Over",
      text: "try again",
      icon: "error",
      button: "continue"
    })

  }

  if(Matter.SAT.collides(ball,wall3).collided){
    swal({
      title: "Game Over",
      text: "try again",
      icon: "error",
      button: "continue"
    })

  }

  if(Matter.SAT.collides(ball,border3).collided){
    swal({
      title: "Game Completed",
      text: "You Won!",
      icon: "success",
      button: "continue"
    })

  }
}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  	
}
}






