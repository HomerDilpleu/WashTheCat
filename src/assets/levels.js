// Laod a level
game.loadLevel = function(levelID) {
    // Generate background
    if (game.curLevel != levelID) {game.background.generate()}
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

// Level 0 - Introduction
game.levels.push(function() {
        game.sprites.cat.x = 500
        game.sprites.cat.maxX = 740
        game.sprites.hydro.newTank({X:640,altitude:350,tankWidth:100,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:640,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:640,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0'],isVisible:'0'})
        game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
        game.sprites.hydro.newShower({X:640,altitude:180,triggerPipe:1})
        }
)

// Level 1 - Consolidation with 2 tanks
//   T0         T1
//   D0         D1
//   T2T3     T4T5
//     D2     D3
//         T6
game.levels.push(function() {
        game.sprites.cat.x = 450
        game.sprites.cat.maxX = 820
        game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:100,tankHeight:75,curHeight:25})
        game.sprites.hydro.newTank({X:850,altitude:400,tankWidth:100,tankHeight:75,curHeight:25})
        game.sprites.hydro.newTank({X:520,altitude:270,tankWidth:50,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:570,altitude:270,tankWidth:50,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:710,altitude:270,tankWidth:50,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:760,altitude:270,tankWidth:50,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:540,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newCombo([2,3])
        game.sprites.hydro.newCombo([4,5])
        game.sprites.hydro.newDistributor({X:500,altitude:285,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:780,altitude:285,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:570,altitude:200})
        game.sprites.hydro.newDistributor({X:710,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D1']})
        game.sprites.hydro.newPipe({obj:['T5','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D2']})
        game.sprites.hydro.newPipe({obj:['T6','D2'],isVisible:'0'})
        game.sprites.hydro.newPipe({obj:['T4','D3']})
        game.sprites.hydro.newPipe({obj:['T6','D3'],isVisible:'0'})
        game.sprites.hydro.newValve({linkedTank:3,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:4,isOpen:0})
        game.sprites.hydro.newShower({X:570,altitude:180,triggerPipe:5})
        game.sprites.hydro.newShower({X:710,altitude:180,triggerPipe:7})
        }
)


// Level 2 - Add triggered valvle concept
//   T0         T1
//   D0         D1
//   T2T3     T4T5
//     D2     D3
//        T6T7  -->  T8
//                   D4
//                   T9
game.levels.push(function() {
        game.sprites.cat.x = 600
        game.sprites.cat.maxX = 995
        game.sprites.hydro.newTank({X:330,altitude:470,tankWidth:80,tankHeight:100,curHeight:50})
        game.sprites.hydro.newTank({X:780,altitude:470,tankWidth:80,tankHeight:100,curHeight:50})
        game.sprites.hydro.newTank({X:430,altitude:370,tankWidth:40,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:470,altitude:370,tankWidth:40,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:640,altitude:370,tankWidth:40,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:680,altitude:370,tankWidth:40,tankHeight:100,curHeight:0})
        game.sprites.hydro.newTank({X:530,altitude:170,tankWidth:50,tankHeight:155,curHeight:0})
        game.sprites.hydro.newTank({X:580,altitude:170,tankWidth:50,tankHeight:155,curHeight:0})
        game.sprites.hydro.newTank({X:885,altitude:285,tankWidth:80,tankHeight:150,curHeight:100})
        game.sprites.hydro.newTank({X:885,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:340,altitude:375,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:770,altitude:375,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:480,altitude:280,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:630,altitude:280,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:885,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D1']})
        game.sprites.hydro.newPipe({obj:['T5','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D2']})
        game.sprites.hydro.newPipe({obj:['T6','D2']})
        game.sprites.hydro.newPipe({obj:['T4','D3']})
        game.sprites.hydro.newPipe({obj:['T7','D3']})
        game.sprites.hydro.newPipe({obj:['T8','D4']})
        game.sprites.hydro.newPipe({obj:['T9','D4'],isVisible:'0'})
        game.sprites.hydro.newCombo([2,3])
        game.sprites.hydro.newCombo([4,5])
        game.sprites.hydro.newCombo([6,7])
        game.sprites.hydro.newValve({linkedTank:3,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:4,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:8,isOpen:0,trigger:{tank:7,height:80,direction:'L',length:280}})
        game.sprites.hydro.newShower({X:885,altitude:180,triggerPipe:9})

        /*game.sprites.hydro.newTank({X:520,altitude:270,tankWidth:50,tankHeight:50,curHeight:0})
        game.sprites.hydro.newTank({X:570,altitude:270,tankWidth:50,tankHeight:50,curHeight:0})
        game.sprites.hydro.newTank({X:710,altitude:270,tankWidth:50,tankHeight:50,curHeight:0})
        game.sprites.hydro.newTank({X:760,altitude:270,tankWidth:50,tankHeight:50,curHeight:0})
        game.sprites.hydro.newTank({X:540,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newCombo([2,3])
        game.sprites.hydro.newCombo([4,5])
        game.sprites.hydro.newDistributor({X:500,altitude:285,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:780,altitude:285,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:570,altitude:200})
        game.sprites.hydro.newDistributor({X:710,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D1']})
        game.sprites.hydro.newPipe({obj:['T5','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D2']})
        game.sprites.hydro.newPipe({obj:['T6','D2'],isVisible:'0'})
        game.sprites.hydro.newPipe({obj:['T4','D3']})
        game.sprites.hydro.newPipe({obj:['T6','D3'],isVisible:'0'})
        game.sprites.hydro.newValve({linkedTank:3,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:4,isOpen:0})
        game.sprites.hydro.newShower({X:570,altitude:180,triggerPipe:5})
        game.sprites.hydro.newShower({X:710,altitude:180,triggerPipe:7})*/
        }
)


/*
// Level2
//     T0
//              T2
//     D0     T1
//              D1   T3T4
//                     D2
//                     T5
game.levels.push(function() {
        game.sprites.cat.x = 600
        game.sprites.cat.maxX = 950
        game.sprites.hydro.newTank({X:450,altitude:350,tankWidth:110,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:630,altitude:300,tankWidth:80,tankHeight:150,curHeight:0})
        game.sprites.hydro.newTank({X:630,altitude:415,tankWidth:80,tankHeight:60,curHeight:0})
        game.sprites.hydro.newTank({X:800,altitude:270,tankWidth:55,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:840,altitude:270,tankWidth:55,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:800,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newCombo([3,4])
        game.sprites.hydro.newDistributor({X:540,altitude:220})
        game.sprites.hydro.newDistributor({X:700,altitude:405,isVisible:'0'})
        game.sprites.hydro.newDistributor({X:840,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D1']})
        game.sprites.hydro.newPipe({obj:['T4','D2']})
        game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
        game.sprites.hydro.newLinkedTanks([1,2])
        game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
        game.sprites.hydro.newShower({X:840,altitude:180,triggerPipe:5})
    }
)
*/
/*
// Level 3
// T0
//    T1
//       D0    
//          T3   D1
//          T2       
//               T4T5
//                 D2
//                 T6
game.levels.push(function() {
        game.sprites.cat.x = 400
        game.sprites.cat.maxX = 1000
        game.sprites.hydro.newTank({X:400,altitude:320,tankWidth:100,tankHeight:150,curHeight:100})
        game.sprites.hydro.newTank({X:550,altitude:350,tankWidth:100,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:700,altitude:230,tankWidth:50,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:700,altitude:450,tankWidth:50,tankHeight:100,curHeight:0,isVisible:'0'})
        game.sprites.hydro.newTank({X:850,altitude:300,tankWidth:40,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:890,altitude:300,tankWidth:40,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:800,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newCombo([4,5])
        game.sprites.hydro.newDistributor({X:550,altitude:200})
        game.sprites.hydro.newDistributor({X:775,altitude:440})
        game.sprites.hydro.newDistributor({X:890,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T3','D1']})
        game.sprites.hydro.newPipe({obj:['T4','D1']})
        game.sprites.hydro.newPipe({obj:['T5','D2']})
        game.sprites.hydro.newPipe({obj:['T6','D2'],isVisible:'0'})
        game.sprites.hydro.newLinkedTanks([2,3])
        game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:1,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:5,isOpen:0})
        game.sprites.hydro.newShower({X:890,altitude:180,triggerPipe:6})
    }
)
*/

// T0  T1
// D0  D1
// T2--T3--T4   T5
//         D2---|


game.levels.push(function() {
        game.sprites.cat.x = 400
        game.sprites.cat.maxX = 1000
        game.sprites.hydro.newTank({X:400,altitude:320,tankWidth:90,tankHeight:150,curHeight:130})
        game.sprites.hydro.newTank({X:550,altitude:350,tankWidth:90,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:650,altitude:250,tankWidth:30,tankHeight:200,curHeight:1})
        game.sprites.hydro.newTank({X:680,altitude:250,tankWidth:30,tankHeight:200,curHeight:1})
        game.sprites.hydro.newTank({X:710,altitude:250,tankWidth:30,tankHeight:200,curHeight:1})
        game.sprites.hydro.newCombo([2,3,4])
        game.sprites.hydro.newDistributor({X:400,altitude:200})
        game.sprites.hydro.newDistributor({X:550,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D1']})
        game.sprites.hydro.newPipe({obj:['T3','D1']})
        game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:1,isOpen:0})

        /*
        game.sprites.hydro.newTank({X:400,altitude:320,tankWidth:100,tankHeight:150,curHeight:100})
        game.sprites.hydro.newTank({X:550,altitude:350,tankWidth:100,tankHeight:200,curHeight:180})
        game.sprites.hydro.newTank({X:700,altitude:230,tankWidth:50,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:700,altitude:450,tankWidth:50,tankHeight:100,curHeight:0,isVisible:'0'})
        game.sprites.hydro.newTank({X:850,altitude:300,tankWidth:40,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:890,altitude:300,tankWidth:40,tankHeight:200,curHeight:0})
        game.sprites.hydro.newTank({X:800,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
        game.sprites.hydro.newCombo([4,5])
        game.sprites.hydro.newDistributor({X:550,altitude:200})
        game.sprites.hydro.newDistributor({X:775,altitude:440})
        game.sprites.hydro.newDistributor({X:890,altitude:200})
        game.sprites.hydro.newPipe({obj:['T0','D0']})
        game.sprites.hydro.newPipe({obj:['T1','D0']})
        game.sprites.hydro.newPipe({obj:['T2','D0']})
        game.sprites.hydro.newPipe({obj:['T3','D1']})
        game.sprites.hydro.newPipe({obj:['T4','D1']})
        game.sprites.hydro.newPipe({obj:['T5','D2']})
        game.sprites.hydro.newPipe({obj:['T6','D2'],isVisible:'0'})
        game.sprites.hydro.newLinkedTanks([2,3])
        game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:1,isOpen:0})
        game.sprites.hydro.newValve({linkedTank:5,isOpen:0})
        game.sprites.hydro.newShower({X:890,altitude:180,triggerPipe:6})

        */
    }
)


// Level 4
//   T0             T1
//   D0         D1
//       T2 (X)         T3T4
//                        D2
//                        T5
game.levels.push(function() {
    game.sprites.cat.x = 400
    game.sprites.cat.maxX = 1100
    game.sprites.hydro.newTank({X:400,altitude:400,tankWidth:100,tankHeight:150,curHeight:88})
    game.sprites.hydro.newTank({X:700,altitude:400,tankWidth:100,tankHeight:150,curHeight:88})
    game.sprites.hydro.newTank({X:550,altitude:280,tankWidth:100,tankHeight:200,curHeight:1})
    game.sprites.hydro.newTank({X:850,altitude:280,tankWidth:50,tankHeight:200,curHeight:1})
    game.sprites.hydro.newTank({X:900,altitude:280,tankWidth:50,tankHeight:200,curHeight:1})
    game.sprites.hydro.newTank({X:900,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newCombo([3,4])
    game.sprites.hydro.newDistributor({X:450,altitude:200,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:750,altitude:200,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:900,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D1']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D2']})
    game.sprites.hydro.newPipe({obj:['T5','D2'],isVisible:'0'})
    game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({linkedTank:1,isOpen:0,trigger:{tank:2,height:88,direction:'L',length:110}})
    game.sprites.hydro.newValve({linkedTank:4,isOpen:0})
    game.sprites.hydro.newShower({X:900,altitude:180,triggerPipe:5})
    }
)


// Level 2
game.levels.push(function() {
    game.sprites.cat.x = 400
    game.sprites.cat.maxX = 1100
    game.sprites.hydro.newTank({X:200,altitude:350,tankWidth:100,tankHeight:300,curHeight:150})
    game.sprites.hydro.newTank({X:600,altitude:500,tankWidth:80,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:800,altitude:150,tankWidth:90,tankHeight:300,curHeight:0})
    game.sprites.hydro.newTank({X:1000,altitude:440,tankWidth:100,tankHeight:200,curHeight:100})
    game.sprites.hydro.newTank({X:850,altitude:-100,tankWidth:2000,tankHeight:200,curHeight:1,isVisible:'0'})
    game.sprites.hydro.newDistributor({X:600,altitude:200})
    game.sprites.hydro.newDistributor({X:1000,altitude:200})
    game.sprites.hydro.newPipe({obj:['T0','D0']})
    game.sprites.hydro.newPipe({obj:['T1','D0']})
    game.sprites.hydro.newPipe({obj:['T2','D0']})
    game.sprites.hydro.newPipe({obj:['T3','D1']})
    game.sprites.hydro.newPipe({obj:['T4','D1'],isVisible:'0'})
    game.sprites.hydro.newShower({X:1000,altitude:180,triggerPipe:4})
    game.sprites.hydro.newValve({linkedTank:0,isOpen:0})
    game.sprites.hydro.newValve({linkedTank:1,isOpen:0})
    game.sprites.hydro.newValve({linkedTank:3,isOpen:0,trigger:{tank:2,height:255,direction:'L',length:136}})
    }
)

