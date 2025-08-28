game.sprites.button.create = function() {
    //this.drawBoundaries = true

    // Restart Button
    p = game.sprites.button.cloneCreate()
    p.id = 'restart'
    p.width = 50
    p.height = 50
    p.x = 200
    p.y = 600
    p.svg = new Path2D('M10 10 A19 19 0 1 0 40 10 L30 20 M40 10 L50 20 M0 0')

    // Pause Button
    p = game.sprites.button.cloneCreate()
    p.id = 'pause'
    p.width = 50
    p.height = 50
    p.x = 275
    p.y = 600
    p.svgPlay = new Path2D('M10 10 L40 25 L10 40 L10 10')
    p.svgPause = new Path2D('M20 15 L20 40 M30 15 L30 40')

    // Next level Button
    p = game.sprites.button.cloneCreate()
    p.id = 'next'
    p.width = 50
    p.height = 50
    p.x = 650
    p.y = 450
    p.svg = new Path2D('M10 10 L40 25 L10 40')

}

game.sprites.button.update = function () {
    // Restart level
    if (this.id == 'restart') {
        if (this.isClicked) {
            game.isPaused=false
            game.loadLevel(game.curLevel)
        }
        if (game.getLevelState() != 'running' && !game.animationInProgress) {
            if (game.getLevelState()=='failed') {
                this.x = 620
                this.y = 450
            } else {
                this.x = 560
                this.y = 450
            }
        } else {
            this.x = 200
            this.y = 600
        }
    }
    // Play/pause
    if (this.id == 'pause') {
        if (this.isClicked) {game.isPaused=!game.isPaused}
        this.isVisible=true
        if (game.getLevelState()!='running' && !game.animationInProgress) {this.isVisible=false}
    }

/*    if (this.id == 'pause' && this.isClicked) {
        game.isPaused=!game.isPaused
    }*/

    // Next level
    if (this.id == 'next') {
        // Visibility
        if (game.getLevelState()[0]=='*' &&  !game.animationInProgress) {this.isVisible=true} else {this.isVisible=false}
        // If is cliked
        if (this.isClicked && this.isVisible) {
            game.isPaused=false
            game.loadLevel(game.curLevel+1)
        }
    }
}

game.sprites.button.drawFunction = function (ctx) {
    // Style
    ctx.fillStyle = "grey"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 4
    ctx.lineCap = "round"
    if (this.isClicked) {
        ctx.fillStyle = "white"
    }
    // Draw button box
    ctx.fillRect(0,0,50,50)
    ctx.strokeRect(0,0,50,50)
    // restart
    if (this.id == 'restart') {
        ctx.stroke(this.svg)
    } 
    // next
    if (this.id == 'next') {
        ctx.stroke(this.svg)
    } 
    // Pause
    if (this.id == 'pause') {
        if (game.isPaused) {ctx.stroke(this.svgPlay)} 
        else {ctx.stroke(this.svgPause)}
    } 
}