class Paper {

    constructor(x, y, r) {
        var options={
            isStatic:false,
            restitution:0.3, 
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
    this.image = loadImage("paper1rltm.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, 0);
        pop();
      }
}