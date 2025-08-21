// *************************************************
// *************************************************
// Sprite general initialisation
// *************************************************
// *************************************************
game.sprites.hydro.init = function() {
    // Constants shared by all clones
    this.drawBoundaries = true
    this.width = 100
    this.height = 100
    // Hydro constants
    flowConst = 1
    // List of objects by type
    this.tanks = []
    this.distributors = []
    this.pipes = []
    this.combos = []
    this.valves = []
    this.showers = []
}

// *************************************************
// *************************************************
// CREATE
// *************************************************
// *************************************************
game.sprites.hydro.newTank = function (c) {
    // Create tank object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'T'
    // Hydro properties
    o.tankWidth = c.tankWidth
    o.tankHeight = c.tankHeight
    o.curHeight = c.curHeight
    o.X = c.X
    o.altitude = c.altitude
    //o.pressure = 0
    // Sprite properties
    o.width = c.tankWidth
    o.height = c.tankHeight
    o.x = c.X
    o.y = mge.game.height - c.altitude - c.tankHeight / 2
    // Connection point
    o.connectionPointx = o.x
    o.connectionPointy = o.y + o.height / 2
    // Linked objects
    o.linkedObjects = []
    // Push to list
    game.sprites.hydro.tanks.push(o)
}

game.sprites.hydro.newDistributor = function (c) {
    // Create distributor object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'D'
    // Hydro properties
    o.X = c.X
    o.altitude = c.altitude
    o.pressure = 0
    // Sprite properties
    o.width = 20
    o.height = 20
    o.x = c.X
    o.y = mge.game.height - c.altitude - 10
    // Connection point
    o.connectionPointx = o.x
    o.connectionPointy = o.y
    // Linked objects
    o.linkedObjects = []
    // Push to list
    game.sprites.hydro.distributors.push(o)
}
/*
game.sprites.hydro.newValve = function (c) {
    // Create valve object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'V'
    // Hydro properties
    o.X = c.X
    o.altitude = c.altitude
    o.pressure = 0
    o.isOpen = c.isOpen
    // Sprite properties
    o.width = 50
    o.height = 50
    o.x = c.X
    o.y = mge.game.height - c.altitude - 10
    // Connection point
    o.connectionPointx = o.x
    o.connectionPointy = o.y
    // Linked objects
    o.linkedObjects = []
    // Push to list
    game.sprites.hydro.valves.push(o)
}
*/
game.sprites.hydro.newPipe = function (c) {
    // Create pipe object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'P'
    // Connection 1
    if (c[0][0] == 'T') {o.connection1 = game.sprites.hydro.tanks[c[0][1]]}
    if (c[0][0] == 'D') {o.connection1 = game.sprites.hydro.distributors[c[0][1]]}
    // Connection 2
    if (c[1][0] == 'T') {o.connection2 = game.sprites.hydro.tanks[c[1][1]]}
    if (c[1][0] == 'D') {o.connection2 = game.sprites.hydro.distributors[c[1][1]]}
    // Update 'connected objects' list of each object
    o.connection1.linkedObjects.push(o.connection2)
    o.connection2.linkedObjects.push(o.connection1)
    // hydraulic properties
    o.isFilled = 0
    o.flow = 0
    // Sprite properties
    o.width = mge.game.width
    o.height = mge.game.height
    o.x = mge.game.width / 2
    o.y = mge.game.height / 2
    o.isVisible = 1
    if (c[2] == 'Hide') {o.isVisible = 0}
    // Push to list
    game.sprites.hydro.pipes.push(o)
}

game.sprites.hydro.newCombo = function (c) {
    // Create combo of tanks object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'C'
    // Hydro properties
    o.curHeight = 0
    // Linked tanks
    o.linkedObjects = []
    c.forEach(function (tankIndex) {
        // Get tank object
        let tank = game.sprites.hydro.tanks[tankIndex]
        // Add to linked objects
        o.linkedObjects.push(tank)
    })
    // Push to list
    game.sprites.hydro.combos.push(o)
}

game.sprites.hydro.newShower = function (c) {
    // Create shower object
    let o = game.sprites.hydro.cloneCreate()
    o.type = 'S'
    // Hydro properties
    o.X = c.X
    o.altitude = c.altitude
    o.linkedPipe = game.sprites.hydro.pipes[c.triggerPipe]
    o.isOpen = game.sprites.hydro.pipes[c.triggerPipe]
    // Sprite properties
    o.width = 50
    o.height = 50
    o.x = c.X
    o.y = mge.game.height - c.altitude - 10
    // Push to list
    game.sprites.hydro.showers.push(o)
}

// *************************************************
// *************************************************
// UPDATE
// *************************************************
// *************************************************
game.sprites.hydro.calcTanksPressure = function () {
    game.sprites.hydro.tanks.forEach(function (tank) {
        // Calculate hydro properties
        tank.volume = tank.tankWidth * tank.curHeight
        tank.pressure = tank.altitude + tank.curHeight
        // If tank is empty
        if (tank.curHeight == 0) {tank.pressure = Math.min(tank.linkedObjects[0].pressure,tank.pressure)}
    })
}
/*
game.sprites.hydro.updateValves = function () {
    game.sprites.hydro.valves.forEach(function (valve) {
        // If clicked, chage isOpen state
        if (valve.isClicked) {
            if (valve.isOpen == 1) {valve.isOpen = 0}
            else {valve.isOpen = 1}
        }
        // Get tank pressure and distributor pressure
        if (valve.linkedObjects[0].type == 'T') {valve.pressureTank = valve.linkedObjects[0].pressure}  
        if (valve.linkedObjects[1].type == 'T') {valve.pressureTank = valve.linkedObjects[1].pressure}
        if (valve.linkedObjects[0].type == 'D') {valve.pressureDistributor = valve.linkedObjects[0].pressure}
        if (valve.linkedObjects[1].type == 'D') {valve.pressureDistributor = valve.linkedObjects[1].pressure}
    })
}
*/
game.sprites.hydro.calcDistributorsPressure = function () {
    game.sprites.hydro.distributors.forEach(function (distributor) {
        // Init
        let inputPressure = 0
        let inputNb = 0
        distributor.pressure = 0
        // For each linked objects
        distributor.linkedObjects.forEach(function (linkedObject) {
            inputPressure += linkedObject.pressure
            inputNb+=1
        })
        if (inputNb > 0) {distributor.pressure = inputPressure / inputNb}
    })
}

game.sprites.hydro.calcPipesFlow = function () {
    game.sprites.hydro.pipes.forEach(function (pipe) {
        // Calculate flow
        pipe.flow = pipe.connection1.pressure - pipe.connection2.pressure
        pipe.flow = Math.round(pipe.flow * this.flowConst)
        // Check if pipe is filled or not
        pipe.isFilled = 1
        if (pipe.connection1.curHeight == 0 || pipe.connection2.curHeight == 0) {pipe.isFilled = 0}
    })
}

game.sprites.hydro.updateTankCurHeight = function () {
    // For each pipe, update the linked tank if exists
    game.sprites.hydro.pipes.forEach(function (pipe) {
        // Get linked tank and second linked object
        let linkedTank = {}
        if (pipe.connection1.type == 'T') {linkedTank = pipe.connection1}
        if (pipe.connection2.type == 'T') {linkedTank = pipe.connection2}
        // Calculate volume to move and height difference
        let volumeToMove = pipe.flow
        let heightDifference = volumeToMove / linkedTank.tankWidth
        // Update tank height
        linkedTank.curHeight -= heightDifference
        // Check curHeight is not negative
        if (linkedTank.curHeight < 0) {linkedTank.curHeight = 0}
    })
}

game.sprites.hydro.updateComboCurHeight = function () {
    // For each combo, update the linked tanks
    game.sprites.hydro.combos.forEach(function (combo) {
        // Calculate combo height
        let comboHeight = 0
        let nbTanks = 0
        combo.linkedObjects.forEach(function (tank) {
            nbTanks += 1
            comboHeight += tank.curHeight
        })
        // Calculate average height
        comboHeight = comboHeight / nbTanks
        combo.curHeight = comboHeight
        // Update linked tanks height
        combo.linkedObjects.forEach(function (tank) {
            tank.curHeight = comboHeight
        })
    })
}

// *************************************************
// *************************************************
// DRAW
// *************************************************
// *************************************************
game.sprites.hydro.drawFunction = function (ctx) {
    if (this.type === 'T') {this.drawTank(ctx)}
    if (this.type === 'D') {this.drawDistributor(ctx)}
    if (this.type === 'P') {this.drawPipe(ctx)}
    if (this.type === 'V') {this.drawValve(ctx)}
    if (this.type === 'S') {this.drawShower(ctx)}
}

game.sprites.hydro.drawTank = function (ctx) {
    // Draw tank
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, this.tankWidth, this.tankHeight)
    // Draw water
    ctx.fillStyle = "blue"
    ctx.fillRect(5, this.tankHeight, this.tankWidth-10, -this.curHeight)
    // DEBUG
    ctx.fillStyle = "white"
    ctx.font = "12px serif"
    ctx.fillText("A: " + Math.round(this.altitude), 10, 20)
    ctx.fillText("P: " + Math.round(this.pressure), 10, 40)
    ctx.fillText("H: " + Math.round(this.curHeight), 10, 60)
    ctx.fillText("V: " + Math.round(this.volume), 10, 80)
}

game.sprites.hydro.drawDistributor = function (ctx) {
    // Draw connector
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 20, 20)
    // DEBUG
    ctx.fillStyle = "Black"
    ctx.font = "12px serif"
    ctx.fillText("P: " + Math.round(this.pressure), 10, 40)
}
/*
game.sprites.hydro.drawValve = function (ctx) {
    // Draw valve
    ctx.fillStyle = "yellow"
    ctx.fillRect(0, 0, 50, 50)
    if (this.isOpen == 1) {
        ctx.fillStyle = "blue"
        ctx.fillRect(5, 5, 40, 40)
    }
    // DEBUG
    ctx.fillStyle = "Black"
    ctx.font = "12px serif"
    ctx.fillText("PT: " + Math.round(this.pressureTank), -50, 20)
    ctx.fillText("PD: " + Math.round(this.pressureDistributor), -50, 40)
}
*/
game.sprites.hydro.drawPipe = function (ctx) {
    if (this.isVisible == 1) {
        // Draw pipe
        ctx.strokeStyle = "black"
        if(this.isFilled ==  1) {ctx.strokeStyle = "blue"}
        ctx.lineWidth = 15
        ctx.beginPath()
        ctx.moveTo(this.connection1.connectionPointx, this.connection1.connectionPointy)
        ctx.lineTo(this.connection2.connectionPointx, this.connection2.connectionPointy)
        ctx.stroke()
        ctx.lineWidth = 1
        // DEBUG
        ctx.fillStyle = "Black"
        ctx.font = "12px serif"
        let x = (this.connection1.connectionPointx + this.connection2.connectionPointx) / 2
        let y = (this.connection1.connectionPointy + this.connection2.connectionPointy) / 2
        ctx.fillText("F: " + Math.round(this.flow), x + 20, y)
    }
}

game.sprites.hydro.drawShower = function (ctx) {
    // Draw shower
    ctx.fillStyle = "purple"
    ctx.fillRect(0, 0, 50, 50)
    // Draw water
    if(this.linkedPipe.flow < 0) {
        ctx.fillStyle = "aqua"
        ctx.fillRect(0,50,50,200)
    }
    // DEBUG
    ctx.fillStyle = "white"
    ctx.font = "12px serif"
    ctx.fillText("F: " + Math.round(this.linkedPipe.flow), 10, 40)
}
