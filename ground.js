class Ground{

    constructor(x, y, width, height){
        var options={
            isStatic: true

        }
        this.body=Bodies.rectangle(x, y, width, height, options)
        this.width= width
        this.height= height
        World.add(world,this.body)
    }


    display(){
        var posis =this.body.position
        rectMode(CENTER)
        rect(posis.x, posis.y, this.width, this.height)
    }
}
