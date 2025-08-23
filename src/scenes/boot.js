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
/*    game.sprites.hydro.newTank({X:200,altitude:400,tankWidth:110,tankHeight:300,curHeight:150})
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
*/    
    /////////////////////////////////////
    // Test avec un robinet lié à la hauteur d'un réservoir
    //////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:150,tankWidth:90,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:1000,altitude:500,tankWidth:300,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:300,altitude:200})
    game.sprites.hydro.newDistributor({X:1000,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:1000,altitude:205,triggerPipe:4})
    game.sprites.hydro.newValve({X:220,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:550,altitude:440,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:680,altitude:150,linkedTank:2,isOpen:0})
    game.sprites.hydro.newValve({X:1000,altitude:405,linkedTank:3,isOpen:0,trigger:{tank:2,height:255}})
*/

    /////////////////////////////////////
    // Test avec un transvaseur (linkedTanks)
    //////////////////////////////////////
/*    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:300,curHeight:300})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:500,tankWidth:80,tankHeight:50,curHeight:0})
    game.sprites.hydro.newTank({X:600,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:640,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:300,altitude:250})
    game.sprites.hydro.newDistributor({X:500,altitude:350})
    game.sprites.hydro.newDistributor({X:640,altitude:250})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D2']})
    game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
    game.sprites.hydro.newValve({X:640,altitude:300,linkedTank:4,isOpen:0})
    game.sprites.hydro.newShower({X:640,altitude:210,triggerPipe:5})
    game.sprites.hydro.newCombo([3,4])
    game.sprites.hydro.newLinkedTanks([1,2])
*/
    /////////////////////////////////////
    // NIVEAU 1
    //////////////////////////////////////
/*    game.sprites.cat.x = 400
    game.sprites.cat.speed = 0.5
    game.sprites.cat.cleanLevel = 0.05
    game.sprites.hydro.newTank({X:600,altitude:450,tankWidth:100,tankHeight:200,curHeight:180})
    game.sprites.hydro.newTank({X:600,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:600,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0'],isVisible:'0'})
    game.sprites.hydro.newValve({X:600,altitude:330,linkedTank:0,isOpen:0})
    game.sprites.hydro.newShower({X:600,altitude:180,triggerPipe:1})
*/
    /////////////////////////////////////
    // NIVEAU 2
    //////////////////////////////////////
    game.sprites.cat.x = 400
    game.sprites.cat.speed = 0.5
    game.sprites.cat.cleanLevel = 0.05
    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:300,curHeight:300})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:500,tankWidth:80,tankHeight:50,curHeight:0})
    game.sprites.hydro.newTank({X:600,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:640,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:300,altitude:250})
    game.sprites.hydro.newDistributor({X:500,altitude:450})
    game.sprites.hydro.newDistributor({X:640,altitude:250})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D2']})
    game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
    game.sprites.hydro.newValve({X:240,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:640,altitude:300,linkedTank:4,isOpen:0})
    game.sprites.hydro.newShower({X:640,altitude:210,triggerPipe:5})
    game.sprites.hydro.newCombo([3,4])
    game.sprites.hydro.newLinkedTanks([1,2])



}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Update sprites
    //game.sprites.playButton.update()
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
    let jaugeHeight = 20
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

    // Draw sprites
    //game.sprites.playButton.draw()
    game.sprites.cat.draw()
    game.sprites.hydro.cloneExecuteForEach('draw')


}