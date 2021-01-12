const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    ball=new Ball(0,0,50);
    redBox=new RedBox(510,100)
    greenBox=new GreenBox(550,100);
    blueBox=new BlueBox(530,100);
    yellowBox=new YellowBox(520,50);
    spring=new Projectile(ball.body,{x:200,y:200});
    ground=new PlatForm(400,390,800,20);
    groundHovering=new PlatForm(550,160,200,20);
    blueBox2=new BlueBox(540,50);
    greenBox2=new GreenBox(528,20);



}
function draw(){
    background(247,223,178);
    Engine.update(engine);
    yellowBox.display();
    ground.display();
    groundHovering.display();
    spring.display();
    greenBox.display();
    blueBox.display();
    redBox.display();
    blueBox2.display();
    greenBox2.display();
   
    


    ball.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    spring.release();
}