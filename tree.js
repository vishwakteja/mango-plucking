class Tree {

    constructor(x, y, width, height ) {
        var options = {
            isStatic:true,
            friction:10000
        }
        this.body =  Matter.Bodies.rectangle(x, y, width,  height,  options);
        this.width = width;
        this.height = height;
        this.image=loadImage("plucking mangoes/tree.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
      imageMode(CENTER)
        fill("green");
        strokeWeight(4)
        stroke("green")
        image(this.image, 0, 0, this.width, this.height);
        pop();
}
}