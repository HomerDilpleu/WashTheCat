game.sprites.decoration.create = function() {
    //this.drawBoundaries = true

    // End level
    p = game.sprites.decoration.cloneCreate()
    p.id = 'endLevel'
    p.width = 200
    p.height = 200
    p.x = 200
    p.y = 600
    //p.svg = new Path2D('M10 10 A19 19 0 1 0 40 10 L30 20 M40 10 L50 20 M0 0')

}

game.sprites.decoration.update = function () {
    // End level
    if (this.id == 'endLevel' && game.getLevelState() != 'running') {
        this.isVisible = true
    }
    if (this.id == 'endLevel' && game.getLevelState() == 'running') {
        this.isVisible = false
    }
}

game.sprites.decoration.drawFunction = function (ctx) {
    // End level
    if (this.id == 'endLevel' && this.isVisible) {
        ctx.fillStyle = 'red'
        ctx.fillRect(0,0,200,200)
    }

}