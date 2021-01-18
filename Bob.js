class Bob{
    constructor(x,y,radius){
    var options={
    isStatic:false,
    restitution:1.5,
    friction:0.7,
    density:1.5
    
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius= 50;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill("yellow");
     ellipseMode(CENTER)
     ellipse(pos.x,pos.y,this.radius,this.radius);
      }
    }