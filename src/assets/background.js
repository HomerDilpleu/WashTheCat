game.background.create = function () {

    /////////////////////////////
    // Create a specific canvas
    /////////////////////////////
    let htmlCanvas =  document.createElement('canvas')
	htmlCanvas.width = mge.game.width
	htmlCanvas.height = mge.game.height
    htmlCanvas.style.display = 'none'
	document.body.appendChild(htmlCanvas)
    // save context and html reference
    this.canvasCtx = htmlCanvas.getContext('2d')
    this.canvasHtmlRef = htmlCanvas

    /////////////////////////////
    // Draw background
    /////////////////////////////
    let ctx = this.canvasCtx
    // SKY
    ctx.fillStyle = game.hsl(game.mainColor,100,75)
    ctx.fillRect(0, 0, mge.game.width, mge.game.height)
    // CLOUDS
    ctx.fillStyle = game.hsl(game.mainColor,100,90)
    for (let i = 0; i < 10; i++) {
        let startX = Math.random() * mge.game.width * 0.8
        let startY = Math.random() * mge.game.height * 0.6
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        for (let j = 0; j < 6; j++) {
            startX+=Math.random() * 50
            ctx.lineTo(startX, startY - Math.random() * 25)
        }
        ctx.lineTo(startX+30, startY)
        ctx.fill()
    }
    // BUILDINGS
    ctx.fillStyle = game.hsl(game.mainColor,100,65)
    this.drawBuildings(ctx,30,400)
    ctx.fillStyle = game.hsl(game.mainColor,100,55)
    this.drawBuildings(ctx,40,300)
    ctx.fillStyle = game.hsl(game.mainColor,100,45)
    this.drawBuildings(ctx,50,200)
    ctx.fillRect(0,650,2000,200)
    // GROUND
    ctx.fillStyle = game.hsl(game.mainColor,35,25)
    ctx.fillRect(0,680,2000,2000)
    // STRUCTURE
    for (let i = 1; i < 13; i++) {
        // left
        game.background.drawStructure(ctx,80,i*50+30)
        // right
        game.background.drawStructure(ctx,1130,i*50+30)
    }
    for (let i = 1; i < 21; i++) {
        // top
        game.background.drawStructure(ctx,80+i*50,80)
    }
    // CAT WASH
    // Box
    ctx.fillStyle = game.hsl(game.mainColor,35,50)
    ctx.strokeStyle = game.hsl(game.mainColor,35,25)
    ctx.lineWidth = 4
    ctx.fillRect(380,40,500,90)
    ctx.strokeRect(380,40,500,90)
    // Text
    ctx.font = "bold 72px sans-serif"
    ctx.fillStyle = 'white'
    ctx.shadowColor = 'white'
    ctx.shadowBlur = 20
    ctx.fillText("CAT WASH",450,110)
    ctx.strokeStyle = game.hsl(game.mainColor,35,25)
    ctx.lineWidth = 3
    ctx.strokeText("CAT WASH",450,110)
}

game.background.drawBuildings = function (ctx,maxWidth,maxHeight) {
    let x=-10
    while (x<mge.game.width) {
        let buildingWidth = Math.random() * maxWidth
        let buildingHeight = Math.random() * maxHeight
        ctx.fillRect(x-buildingWidth/2,680,buildingWidth,-buildingHeight)
        x+= Math.random() * maxWidth
    }
}

game.background.drawStructure = function (ctx,x,y) {
    ctx.strokeStyle = game.hsl(game.mainColor,35,25)
    ctx.lineWidth = 4
    ctx.strokeRect (x,y,50,50)
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+50,y+50)
    ctx.moveTo(x+50,y)
    ctx.lineTo(x,y+50)
    ctx.stroke()
}

game.background.draw = function() {
    mge.game.context.drawImage(this.canvasHtmlRef,0,0)
}