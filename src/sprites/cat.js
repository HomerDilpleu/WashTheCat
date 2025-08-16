game.sprites.cat.init = function() {
    
    // Init sprite properties
    this.width = 150
    this.height = 110
    this.x = 200
    this.y = 200
    this.scaleX = 1
    this.scaleY = 1
    //this.drawBoundaries = true

    // Draw cat generic function
    this.drawCat = function(ctx, pathBody, pathLegs, pathTail) {
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.fill(pathBody)
        ctx.fill(pathLegs)
        ctx.stroke(pathTail)
    }

    // WALK
    this.walk1Body = new Path2D("M122 36 C100 64,50 24,38 60 C52 78,43 92,37 107 C61 55,93 56,82 107 C92 66,105 64,116 58 Q133 54,121 43")
    this.walk1Legs = new Path2D("M38 60 C53 77,50 98,51 110 C63 40,92 71,97 110 C97 88,92 65,116 58")
    this.walk1Tail = new Path2D("M38 60 C27 63,25 76,11 78")
    this.walk1Image = {draw: function (ctx) {game.sprites.cat.drawCat(ctx,game.sprites.cat.walk1Body, game.sprites.cat.walk1Legs, game.sprites.cat.walk1Tail)}}
    
    this.walk2Body = new Path2D("M122 36 C100 64,50 24,38 60 C55 78,47 92,46 105 C61 55,93 56,91 105 C92 66,105 64,116 58 Q133 54,121 43")
    this.walk2Legs = new Path2D("M38 60 C53 77,50 98,51 110 C63 40,92 71,97 110 C97 88,92 65,116 58")
    this.walk2Tail = new Path2D("M38 60 C27 63,25 76,11 78")
    this.walk2Image = {draw: function (ctx) {game.sprites.cat.drawCat(ctx,game.sprites.cat.walk2Body, game.sprites.cat.walk2Legs, game.sprites.cat.walk2Tail)}}

    this.walk3Body = new Path2D("M122 38 C100 66,50 26,38 62 C55 78,47 92,46 110 C61 57,93 58,89 110 C92 68,105 66,116 60 Q133 56,121 45")
    this.walk3Legs = new Path2D("M38 62 C58 77,60 98,62 110 C57 44,96 73,105 110 C102 90,93 67,116 60")
    this.walk3Tail = new Path2D("M38 62 C27 63,25 76,11 80")
    this.walk3Image = {draw: function (ctx) {game.sprites.cat.drawCat(ctx,game.sprites.cat.walk3Body, game.sprites.cat.walk3Legs, game.sprites.cat.walk3Tail)}}


    this.walkAnimation = [this.walk1Image, this.walk2Image, this.walk3Image]

    // Load animation extension
    mge.animation.loadExtention(this)
    this.animation.timeBetweenFrames = 300
    this.animation.frames = this.walkAnimation


}

game.sprites.cat.update = function () {

}

game.sprites.cat.drawFunction = function (ctx) {
    /*ctx.fillStyle = "black"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 3
    ctx.fill(this.walk1Body)
    ctx.fill(this.walk1Legs)
    ctx.stroke(this.walk1Tail)*/
    this.animation.draw(ctx)
 }