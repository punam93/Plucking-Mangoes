class Tree extends BaseClass{
    constructor(x,y,width,height,angle){
      super(x,y,width,height,angle);
      this.image = loadImage("sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }