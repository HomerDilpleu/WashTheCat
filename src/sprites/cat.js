game.sprites.cat.init = function() {
    
    // Init sprite properties
    this.width = 180
    this.height = 100
    this.x = 200
    this.y = 200
    this.scaleX = 1.5
    this.scaleY = 1.5
    this.drawBoundaries = true

    // Create path
    //this.path = new Path2D("M10 10 h 80 v 80 h -80 Z")
    this.pathBody = new Path2D("M125 25 C98 50,80 20,70 42 C73 50,64 70,61 75 C82 38,80 58,87 75 C85 35,105 54,99 76 C112 38,105 50,116 75 C111 56,120 42,120 41 C129 38,128 34,124 29")
    this.pathTail = new Path2D("M70 42 C62 45,58 40,49 36")
}

game.sprites.cat.update = function () {

}

game.sprites.cat.drawFunction = function (ctx) {
    ctx.fillStyle = "black"
    ctx.fill(this.pathBody)
    ctx.strokeStyle = "black"
    ctx.stroke(this.pathTail)
 }