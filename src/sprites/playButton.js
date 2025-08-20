game.sprites.playButton.init = function() {
    
    // Init sprite properties
    this.width = 100
    this.height = 100
    this.x = 900
    this.y = 100

    // Path
    this.path = new Path2D("M10 10 L90 45 L10 90")

}

game.sprites.playButton.update = function () {
    // If clicked, then change scene
    if (this.isClicked) {
        mge.game.changeScene(game.scenes.main)
    }
}

game.sprites.playButton.drawFunction = function (ctx) {
    ctx.fillStyle = "red"
    ctx.fill(this.path)
    
}