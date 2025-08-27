//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load instruments
    game.instruments.init()

    // Load songs
    game.songs.init()

    // Create background
    game.background.create()

    // Create sprites
    game.sprites.button.create()
    game.sprites.cat.create()
    game.sprites.hydro.create()
    game.loadLevel(0)

    }

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    game.sprites.button.cloneExecuteForEach('update')
    if (!game.isPaused) {
        game.sprites.cat.update()
        game.sprites.hydro.update()
    }
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw backgroun
    game.background.draw()

    // Draw hydraulic components
    game.sprites.hydro.drawMode = 'pipe'
    game.sprites.hydro.cloneExecuteForEach('draw')
    game.sprites.hydro.drawMode = 'other'
    game.sprites.hydro.cloneExecuteForEach('draw')
    game.sprites.hydro.drawMode = 'distributor'
    game.sprites.hydro.cloneExecuteForEach('draw')
 
    // Draw sprites
    game.sprites.button.cloneExecuteForEach('draw')
    game.sprites.cat.draw()


}