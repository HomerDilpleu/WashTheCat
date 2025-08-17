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
    game.sprites.hydro.init()

    // Create hydro objects
    game.sprites.hydro.new({
        type: 'T',
        x: 200,
        y: 200
    })
    game.sprites.hydro.new({
        type: 'P',
        x: 300,
        y: 300
    })

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    game.sprites.playButton.update()
    game.sprites.cat.update()
    game.sprites.hydro.cloneExecuteForEach('update')

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw sprites
    game.sprites.playButton.draw()
    game.sprites.cat.draw()
    game.sprites.hydro.cloneExecuteForEach('draw')


}