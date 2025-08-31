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
    game.sprites.decoration.create()
    game.sprites.restartContinue.create()
    // Init cat
    game.sprites.cat.x = 640
    game.sprites.cat.y = 300
}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {
    game.sprites.restartContinue.cloneExecuteForEach('update')
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {
    game.sprites.restartContinue.cloneExecuteForEach('draw')
    game.sprites.cat.draw()
}