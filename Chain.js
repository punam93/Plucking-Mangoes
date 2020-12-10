class Chain{

    constructor(bodyA, pointB){
    
        var options = { 
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.8
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    
    
    }
    
    }
