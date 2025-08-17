//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load instruments
    game.instruments.init()

    // Load songs
    game.songs.init()

    // Init sprites
    game.sprites.playButton.init()
    game.sprites.cat.init()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    game.sprites.playButton.update()
    game.sprites.cat.update()

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw sprites
    game.sprites.playButton.draw()
    game.sprites.cat.draw()

}