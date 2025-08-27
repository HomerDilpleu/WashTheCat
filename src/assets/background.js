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
    ctx.fillRect(0,300,100,2000)

    // GROUND
    ctx.fillStyle = game.hsl(game.mainColor,50,60)
    ctx.fillRect(0,mge.game.height-200,mge.game.width,200)
    ctx.fillStyle = game.hsl(game.mainColor,35,55)
    ctx.fillRect(0,mge.game.height-185,mge.game.width,200)

}


game.background.draw = function() {
    mge.game.context.drawImage(this.canvasHtmlRef,0,0)
}