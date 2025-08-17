// *************************************************
// *************************************************
// Sprite general initialisation
// *************************************************
// *************************************************
game.sprites.hydro.init = function() {
    // Constants shared by all clones
    this.drawBoundaries = true
    this.width = 100
    this.height = 100
    // Paths
    //this.pathTank = new Path2D("M10 10 L90 10 L90 90 L10 90")
    this.pathPipe = new Path2D("M10 10 L90 45 L10 90")
}

// *************************************************
// *************************************************
// Create hydro objets
// *************************************************
// *************************************************
game.sprites.hydro.newTank = function (c) {
    // Create tank object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'T'
    // Hydro properties
    o.tankWidth = c.tankWidth
    o.tankHeight = c.tankHeight
    o.curHeight = c.curHeight
    o.X = c.X
    o.Altitude = c.Altitude
    // Sprite properties
    o.width = c.tankWidth
    o.height = c.tankHeight
    o.x = c.X
    o.y = mge.game.height - c.Altitude - c.tankHeight / 2
    // Draw properties
    //o.colour = "blue"
    //o.path = this.pathTank
    return 0
}

game.sprites.hydro.newPipe = function (c) {
    // Create tank object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'P'
    // Hydro properties
    o.x = c.x
    o.y = c.y
    // Draw properties
    o.colour = "green"
    o.path = this.pathPipe
    return 0
}


// *************************************************
// *************************************************
// UPDATE
// *************************************************
// *************************************************
game.sprites.hydro.update = function () {
    if (this.type === 'T') {this.updateTank()}
    if (this.type === 'P') {this.updatePipe()}
}

game.sprites.hydro.updateTank = function () {
    if (this.curHeight > 1) {this.curHeight-=1}
}
game.sprites.hydro.updatePipe = function () {
}

// *************************************************
// *************************************************
// DRAW
// *************************************************
// *************************************************
game.sprites.hydro.drawFunction = function (ctx) {
    if (this.type === 'T') {this.drawTank(ctx)}
    if (this.type === 'P') {this.drawPipe(ctx)}
}

game.sprites.hydro.drawTank = function (ctx) {
    // Draw tank
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, this.tankWidth, this.tankHeight)
    // Draw water
    ctx.fillStyle = "blue"
    ctx.fillRect(5, this.tankHeight, this.tankWidth-10, -this.curHeight)

}

game.sprites.hydro.drawPipe = function (ctx) {
    ctx.fillStyle = this.colour
    ctx.fill(this.path)
}
