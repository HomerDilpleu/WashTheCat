//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load instruments
    game.instruments.init()

    // Load songs
    game.songs.init()

    // Init sprites
    //game.sprites.button.init()
    game.sprites.cat.init()
    game.sprites.hydro.init()

    // Create hydro objects
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
    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:280,curHeight:250})
    game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:400,altitude:480,tankWidth:80,tankHeight:70,curHeight:0})
    game.sprites.hydro.newTank({X:600,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:640,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:0,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:300,altitude:250,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:500,altitude:450,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:640,altitude:200,isVisible:'0'})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D2']})
    game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
    game.sprites.hydro.newValve({X:200,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:640,altitude:300,linkedTank:4,isOpen:0})
    game.sprites.hydro.newShower({X:640,altitude:190,triggerPipe:5})
    game.sprites.hydro.newCombo([3,4])
    game.sprites.hydro.newLinkedTanks([1,2])
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