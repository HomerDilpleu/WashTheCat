game.sprites.button.create = function() {
    //this.drawBoundaries = true

    // Restart Button
    p = game.sprites.button.cloneCreate()
    p.id = 'restart'
    p.width = 50
    p.height = 50
    p.x = 200
    p.y = 600
    p.svg = new Path2D('M10 10 A20 20 0 1 0 40 10 L30 20 M40 10 L50 20 M0 0')

    // Next level Button
    p = game.sprites.button.cloneCreate()
    p.id = 'next'
    p.width = 50
    p.height = 50
    p.x = 275
    p.y = 600
    p.svg = new Path2D('M10 10 L40 25 L10 40 L10 10')

}

game.sprites.button.update = function () {
    // Restart level
    if (this.id == 'restart' && this.isClicked) {game.loadLevel(game.curLevel)}
    // Next level
    if (this.id == 'next' && this.isClicked) {game.loadLevel(game.curLevel+1)}
    
    
    
    // If clicked, then change scene
    //if (this.isClicked) {
    //    mge.game.changeScene(game.scenes.main)
    //}
}

game.sprites.button.drawFunction = function (ctx) {
    // Style
    ctx.fillStyle = "grey"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 4
    ctx.lineCap = "round"
    if (this.isClicked) {
        ctx.fillStyle = "white"
    }
    // Draw button box
    ctx.fillRect(0,0,50,50)
    ctx.strokeRect(0,0,50,50)
    // Draw inside
    ctx.stroke(this.svg)
//    if (this.id == 'restart') {
//        ctx.stroke(this.svg)
//    }
}