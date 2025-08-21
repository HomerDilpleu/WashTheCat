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
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:70,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:200,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
    game.sprites.hydro.newPipe(['T2','D0'])
*/

    /////////////////////////////////////
    // Test avec un "combo" de réservoir en haut
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:450,altitude:400,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:200,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newDistributor({X:400,altitude:150})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
    game.sprites.hydro.newPipe(['T2','D1'])
    game.sprites.hydro.newPipe(['T3','D1'])
    game.sprites.hydro.newCombo([1,2])
*/

    /////////////////////////////////////
    // Test avec un "combo" de réservoir en bas
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:450,tankWidth:100,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:200,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:450,altitude:200,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:300,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newDistributor({X:500,altitude:150})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
    game.sprites.hydro.newPipe(['T2','D1'])
    game.sprites.hydro.newPipe(['T3','D1'])
    game.sprites.hydro.newCombo([1,2])
*/
    /////////////////////////////////////
    // Test avec un "combo" de réservoir au milieu
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:200,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:450,altitude:200,tankWidth:50,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:100,tankWidth:80,tankHeight:300,curHeight:0})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newDistributor({X:500,altitude:50})
    game.sprites.hydro.newPipe(['T0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
    game.sprites.hydro.newPipe(['T2','D1'])
    game.sprites.hydro.newPipe(['T3','D1'])
    game.sprites.hydro.newCombo([1,2])
*/
    /////////////////////////////////////
    // Test avec un "robinet" lié au réservoir qui alimente
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:450,tankWidth:110,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:100,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:80})
    game.sprites.hydro.newValve({X:200,altitude:250,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
*/
    /////////////////////////////////////
    // Test avec un "robinet" lié au réservoir alimenté
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:200,tankWidth:110,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:80})
    game.sprites.hydro.newValve({X:200,altitude:150,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['T1','D0'])
*/

    /////////////////////////////////////
    // Test avec 2 "robinets" 
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:300,tankWidth:110,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:200,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:80})
    game.sprites.hydro.newValve({X:200,altitude:250,isOpen:0})
    game.sprites.hydro.newValve({X:450,altitude:200,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['T1','V1'])
    game.sprites.hydro.newPipe(['V1','D0'])
*/

    /////////////////////////////////////
    // Test avec 3 "robinets" --> Interessant pour ateindre le niveau le plus haut possible
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:150,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newValve({X:200,altitude:350,isOpen:0})
    game.sprites.hydro.newValve({X:450,altitude:300,isOpen:0})
    game.sprites.hydro.newValve({X:600,altitude:200,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['T1','V1'])
    game.sprites.hydro.newPipe(['T2','V2'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['V1','D0'])
    game.sprites.hydro.newPipe(['V2','D0'])
*/

    /////////////////////////////////////
    // Test avec 1 douche
    ///////////////////////////////////////
 /*   game.sprites.hydro.newTank({X:200,altitude:500,tankWidth:110,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:400,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:300,altitude:-100,tankWidth:200,tankHeight:100,curHeight:0})
    game.sprites.hydro.newDistributor({X:300,altitude:280})
    game.sprites.hydro.newValve({X:200,altitude:450,isOpen:0})
    game.sprites.hydro.newValve({X:450,altitude:400,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['T1','V1'])
    game.sprites.hydro.newPipe(['V1','D0'])
    game.sprites.hydro.newPipe(['T2','D0','Hide'])
    game.sprites.hydro.newShower({X:300,altitude:245,triggerPipe:4})
*/

    /////////////////////////////////////
    // Test avec tout 1
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-600,tankWidth:200,tankHeight:700,curHeight:0})
    game.sprites.hydro.newCombo([2,3])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200})
    game.sprites.hydro.newValve({X:200,altitude:350,isOpen:0})
    game.sprites.hydro.newValve({X:450,altitude:300,isOpen:0})
    game.sprites.hydro.newValve({X:600,altitude:200,isOpen:0})
    game.sprites.hydro.newValve({X:850,altitude:300,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['T1','V1'])
    game.sprites.hydro.newPipe(['T2','V2'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['V1','D0'])
    game.sprites.hydro.newPipe(['V2','D0'])
    game.sprites.hydro.newPipe(['T3','V3'])
    game.sprites.hydro.newPipe(['V3','D1'])
    game.sprites.hydro.newPipe(['T4','D1','Hide'])
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:8})
*/
    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-600,tankWidth:200,tankHeight:700,curHeight:0})
    game.sprites.hydro.newCombo([2,3])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200})
    game.sprites.hydro.newValve({X:200,altitude:350,isOpen:0})
    game.sprites.hydro.newValve({X:600,altitude:400,isOpen:0})
    game.sprites.hydro.newValve({X:850,altitude:300,isOpen:0})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['T1','V1'])
    game.sprites.hydro.newPipe(['T2','D0'])
    game.sprites.hydro.newPipe(['T3','V2'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['V1','D0'])
    game.sprites.hydro.newPipe(['V2','D1'])
    game.sprites.hydro.newPipe(['T4','D1','Hide'])
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:7})
   

    /////////////////////////////////////
    // Test avec tout 2
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:500,tankWidth:100,tankHeight:200,curHeight:150})
    game.sprites.hydro.newTank({X:200,altitude:-300,tankWidth:100,tankHeight:150,curHeight:10})
    game.sprites.hydro.newValve({X:200,altitude:400,isOpen:0})
    game.sprites.hydro.newDistributor({X:200,altitude:200})
    game.sprites.hydro.newPipe(['T0','V0'])
    game.sprites.hydro.newPipe(['V0','D0'])
    game.sprites.hydro.newPipe(['T1','D0','Hide'])
    game.sprites.hydro.newTank({X:400,altitude:500,tankWidth:100,tankHeight:200,curHeight:150})
    game.sprites.hydro.newValve({X:400,altitude:400,isOpen:0})
    game.sprites.hydro.newPipe(['T2','V1'])
    game.sprites.hydro.newPipe(['V1','D0'])
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:50,tankHeight:200,curHeight:150})
    game.sprites.hydro.newValve({X:600,altitude:400,isOpen:0})
    game.sprites.hydro.newPipe(['T3','V2'])
    game.sprites.hydro.newPipe(['V2','D0'])
    game.sprites.hydro.newTank({X:650,altitude:500,tankWidth:50,tankHeight:200,curHeight:150})
    game.sprites.hydro.newValve({X:650,altitude:400,isOpen:0})
    game.sprites.hydro.newDistributor({X:650,altitude:200})
    game.sprites.hydro.newTank({X:700,altitude:-300,tankWidth:100,tankHeight:150,curHeight:10})
    game.sprites.hydro.newPipe(['T4','V3'])
    game.sprites.hydro.newPipe(['V3','D1'])
    game.sprites.hydro.newPipe(['T5','D1','Hide'])
    game.sprites.hydro.newCombo([3,4])
    game.sprites.hydro.newShower({X:200,altitude:165,triggerPipe:2})
    game.sprites.hydro.newShower({X:650,altitude:165,triggerPipe:9})
*/   
}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    game.sprites.playButton.update()
    game.sprites.cat.update()
    // hydro
    game.sprites.hydro.calcTanksPressure()
    game.sprites.hydro.updateValves()
    game.sprites.hydro.calcDistributorsPressure()
    game.sprites.hydro.calcPipesFlow()
    game.sprites.hydro.updateTankCurHeight()
    game.sprites.hydro.updateComboCurHeight()
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