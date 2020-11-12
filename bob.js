class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            density:0.5,
            friction:0
        }
        this.body=Bodies.circle(x,y,35,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("orange");
        ellipseMode(CENTER);
        ellipse(0,0,70,70);
        pop();
    }
}