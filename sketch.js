const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerB,playerB;
var player,computerplayer;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerB = new ComputerBase(500,500,250,250)
  World.add(world,computerB);

playerB = new PlayerBase(800,500,250,250);
World.add(world,playerB);
 
player = new Player(300,490,100,150);
World.add(world,player);

computerplayer = new ComputerPlayer(250,450,100,150);
World.add(world,computerplayer);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerB.show();

   playerB.show();
   //display Player and computerplayer
player.show();
computerplayer.show();
}
