class Mango{

    constructor(x,y){
    
        var options = {
        
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        
        this.body = Bodies.circle(x, y, 40, options)
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body)
        
        
        
        }
        
        display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(RADIUS)
        image(this.image,0,0,40,40)
        pop();
        }
        
        }












