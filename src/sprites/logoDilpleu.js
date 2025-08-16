game.sprites.logoDilpleu.init = function() {
    
    // Init sprite properties
    this.width = game.images.logoDilpleu.width
    this.height = game.images.logoDilpleu.height
    this.x = 640
    this.y = 650
}

game.sprites.logoDilpleu.update = function () {

}

game.sprites.logoDilpleu.drawFunction = function (ctx) {
    game.images.logoDilpleu.draw(ctx)
}