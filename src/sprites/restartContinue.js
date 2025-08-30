game.sprites.restartContinue.create = function() {
    //this.drawBoundaries = true
    this.width = 200
    this.height = 50
    this.x = mge.game.width/2
    // Restart
    p = game.sprites.restartContinue.cloneCreate()
    p.id = 'restart'
    p.y = 280
    p.txt = 'Restart progress'
    // Continue
    p = game.sprites.restartContinue.cloneCreate()
    p.id = 'continue'
    p.y = 200
    p.txt = 'Continue'
    // Play
    p = game.sprites.restartContinue.cloneCreate()
    p.id = 'play'
    p.y = 350
    p.txt = 'PLAY'
}

game.sprites.restartContinue.update = function () {
    // There is a level in local storage
    if (Number(localStorage.getItem('wtc.maxLevelReached') || '0') > 0) {
        if (this.id == 'continue') {
            this.isVisible = true
            if (this.isClicked) {
                game.songs.mainSong.playSong()
                game.curLevel = Number(localStorage.getItem('wtc.maxLevelReached'))
                mge.game.changeScene(game.scenes.main)
            }
        }
        if (this.id == 'restart') {
            this.isVisible = true
            if (this.isClicked) {
                game.songs.mainSong.playSong()
                localStorage.removeItem('wtc.maxLevelReached')
                game.curLevel = 0
                mge.game.changeScene(game.scenes.main)
            }
        }
        if (this.id == 'play') {this.isVisible = false}
    } else {
    // There is no level in local storage
        if (this.id == 'continue') {this.isVisible = false}
        if (this.id == 'restart') {this.isVisible = false}
        if (this.id == 'play') {
            this.isVisible = true
            if (this.isClicked) {
                game.songs.mainSong.playSong()
                game.curLevel = 0
                mge.game.changeScene(game.scenes.main)
            }
        }
    }
}

game.sprites.restartContinue.drawFunction = function (ctx) {
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 4
        ctx.fillRect(0,0,this.width,this.height)
        ctx.strokeRect(0,0,this.width,this.height)
        // Text
        ctx.font = "20px sans-serif"
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.txt,this.width/2,this.height/2)
}