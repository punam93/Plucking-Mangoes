
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Juno
var ground
var MangoTree
var stone
var catapult

var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11

function preload() {

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Juno = new Boy(280, 400)
	ground = new Ground(400, 500, 1000, 10)
	MangoTree = new Tree(500, 450,350, 450, PI / 4)
	stone = new Stone(200,280)
	catapult = new Chain(stone.body,{x:250, y:250})
	
	mango1 = new Mango(200,200)
	mango2 = new Mango(250,200)
	mango3 = new Mango(300,200)
	mango4 = new Mango(350,200)
	mango5 = new Mango(400,200)
	mango6 = new Mango(450,200)
	mango7 = new Mango(500,200)
	mango8 = new Mango(550,200)
	mango9 = new Mango(600,200)
	mango10 = new Mango(650,200)
	mango11 = new Mango(700,200)
	
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display()
	Juno.display()
	MangoTree.display()
	stone.display()
	catapult.display()
	
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()
	mango11.display()
	

	
	drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
