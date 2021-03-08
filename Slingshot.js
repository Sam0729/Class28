class Slingshot{
    constructor(body1, coordinates){
        var options = {
            bodyA: body1,
            pointB: coordinates,
            stiffness: 0.04,
            length: 13
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling);
    }
       
    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
      
        }
        
    }

    fly(){
      this.sling.bodyA = null;  
    }
}