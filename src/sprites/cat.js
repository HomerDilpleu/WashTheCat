game.sprites.cat.create = function() {

    //this.drawBoundaries = true

    // Init sprite properties
    this.width = 140
    this.height = 110
    this.x = 200
    this.y = 200
    this.scaleX = 1.3
    this.scaleY = 1.3
    this.cleanLevel = 0
    this.speed = 0.7
    this.maxX = 800
    // Constants
    this.touchThresehold = 95
    this.blockedThresehold = 20
    this.touchCleanSpeed = 0.005
    this.blockedCleanSpeed = 0.02
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
        // Tache
        let alpha = 1-this.cleanLevel
        ctx.fillStyle = 'rgba(135,60,45,'+alpha+')'
        //ctx.fillRect(50,50,50,20)
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

    // Blocked - TO DO
    this.blockedAnimation = [this.walk3Image]

}

game.sprites.cat.update = function () {
    // y
    this.y = mge.game.height - 50 - this.height/2

    // Get distance to closest shower
    let closestShowerAbsDistance = 10000
    let closestShowerDistance = 10000
    game.sprites.hydro.showers.forEach(function (shower) {
        if(shower.linkedPipe.flow < 0) {
            if (Math.abs(shower.x-game.sprites.cat.x) < closestShowerAbsDistance) {
                closestShowerAbsDistance = Math.abs(shower.x-game.sprites.cat.x)
                closestShowerDistance = shower.x-game.sprites.cat.x
            }
        }
    })
    // No open shower, just walk
    if (closestShowerAbsDistance == 10000) {
        game.sprites.cat.x+=game.sprites.cat.speed
        game.sprites.cat.curAnimation = 'walk'                
    } 
    // Cat far from shower --> walk
    else if (closestShowerAbsDistance > game.sprites.cat.touchThresehold + 10) {
        game.sprites.cat.x+=game.sprites.cat.speed
        game.sprites.cat.curAnimation = 'walk'                
    }
    // Cat not in the shower but seeing it --> idle
    else if (closestShowerAbsDistance > game.sprites.cat.touchThresehold) {
        game.sprites.cat.curAnimation = 'idle'                
    }
    // Cat inside shower --> blocked
    else if (closestShowerAbsDistance <= game.sprites.cat.blockedThresehold) {
        game.sprites.cat.curAnimation = 'blocked'
        game.sprites.cat.x+=game.sprites.cat.speed*0.5
        game.sprites.cat.cleanLevel+=game.sprites.cat.blockedCleanSpeed
    }
    // Cat touched on face --> walk back
    else if (closestShowerDistance > 0) {
        game.sprites.cat.x-=game.sprites.cat.speed*2
        game.sprites.cat.curAnimation = 'walk'                
        game.sprites.cat.cleanLevel+=game.sprites.cat.touchCleanSpeed
    }
    // Cat end of level --> stop walkinf
    else if (this.x > this.maxX) {
        game.sprites.cat.curAnimation = 'idle'
    } 
    // Cat touched on back --> keep walking
    else {
        game.sprites.cat.x+=game.sprites.cat.speed*2
        game.sprites.cat.curAnimation = 'walk'                
        game.sprites.cat.cleanLevel+=game.sprites.cat.touchCleanSpeed
    }
    // Cat end of level --> stop walking
    if (this.x > this.maxX) {
        game.sprites.cat.curAnimation = 'idle'
        this.x = this.maxX
    }
    // Cap clean level
    if(this.cleanLevel>1) {this.cleanLevel=1}

}

game.sprites.cat.drawFunction = function (ctx) {
    // If game is paused, then animation = idle
    if (game.isPaused) {this.curAnimation='idle'}
    // Update animation
    if (this.curAnimation != this.lastAnimation ) {
        if(this.curAnimation == 'idle') {
            this.animation.frames = this.faceAnimation
        }
        if(this.curAnimation == 'walk') {
            this.animation.frames = this.walkAnimation
        }
        if(this.curAnimation == 'blocked') {
            this.animation.frames = this.blockedAnimation
        }
        this.animation.restart()
    }
    this.lastAnimation = this.curAnimation

    // Draw animation
    this.animation.draw(ctx)
 
}