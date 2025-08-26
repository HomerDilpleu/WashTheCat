// Laod a level
game.loadLevel = function(levelID) {
    // Init cat
    game.sprites.cat.cleanLevel = 0
    // Init hydro
    game.sprites.hydro.reInit()
    game.sprites.hydro.cloneDeleteAll()
    // Check level id
    if (levelID >= game.levels.length) {levelID=0}
    // Update curLevel
    game.curLevel = levelID
    // Load level
    game.levels[game.curLevel]()
}

// Check level end
game.getLevelState = function () {
    // Level completed, 3*
    if (game.sprites.cat.cleanLevel >= 1) {return '***'}
    // Level finished, 2*
    else if (game.sprites.cat.x >= game.sprites.cat.maxX && game.sprites.cat.cleanLevel >= 0.9) {return '**'}
    // Level finished, 1*
    else if (game.sprites.cat.x >= game.sprites.cat.maxX && game.sprites.cat.cleanLevel >= 0.8) {return '*'}
    // Level failed
    else if (game.sprites.cat.x >= game.sprites.cat.maxX && game.sprites.cat.cleanLevel < 0.8) {return 'failed'}
    // In progress
    else {return 'running'}
}


// Level 0 - Introduction
game.levels.push(function() {
        game.sprites.cat.x = 400
        game.sprites.cat.maxX = 700
        game.sprites.hydro.newTank({X:600,altitude:450,tankWidth:100,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:600,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:600,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0'],isVisible:'0'})
        game.sprites.hydro.newValve({X:600,altitude:330,linkedTank:0,isOpen:0})
        game.sprites.hydro.newShower({X:600,altitude:180,triggerPipe:1})
        }
)

// Level 1
game.levels.push(function() {
        game.sprites.cat.x = 400
        game.sprites.cat.maxX = 750
        game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:280,curHeight:250})
        game.sprites.hydro.newTank({X:400,altitude:300,tankWidth:80,tankHeight:200,curHeight:100})
        game.sprites.hydro.newTank({X:400,altitude:480,tankWidth:80,tankHeight:70,curHeight:0})
        game.sprites.hydro.newTank({X:600,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
        game.sprites.hydro.newTank({X:640,altitude:400,tankWidth:40,tankHeight:150,curHeight:0})
        game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:0,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:300,altitude:250,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:510,altitude:463,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:640,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D1']})
        game.sprites.hydro.newPipe({obj:['T4','D2']})
        game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
        game.sprites.hydro.newValve({X:200,altitude:300,linkedTank:0,isOpen:0})
        game.sprites.hydro.newValve({X:640,altitude:300,linkedTank:4,isOpen:0})
        game.sprites.hydro.newShower({X:640,altitude:180,triggerPipe:5})
        game.sprites.hydro.newCombo([3,4])
        game.sprites.hydro.newLinkedTanks([1,2])
    }
)

// Level 2
game.levels.push(function() {
    game.sprites.cat.x = 400
    game.sprites.cat.maxX = 1100
    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:150,tankWidth:90,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:1000,altitude:500,tankWidth:300,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:600,altitude:200})
    game.sprites.hydro.newDistributor({X:1000,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:1000,altitude:180,triggerPipe:4})
    game.sprites.hydro.newValve({X:220,altitude:300,linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({X:550,altitude:440,linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({X:680,altitude:150,linkedTank:2,isOpen:0})
    game.sprites.hydro.newValve({X:1000,altitude:405,linkedTank:3,isOpen:0,trigger:{tank:2,height:255}})
    }
)


