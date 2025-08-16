//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load images
    game.images.init()

    // Load animations
    game.animations.init()

    // Load instruments
    game.instruments.init()

    // Load songs
    game.songs.init()

    // Init sprites
    game.sprites.logoDilpleu.init()
    game.sprites.playButton.init()
    game.sprites.cat.init()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Check is playButton is clicked
    game.sprites.playButton.update()

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw sprites
    game.sprites.logoDilpleu.draw()
    game.sprites.playButton.draw()
    game.sprites.cat.draw()

}