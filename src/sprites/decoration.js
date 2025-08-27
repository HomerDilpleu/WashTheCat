game.sprites.decoration.create = function() {
    //this.drawBoundaries = true

    // End level
    p = game.sprites.decoration.cloneCreate()
    p.id = 'endLevel'
    p.width = 700
    p.height = 350
    p.x = 630
    p.y = 330
    //p.svg = new Path2D('M10 10 A19 19 0 1 0 40 10 L30 20 M40 10 L50 20 M0 0')

}

game.sprites.decoration.update = function () {
    if (this.id == 'endLevel' && game.getLevelState() == 'running') {this.scaleY=0}
    if (this.id == 'endLevel' && game.getLevelState() != 'running') {this.scaleY+=0.05}
    if (this.id == 'endLevel' && this.scaleY > 1) {this.scaleY=1}
}

game.sprites.decoration.drawFunction = function (ctx) {
    // End level
    if (this.id == 'endLevel' && game.getLevelState() != 'running') {
        ctx.fillStyle = 'red'
        ctx.fillRect(0,0,this.width,this.height)
    }

}