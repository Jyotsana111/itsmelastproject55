const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var bg1;
var bg;

function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("maxresdefault.jpg");
  bg1 = loadImage("wp3597523.jpg")
}
function setup() {
  createCanvas(1530,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(1136,680,1550,10);
  stand1 = new Stand(735,620,390,10);
  stand2 = new Stand(1136,320,320,10);
 
  //level one
 //bottom row bottom ground
 block1 = new Block(735,590)
 block2 = new Block(685,590)
 block3 = new Block(785,590)
 block4 = new Block(835,590)
 block5 = new Block(885,590)
 block6 = new Block(635,590)
 block7 = new Block(585,590)
//6 floor bottom ground
 bloack1 = new Block(705,540)
 bloack5 = new Block(855,540)
 bloack2 = new Block(755,540)
 bloack3 = new Block(805,540)
 bloack4 = new Block(655,540)
 bloack6 = new Block(605,540)
//5 floor bottom ground
 bloeck1 = new Block(835,490)
 bloeck2 = new Block(785,490)
 bloeck3 = new Block(685,490)
 bloeck4 = new Block(735,490)
 bloeck5 = new Block(635,490)
//4 floor bottom ground
 blck1 = new Block(755,440)
 blck2 = new Block(655,440)
 blck3 = new Block(705,440)
 blck4 = new Block(805,440)
//3 floor bottom ground
 blk1 = new Block(685,390)
 blk2 = new Block(735,390)
 blk3 = new Block(785,390)
//2 floor bottom ground
 bt1 = new Block(755,340)
 bt2 = new Block(705,340)
//1 floor bottom ground
 b1 = new Block(735,290)

//bottom floor top ground
tbloeck1 = new Block(1236,290)
tbloeck2 = new Block(1185,290)
tbloeck3 = new Block(1085,290)
tbloeck4 = new Block(1135,290)
tbloeck5 = new Block(1035,290)

//4 floor top ground
tblck1 = new Block(1060,240)
tblck2 = new Block(1110,240)
tblck3 = new Block(1160,240)
tblck4 = new Block(1210,240)

tblk1 = new Block(1185,190)
tblk2 = new Block(1085,190)
tblk3 = new Block(1135,190)

tbt1 = new Block(1110,140)
tbt2 = new Block(1160,140)

tb1 = new Block(1135,90)

  //ball holder with slings
 
  ball = Bodies.circle(50,350,20);
  World.add(world,ball)
 
  slingShot = new Slingshot(this.ball,{x:100,y:350});

}
function draw() {
  background(bg); 
 
 
  //Engine.update(engine);
  textSize(20);
  fill("black");
  text("Drag the hexagon to relese it",600,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
 
  

    fill("violet")
    b1.display();
    fill("indigo")
    bt1.display();
    bt2.display();
    fill("blue")
    blk1.display();
    blk2.display();
    blk3.display();
    fill("green")
    blck1.display();
    blck2.display();
    blck3.display();
    blck4.display();
    fill("yellow")
    bloeck1.display();
    bloeck2.display();
    bloeck3.display();
    bloeck4.display();
    bloeck5.display();
    fill("red")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("orange")
    bloack1.display();
    bloack2.display();
    bloack3.display();
    bloack4.display();
    bloack5.display();
    bloack6.display();
    fill("violet")
    tbloeck1.display();
    tbloeck2.display();
    tbloeck3.display();
    tbloeck4.display();
    tbloeck5.display();
    fill("indigo")
    tblck1.display();
    tblck2.display();
    tblck3.display();
    tblck4.display();
    fill("blue")
    tblk1.display();
    tblk2.display();
    tblk3.display();
    fill("green")
    tbt1.display();
    tbt2.display();
    fill("orange")
    tb1.display();
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    slingShot.display();


  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = bg;
  }
  else{
      bg = bg1;
  }

}