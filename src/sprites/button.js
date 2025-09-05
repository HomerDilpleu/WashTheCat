game.sprites.button.create = function() {
    //this.drawBoundaries = true

    // Restart Button
    p = game.sprites.button.cloneCreate()
    p.id = 'restart'
    p.width = 50
    p.height = 50
    p.x = 200
    p.y = 600
    //p.svg = new Path2D('M10 10 A19 19 0 1 0 40 10 L30 20 M40 10 L50 20 M0 0')
    p.svg = new Path2D('M16 12 A17 17 0 1 0 34 12 L30 20 M34 12 L45 15')

    // Pause Button
    p = game.sprites.button.cloneCreate()
    p.id = 'pause'
    p.width = 50
    p.height = 50
    p.x = 275
    p.y = 600
    p.svgPlay = new Path2D('M10 10 L40 25 L10 40 L10 10')
    p.svgPause = new Path2D('M20 12 L20 40 M30 12 L30 40')

    // Next level Button
    p = game.sprites.button.cloneCreate()
    p.id = 'next'
    p.width = 50
    p.height = 50
    p.x = 670
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
        if (game.levelState != 'running' && !game.animationInProgress) {
            if (game.levelState=='failed') {
                this.x = 630
                this.y = 450
            } else {
                this.x = 590
                this.y = 450
            }
        } else {
            this.x = 200
            this.y = 600
        }
    }
    // Play/pause
    if (this.id == 'pause') {
        if (this.isClicked) {
            game.isPaused=!game.isPaused
            if(game.isPaused) {
                mge.sequencer.stop()
                mge.audio.volume = 0
            } else {
                mge.sequencer.start()
                mge.audio.volume = 0.8
            }
        }
        this.isVisible=true
        if (game.levelState!='running' && !game.animationInProgress) {this.isVisible=false}
    }
    // Next level
    if (this.id == 'next') {
        // Visibility
        if (game.levelState=='won' &&  !game.animationInProgress) {this.isVisible=true} else {this.isVisible=false}
        // If is cliked
        if (this.isClicked && this.isVisible) {
            game.isPaused=false
            localStorage.setItem(game.lclStorage, game.curLevel+1)
            game.loadLevel(game.curLevel+1)
        }
    }
}

game.sprites.button.drawFunction = function (ctx) {
    // Style
    ctx.fillStyle = '#AAAAAA'
    ctx.strokeStyle = 'black'
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