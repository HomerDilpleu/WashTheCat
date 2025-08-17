game.sprites.hydro.init = function() {
    
    // Properties shared by all clones
    this.drawBoundaries = true
    
    // Paths
    this.pathTank = new Path2D("M10 10 L90 10 L90 90 L10 90")
    this.pathPipe = new Path2D("M10 10 L90 45 L10 90")

}

// Create an hydro object given a configuration
game.sprites.hydro.new = function (c) {
    // Create the object
    let o = game.sprites.hydro.cloneCreate()
    // Get specific object properties
    o.type = c.type
    o.x = c.x
    o.y = c.y
    // Get properties depending on type
    // Tank
    if (c.type === 'T') {
        o.width = 100
        o.height = 100
        o.colour = "blue"
        o.path = this.pathTank
    }
    // Pipe
    if (c.type === 'P') {
        o.width = 100
        o.height = 100
        o.colour = "green"
        o.path = this.pathPipe
    }
    return o
}


game.sprites.hydro.update = function () {
}

game.sprites.hydro.drawFunction = function (ctx) {
    ctx.fillStyle = this.colour
    ctx.fill(this.path)
}