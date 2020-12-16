class Sling{
    constructor(bodyA,pointB){

        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:280
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)    }
}