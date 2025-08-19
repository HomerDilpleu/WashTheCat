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
    /////////////////////////////////////
    // Test de base avec 2 réservoirs qui s'équilibrent
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:110,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:200,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
*/

    /////////////////////////////////////
    // Test de base avec 2 réservoirs qui s'équilibrent dont un vide initialement
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:110,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:400,altitude:250,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
*/

    /////////////////////////////////////
    // Test avec 3 réservoirs dont un qui n'a pas assez d'eau
    /////////////////////////////////////
    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:70,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:200,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
    game.sprites.hydro.newPipe(['T2','D0'])

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    game.sprites.playButton.update()
    game.sprites.cat.update()
    game.sprites.hydro.calcTanksPressure()
    game.sprites.hydro.calcDistributorsPressure()
    game.sprites.hydro.calcPipesFlow()
    game.sprites.hydro.updateTankCurHeight()

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