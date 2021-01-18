class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   this.visibility=255;
  }
display()
{
  if(this.body.speed<6){
    super.display();
  }
  else{
    World.remove(world, this.body)
    push();
    this.visibility-=1
    tint(255, this.visibility)
   // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
}
/*display()
{
  super.display();
  console.log(this.body.speed)
}*/

};
