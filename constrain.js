class Constrain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.constrain=Matter.Constraint.create(options);
        World.add(world,this.constrain);
    }
    display(){
        var pointA=this.constrain.bodyA.position;
        var pointB=this.constrain.bodyB.position;

        var anchorX=pointB.x+this.offsetX;
        var anchorY=pointB.y+this.offsetY;
        stroke("white");
        line(pointA.x,pointA.y,anchorX,anchorY);
    }
}