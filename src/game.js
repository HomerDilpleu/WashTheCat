// Game description
game = {
  // Structure of the game
  scenes: {
    boot : {},
    main : {}
  },
  sprites:{
    button: mge.game.createSprite(),
    cat: mge.game.createSprite(),
    hydro: mge.game.createSprite()
  },
  levels:[],
  curLevel:0,
  isPaused:false,
//  variables:{},
  instruments:{},
  songs:{},
//  utils:{}
}

// Remove "Loading" div and start the game
window.addEventListener("load", (event) => {
  let loading = document.getElementById("loading")
  loading.remove()
  mge.game.width = 1280
  mge.game.height = 720
  mge.game.start(game.scenes.boot)
}
)