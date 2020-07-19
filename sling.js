class Sling {
constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.07,length:10
        }
    this.pointB=pointB
    this.sling1Img = loadImage("sprites/sling1.png" )
    this.sling2Img = loadImage("sprites/sling2.png" )
    this.sling3Img = loadImage("sprites/sling3.png" )

    this.sling= Constraint.create(options);
    World.add(world,this.sling )
    }

fly(){
this.sling.bodyA=null;
}



display(){
image(this.sling1Img,200,70)
image(this.sling2Img,170,70)

if(this.sling.bodyA){
var pointA=this.sling.bodyA.position;
var pointB=this.pointB;
push()
strokeWeight(4);
line (pointA.x-25,pointA.y,pointB.x+20,pointB.y-3);
line (pointA.x-25,pointA.y,pointB.x,pointB.y);
image(this.sling3Img,pointA.x-30,pointA.y-10,15,30);

pop();
}



}

Attach(body){

this.sling.bodyA=body;



}

}
 

