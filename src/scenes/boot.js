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
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
*/

    /////////////////////////////////////
    // Test de base avec 2 réservoirs qui s'équilibrent dont un vide initialement
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:110,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:400,altitude:250,tankWidth:60,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
*/
    /////////////////////////////////////
    // Test avec 3 réservoirs dont un qui n'a pas assez d'eau
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:70,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:600,altitude:200,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
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
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
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
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
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
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newCombo([1,2])
*/
    /////////////////////////////////////
    // Test avec un "combo" de réservoir VIDE au milieu
    /////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:100,tankHeight:300,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:250,tankWidth:50,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:450,altitude:250,tankWidth:50,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:800,altitude:100,tankWidth:80,tankHeight:300,curHeight:0})
    game.sprites.hydro.newDistributor({X:300,altitude:100})
    game.sprites.hydro.newDistributor({X:500,altitude:50})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newCombo([1,2])
*/

    /////////////////////////////////////
    // Test avec un "robinet" lié au réservoir qui alimente
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:50})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:50})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newValve({X:230,altitude:100,linkedTank:0,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec un "robinet" lié au réservoir alimenté
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:50})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:50})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newValve({X:375,altitude:225,linkedTank:1,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec 2 "robinets"
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:150,tankWidth:100,tankHeight:300,curHeight:50})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:300,curHeight:100})
    game.sprites.hydro.newDistributor({X:300,altitude:50})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newValve({X:230,altitude:100,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:375,altitude:225,linkedTank:1,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec 3 "robinets" --> Interessant pour ateindre le niveau le plus haut possible
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:100,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:150,tankWidth:90,tankHeight:200,curHeight:0})
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newValve({X:220,altitude:350,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:550,altitude:440,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:680,altitude:150,linkedTank:2,isOpen:0})
*/

    /////////////////////////////////////
    // Test avec 1 douche
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:100,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:300,altitude:-100,tankWidth:5000,tankHeight:10,curHeight:1})
    game.sprites.hydro.newDistributor({X:300,altitude:300})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0'],isVisible:'0'})
    game.sprites.hydro.newValve({X:220,altitude:350,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:550,altitude:440,linkedTank:1,isOpen:0})
    game.sprites.hydro.newShower({X:300,altitude:265,triggerPipe:2})
*/

    /////////////////////////////////////
    // Test avec tout 1
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:10,curHeight:1})
    game.sprites.hydro.newCombo([2,3])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:4})
    game.sprites.hydro.newValve({X:250,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:420,altitude:300,linkedTank:1,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec tout 2
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:10,curHeight:1})
    game.sprites.hydro.newCombo([2,3])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:4})
    game.sprites.hydro.newValve({X:250,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:420,altitude:300,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:620,altitude:300,linkedTank:2,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec tout 3
    ///////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newCombo([2,3])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200,isVisible:'0'})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:4})
    game.sprites.hydro.newValve({X:250,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:420,altitude:300,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:620,altitude:300,linkedTank:2,isOpen:0})
    game.sprites.hydro.newValve({X:820,altitude:300,linkedTank:3,isOpen:0})
*/
    /////////////////////////////////////
    // Test avec tout 4 - Combo avec 3 tanks
    ///////////////////////////////////////
    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:60,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:350,tankWidth:50,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newTank({X:850,altitude:350,tankWidth:50,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newTank({X:900,altitude:350,tankWidth:50,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newCombo([2,3,5])
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:850,altitude:200,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:1000,altitude:200,isVisible:'0'})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newPipe({obj:['T5','D2']})
    game.sprites.hydro.newPipe({obj:['T6','D2'],isVisible:'0'})
    game.sprites.hydro.newShower({X:850,altitude:165,triggerPipe:4})
    game.sprites.hydro.newShower({X:1000,altitude:165,triggerPipe:6})
    game.sprites.hydro.newValve({X:250,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:420,altitude:300,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:620,altitude:300,linkedTank:2,isOpen:0})
    game.sprites.hydro.newValve({X:820,altitude:300,linkedTank:3,isOpen:0})
    
    
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