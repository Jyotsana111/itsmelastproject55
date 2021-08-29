class Block{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
        
           
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y,50, 50, options);
        this.width = 50;
        this.height = 50;
    
        World.add(world, this.body);
      }
      display(){

        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
            push();
            translate(pos.x,pos.y);
            rotate(angle)
            rectMode(CENTER)
            fill(250)
            rect(0,0,this.width,this.height)
            pop();
        }else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity-5;
          pop();
        }
      }
}