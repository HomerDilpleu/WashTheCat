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
    // List of objects by type
    this.tanks = []
    this.distributors = []
    this.pipes = []
}

// *************************************************
// *************************************************
// Create hydro objets
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
    // Sprite properties
    o.width = mge.game.width
    o.height = mge.game.height
    o.x = mge.game.width / 2
    o.y = mge.game.height / 2
    // Push to list
    game.sprites.hydro.pipes.push(o)
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
    })
}

game.sprites.hydro.calcDistributorsPressure = function () {
    game.sprites.hydro.distributors.forEach(function (distributor) {
        // Init
        let inputPressure = 0
        let inputNb = 0
        distributor.pressure = 0
        // For each linked objects
        distributor.linkedObjects.forEach(function (linkedObject) {
            // Linked tanks
            if (linkedObject.type == 'T' && linkedObject.curHeight > 0) {
                inputPressure += linkedObject.pressure
                inputNb+=1
            }
        })
        if (inputNb > 0) {distributor.pressure = inputPressure / inputNb}
    })
}

game.sprites.hydro.calcPipesFlow = function () {
    game.sprites.hydro.pipes.forEach(function (pipe) {
        // Calculate flow based on pressure difference
        pipe.flow = Math.abs(pipe.connection2.pressure - pipe.connection1.pressure)
    })
}

game.sprites.hydro.updateTankCurHeight = function () {
    // For each pipe, update the linked tank if exists
    game.sprites.hydro.pipes.forEach(function (pipe) {
        // Get linked tank and second linked object
        let linkedTank = {}
        let linkedObject = {}
        if (pipe.connection1.type == 'T') {
            linkedTank = pipe.connection1
            linkedObject = pipe.connection2
        }
        if (pipe.connection2.type == 'T') {
            linkedTank = pipe.connection2
            linkedObject = pipe.connection1
        }
        // Update linked tank height
        let volumeToMove = pipe.flow
        let heightDifference = volumeToMove / linkedTank.tankWidth
        if (linkedTank.pressure > linkedObject.pressure) {linkedTank.curHeight -= heightDifference}
        else if (linkedTank.pressure < linkedObject.pressure) {linkedTank.curHeight += heightDifference}
        // Check curHeight is not negative
        if (linkedTank.curHeight < 0) {linkedTank.curHeight = 0}
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
    ctx.fillText("A: " + this.altitude.toFixed(0), 10, 20)
    ctx.fillText("P: " + this.pressure.toFixed(0), 10, 40)
    ctx.fillText("H: " + this.curHeight.toFixed(0), 10, 60)
    ctx.fillText("V: " + this.volume.toFixed(0), 10, 80)
}

game.sprites.hydro.drawDistributor = function (ctx) {
    // Draw connector
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 20, 20)
    // DEBUG
    ctx.fillStyle = "Black"
    ctx.font = "12px serif"
    ctx.fillText("P: " + this.pressure.toFixed(0), 10, 40)
}

game.sprites.hydro.drawPipe = function (ctx) {
    ctx.strokeStyle = "black"
    if(this.flow !=  0) {ctx.strokeStyle = "blue"}
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
    ctx.fillText("F: " + this.flow.toFixed(2), x + 20, y)
}
