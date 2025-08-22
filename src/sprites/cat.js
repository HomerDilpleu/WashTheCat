game.sprites.cat.init = function() {

    //this.drawBoundaries = true

    // Init sprite properties
    this.width = 150
    this.height = 110
    this.x = 200
    this.y = 200
    this.scaleX = 1
    this.scaleY = 1
    // Animation
    this.curAnimation = 'idle'
    this.lastAnimation = ''
    // Load animation extension
    mge.animation.loadExtention(this)
    this.animation.timeBetweenFrames = 220

    // Draw cat generic function
    this.drawCat = function(ctx, pathBody, pathLegs, pathTail, pathEyes) {
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.fill(pathBody)
        ctx.fill(pathLegs)
        ctx.stroke(pathTail)
        if (pathEyes) {
            ctx.strokeStyle = "yellow"
            ctx.stroke(pathEyes)
        }
    }

    // Walk
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

    // Facing
    this.faceBody = new Path2D("M110 36 C100 64,50 24,38 60 C55 78,47 92,46 105 C61 55,93 56,91 105 C92 66,105 64,116 58 Q133 54,122 35 Q117 48,110 36")
    this.faceEyes = new Path2D("M110 45 Q112 48, 115 45 M119 45 Q122 48,124 45")
    this.faceImage = {draw: function (ctx) {game.sprites.cat.drawCat(ctx,game.sprites.cat.faceBody, game.sprites.cat.walk2Legs, game.sprites.cat.walk2Tail, game.sprites.cat.faceEyes)}}

    this.faceAnimation = [this.faceImage]


}

game.sprites.cat.update = function () {
    this.y = mge.game.height - 50 - this.height/2

    if (this.x < 250) {
        this.x+=0.4
        this.curAnimation = 'walk'
    } else {
        this.curAnimation = 'idle'
    }

}

game.sprites.cat.drawFunction = function (ctx) {
    // Update animation
    if (this.curAnimation != this.lastAnimation ) {
        if(this.curAnimation == 'idle') {
            this.animation.frames = this.faceAnimation
        }
        if(this.curAnimation == 'walk') {
            this.animation.frames = this.walkAnimation
        }
        this.animation.restart()
    }
    this.lastAnimation = this.curAnimation

    // Draw animation
    this.animation.draw(ctx)


/*

    if (this.x < 250) {this.animation.draw(ctx)}
    else {this.faceImage.draw(ctx)}
 */
 
}