const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
function preload()
{
    polygon_img=loadImage("polygon.png");
}

function setup()
{
    createCanvas(1200, 600)
    engine=Engine.create();
    world=engine.world;

    //polygon
    polygon=Bodies.circle(50, 200, 20,{density:1.0});
    World.add(world, polygon);
    //slingshot
    slingshot=new Slingshot(this.polygon, {x:100, y:200})
    //create ground
    ground=new Ground(width/2, height-10, width, 30)
    //stand 1:row1
    stand1=new Ground(340,400,280,20)
    block1=new Box(250, 300, 30, 50)
    block2=new Box(280, 300, 30, 50)
    block3=new Box(310, 300, 30, 50)
    block4=new Box(340, 300, 30, 50)
    block5=new Box(370, 300, 30, 50)
    block6=new Box(400, 300, 30, 50)
    block7=new Box(430, 300, 30, 50)
    //row2
    block8=new Box(280, 250, 30, 50)
    block9=new Box(310, 250, 30, 50)
    block10=new Box(340, 250, 30, 50)
    block11=new Box(370, 250, 30, 50)
    block12=new Box(400, 250, 30, 50)
    //row3
    block13=new Box(310, 200, 30, 50)
    block14=new Box(340, 200, 30, 50)
    block15=new Box(370, 200, 30, 50)
    //row4
    block16=new Box(340, 150, 30, 50)

    //stand 2:row1
    stand2=new Ground(800,300,280,20)
    blocka1=new Box(710, 280, 30, 50)
    blocka2=new Box(740, 280, 30, 50)
    blocka3=new Box(770, 280, 30, 50)
    blocka4=new Box(800, 280, 30, 50)
    blocka5=new Box(830, 280, 30, 50)
    blocka6=new Box(860, 280, 30, 50)
    blocka7=new Box(890, 280, 30, 50)
    //row2
    blocka8=new Box(740, 230, 30, 50)
    blocka9=new Box(770, 230, 30, 50)
    blocka10=new Box(800, 230, 30, 50)
    blocka11=new Box(830, 230, 30, 50)
    blocka12=new Box(860, 230, 30, 50)
    //row3
    blocka13=new Box(770, 180, 30, 50)
    blocka14=new Box(800, 180, 30, 50)
    blocka15=new Box(830, 180, 30, 50)
    //row4
    blocka16=new Box(800, 130, 30, 50)

    console.log(polygon)
}
function draw()
{
    background(0);
    fill("yellow")
    textSize(20)
    text("Drag the Hexagonal Stone and release it, launch it towards the blocks", 250, 40)
    text("Press Space to attach the polygon back", 380, 70)
    Engine.update(engine);
    //-----------
    imageMode(CENTER);
    image(polygon_img, polygon.position.x,polygon.position.y, 40,40)
    //------------
    slingshot.display();
    //-------------
    ground.display();
    //---------------------------
    stand1.display();
    fill("skyblue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("yellow")
    block13.display();
    block14.display();
    block15.display();
    fill("blue");
    block16.display();
//--------------------------------------------------
    stand2.display();
    fill("skyblue")
    blocka1.display();
    blocka2.display();
    blocka3.display();
    blocka4.display();
    blocka5.display();
    blocka6.display();
    blocka7.display();
    fill("pink")
    blocka8.display();
    blocka9.display();
    blocka10.display();
    blocka11.display();
    blocka12.display();
    fill("yellow")
    blocka13.display();
    blocka14.display();
    blocka15.display();
    fill("blue");
    blocka16.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY})
}
function mouseReleased()
{
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(this.polygon)
    }
}