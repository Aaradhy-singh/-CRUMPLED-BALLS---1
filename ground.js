class Ground{

    constructor(x,y,w,h){
    var Option = {
        isStatic:false


    }

     this.x=x
     this.y=y
     this.w=w
     this.h=h
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,Option)
    
    World.add(world,this.body)
    }
    display(){
        
    var groundpos = this.body.position
    
    var angle = this.body.angle 
    push()
    
    translate (groundpos.x,groundpos.y)
    strokeWeight(4)
    fill(255,255,0)
    rectMode(CENTER);
    ellipse(0,0,this.w,this.h)
    pop()
    }
    
    
    
    
    
    
    
    
    
    }