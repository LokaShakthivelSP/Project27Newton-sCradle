class Roof{
    constructor(y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(width/2,y,500,40,options);
        World.add(world,this.body);
        this.y=y;
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,500,40); 
    }
}