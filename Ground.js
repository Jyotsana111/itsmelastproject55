class Ground{

    constructor(){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(766,680,1550,10,options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("green");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1550,20);
    }
}