game.sprites.decoration.create = function() {
    //this.drawBoundaries = true

    // End level
    p = game.sprites.decoration.cloneCreate()
    p.id = 'endLevel'
    p.width = 700
    p.height = 350
    p.x = 630
    p.y = 330
    p.txt = ''
    p.curDisplayScore = 0

}

game.sprites.decoration.update = function () {
    // End level
    if (this.id == 'endLevel') {
        if (game.getLevelState() == 'running') {
            this.scaleY=0
            this.curDisplayScore=0
        }
        else {
            game.animationInProgress=true
            this.scaleY+=0.05
        }
        if (this.scaleY>=1) {
            this.scaleY=1
            // Clean level progression
            if (this.curDisplayScore<game.sprites.cat.cleanLevel*100) {
                this.curDisplayScore+=2
            } else {game.animationInProgress=false}
        }
        if (game.getLevelState()=='failed') {this.txt='LEVEL FAILED'}
        else {this.txt='LEVEL COMPLETED'}
        if (this.curDisplayScore<game.sprites.cat.cleanLevel*100) {this.txt=''}
    }
}

game.sprites.decoration.drawFunction = function (ctx) {
    // End level
    if (this.id == 'endLevel' && game.getLevelState() != 'running') {
        // Rectangle
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 4
        ctx.fillRect(0,0,this.width,this.height)
        ctx.strokeRect(0,0,this.width,this.height)
        // Text
        ctx.font = "bold 50px sans-serif"
        ctx.fillStyle = 'black'
        //ctx.shadowColor = 'white'
        //ctx.shadowBlur = 0
        ctx.textAlign = 'center'
        ctx.fillText(this.txt,this.width/2,80)
        // Score bar
        ctx.fillRect(100,190,this.curDisplayScore*5,50)
        ctx.strokeRect(100,190,500,50)
        ctx.fillText(Math.round(this.curDisplayScore) + '%',this.width/2,150)

    }

}