const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 574

function drawCanvas() {
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
}

/*--------Asset Declerations-------*/

const background = new Background({
  position: { x: 0, y: 0},
  size: {width: canvas.width, height: canvas.height},
  imgSrcFar: 'img/Tall Forest Files/Layers/back.png',
  imgSrcMid: 'img/Tall Forest Files/Layers/far.png',
  imgSrcNear: 'img/Tall Forest Files/Layers/middle.png'
})
background.groundTiles.push()
const tiles = {
  position: {x: 0, y: 0},
  size: {width: 48, height: 48},
  imgSrc: 'img/Tall Forest Files/Layers/tileset 1.png' 
}

const ground = new Ground({
  position: {x: 500, y: canvas.height - 48},
  tiles: [tiles]
})

background.groundTiles.push(ground)

const player = new Player({
  position: {x: 512, y: 0},
  velocity: {x: 0, y: 0},
  groundBelow: null
})

/*----------------------------------*/

const keys = {
  arrowUp: {
    pressed: false
  },
  arrowDown: {
    pressed: false
  },
  arrowLeft: {
    pressed: false
  },
  arrowRight: {
    pressed: false
  },
  space: {
    pressed: false
  }
}

function checkCollisions(){
  updateGround(player)


}

function updateGround(character){
  let groundSet = false
  background.groundTiles.forEach(tile => {
    if(character.position.x + character.width >= tile.position.x 
      && character.position.x <= tile.position.x + tile.size.width){
        character.groundBelow = tile
        groundSet = true
      }
  });
  if(!groundSet){
    character.groundBelow = null
  }
}

function controlPlayer() {
  if(keys.arrowLeft.pressed && keys.arrowRight.pressed){
    player.stopHorizontalMove()
    background.stopScroll()
  } else if(keys.arrowLeft.pressed){
    if(player.position.x <= 0){
      player.stopHorizontalMove()
    } else {
      player.moveLeft()
    }
  } else if(keys.arrowRight.pressed){
    if(player.position.x + player.width > canvas.width - 200){
      player.stopHorizontalMove()
      background.scrollLeft()
    } else {
      background.stopScroll()
      player.moveRight()
    }
  } else {
    player.stopHorizontalMove()
    background.stopScroll()
  }

  if(keys.arrowUp.pressed && keys.arrowDown.pressed){
    keys.arrowUp.pressed = false
    keys.arrowDown.pressed = false
  } else if(keys.arrowUp.pressed){
    player.jump()
    keys.arrowUp.pressed = false
  } else if(keys.arrowDown.pressed){
    player.slam()
    keys.arrowDown.pressed = false
  }

  if(keys.space.pressed){
    player.doAction()
  }
}

function animate() {
  window.requestAnimationFrame(animate)
  drawCanvas()
  background.update()
  player.update()
  controlPlayer()
  checkCollisions()
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      keys.arrowUp.pressed = true
      break;

    case 'ArrowDown':
      keys.arrowDown.pressed = true
      break;

    case 'ArrowLeft':
      keys.arrowLeft.pressed = true
      break;

    case 'ArrowRight':
      keys.arrowRight.pressed = true
      break;

    case ' ':
      keys.space.pressed = true
      break;
  
    default:
      break;
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      keys.arrowLeft.pressed = false
      break;

    case 'ArrowRight':
      keys.arrowRight.pressed = false
      break;

    case ' ':
      keys.space.pressed = false
      break;
  
    default:
      break;
  }
})

animate()