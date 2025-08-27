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
    // Draw
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

}

game.background.drawBuildings = function (ctx,maxWidth,maxHeight) {
    let x=-10
    while (x<mge.game.width) {
        let buildingWidth = Math.random() * maxWidth
        let buildinHeight = Math.random() * maxHeight
        ctx.fillRect(x-buildingWidth/2,680,buildingWidth,-buildinHeight)
        x+= Math.random() * maxWidth
    }
}

game.background.draw = function() {
    mge.game.context.drawImage(this.canvasHtmlRef,0,0)
}