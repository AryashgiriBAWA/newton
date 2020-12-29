class Wire{

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:500
        }

        this.pointB = pointB;
        this.Wire = Constraint.create(options);
        this.color = color(random(200,255),random(200,255),random(200,255));
        World.add(world,this.sling);

    }
        
 









}
  
