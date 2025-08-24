//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load instruments
    game.instruments.init()

    // Load songs
    game.songs.init()

    // Create sprites
    //game.sprites.button.init()
    game.sprites.cat.create()
    game.sprites.hydro.create()
    game.loadLevel(0)

    }

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    //game.sprites.button.update()
    game.sprites.cat.update()
    game.sprites.hydro.update()
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw ground
    let ctx = mge.game.context
    ctx.fillStyle = "Black"
    ctx.fillRect(0,mge.game.height-50,mge.game.width,50)

    // Draw clean jauge
    // Jauge size
    let jaugeWidth = 300
    let jaugeHeight = 40
    // Draw empty jauge
    ctx.fillStyle = "Black"
    ctx.fillRect(10,20,jaugeWidth,jaugeHeight)
    // Draw jauge level
    let jaugeGradient = ctx.createLinearGradient(0, 0, jaugeWidth, 0)
    jaugeGradient.addColorStop(0, "red")
    jaugeGradient.addColorStop(0.5, "yellow")
    jaugeGradient.addColorStop(1, "green")
    ctx.fillStyle = jaugeGradient
    ctx.fillRect(12,22,jaugeWidth*game.sprites.cat.cleanLevel-4,jaugeHeight-4)

    // Draw title
    ctx.fillStyle = "orangered"
    ctx.font = "bold 72px serif"
    ctx.fillText("CAT WASH",500,100)


    // Draw sprites
    //game.sprites.button.draw()
    game.sprites.cat.draw()
    game.sprites.hydro.cloneExecuteForEach('draw')

}