/*------------------------Initialization---------------------------*/
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 640

function drawCanvas() {
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
}

/*------------------------End Test Data---------------------------*/

/*--------Asset Declerations-------*/
const player = new Player({
  position: {x: 510, y: 440},
  scale: 1,
  sprites: playerAssets
})

const level = new Level({player})

const background = new Background({
  imageSize: {width: 576, height: 324},
  img1: 'img/Assets/2 Background/Layers/1.png',
  img2: 'img/Assets/2 Background/Layers/2.png',
  img3: 'img/Assets/2 Background/Layers/3.png',
  img4: 'img/Assets/2 Background/Layers/4.png',
  img5: 'img/Assets/2 Background/Layers/5.png',
  level
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
  let nearbyTiles = level.getNearbyTiles(player.position.x,player.position.y)
  envCollision(player, nearbyTiles)
  collectItems(player)
  checkInteract(player)

  level.activeEnemies.forEach(enemy => {
    let nearbyTiles = level.getNearbyTiles(enemy.position.x,enemy.position.y)
    envCollision(enemy, nearbyTiles)
  });
  
  checkHit()
}

function collectItems(entity){
  level.collectibles.forEach(item => {
    if(entity.position.x < item.position.x + item.image.w &&
      entity.position.x + entity.width > item.position.x &&
      entity.position.y < item.position.y + item.image.h &&
      entity.position.y + entity.height > item.position.y){
        item.collect(entity)
    }
  })
}

function checkInteract(entity){
  level.activeIProps.forEach(prop => {
    if(entity.position.x < prop.position.x + prop.image.w &&
      entity.position.x + entity.width > prop.position.x &&
      entity.position.y < prop.position.y + prop.image.h &&
      entity.position.y + entity.height > prop.position.y && entity.interact){
        prop.open(entity)
    }
  })
}

function checkHit(){
  level.activeEnemies.forEach(enemy => {
    if( player.attackBox.hitRegistered && player.attackBox.attacking &&
        player.attackBox.position.x + player.attackBox.width > enemy.position.x &&
        player.attackBox.position.x < enemy.position.x + enemy.width &&
        player.attackBox.position.y + player.attackBox.height > enemy.position.y &&
        player.attackBox.position.y < enemy.position.y + enemy.height
      ){
        if(!enemy.lastHit){
          enemy.loseHealth(20, 400)
        }
    }
    if( enemy.attackBox.hitRegistered &&
        enemy.attackBox.position.x + enemy.attackBox.width > player.position.x &&
        enemy.attackBox.position.x < player.position.x + player.width &&
        enemy.attackBox.position.y + enemy.attackBox.height > player.position.y &&
        enemy.attackBox.position.y < player.position.y + player.height
      ){
        player.loseHealth(20, enemy)
      }
  });
}

function envCollision(entity, nearbyTiles){
  if(entity.position.y > canvas.height){
    entity.lastHit = true
    return
  }
  entity.position.y += entity.velocity.y
  entity.landed = false;
  nearbyTiles.forEach(tile => {
    if(entity.position.x < tile.x + tileSize &&
      entity.position.x + entity.width > tile.x &&
      entity.position.y < tile.y + tileSize &&
      entity.position.y + entity.height > tile.y){
        let block = getLeastOverlap({
          ex: entity.position.x,
          ey: entity.position.y + entity.velocity.y,
          ew: entity.width,
          eh: tileSize,
          tx: tile.x,
          ty: tile.y,
          tw: tileSize,
          th: tileSize
        })
        // c.fillStyle = 'red'
        // c.fillRect(
        //   tile.x,
        //   tile.y,
        //   tileSize,
        //   tileSize
        // )
        if(!(tile.type == '47' ||
        tile.type == '48' ||
        tile.type == '57' ||
        tile.type == '58' ||
        tile.type == '7' ||
        tile.type == '8' ||
        tile.type == '9' ||
        tile.type == '39' ||
        tile.type == '49' ||
        tile.type == '59')){
          switch (block) {
            case 'below':
              entity.velocity.y = 0
              entity.position.y = tile.y - entity.height
              entity.jumpCount = 2
              entity.landed = true
              break;

            case 'above':
              entity.velocity.y = 0
              entity.position.y = tile.y + tileSize 
              break;

            case 'left':
              entity.velocity.x = 0
              entity.position.x = tile.x + tileSize
              break;

            case 'right':
              entity.velocity.x = 0
              entity.position.x = tile.x - entity.width
              break;
          
            default:
              break;
          }
        } else {//y = mx + b, ey+eh = 1*ex+ey + //7,8,9,39,49,59
          if(tile.type == '47' &&
          entity.position.y > tile.y + tileSize - (entity.position.x + entity.width-tile.x) - entity.height+entity.width/2
          && entity.position.x+entity.width/2 < tile.x+tileSize){
            entity.velocity.y = 0
            entity.position.y = tile.y + tileSize - (entity.position.x + entity.width-tile.x) - entity.height+entity.width/2
            entity.jumpCount = 2
            entity.landed = true
          }
          if(tile.type == '48' && // probably incorrect
          entity.position.y > tile.y + tileSize - (entity.position.x + entity.width-tile.x) - entity.height+entity.width/2
          && entity.position.x+entity.width/2 < tile.x+tileSize){
            entity.velocity.y = 0
            entity.position.y = tile.y + tileSize - (entity.position.x + entity.width-tile.x) - entity.height+entity.width/2
            entity.jumpCount = 2
            entity.landed = true
          }
          if((tile.type == '7' ||
          tile.type == '8' ||
          tile.type == '9' ||
          tile.type == '39' ||
          tile.type == '49' ||
          tile.type == '59') &&
          block == 'below' && 
          entity.position.y + entity.height <= tile.y + entity.velocity.y){
            entity.velocity.y = 0
            entity.position.y = tile.y - entity.height
            entity.jumpCount = 2
            entity.landed = true
          }
        }
      }
  });
  if(!entity.landed) {
    entity.velocity.y += entity.gravity
  }
}

function getLeastOverlap({ex, ey, ew, eh, tx, ty, tw, th}){
  let below = -Math.abs(ty-ey+eh)
  let left = -Math.abs(ex-tx+tw)
  let right = -Math.abs(tx-ex+ew)
  let above = -Math.abs(ey-ty+th)
  if(below < right && below < left && below < above){
    return 'below'
  }
  if(above < below && above < left && above < right){
    return 'above'
  }
  if(left < below && left < right && left < above){
    return 'left'
  }
  if(right < below && right < left && right < above){
    return 'right'
  }
}

function controlPlayer() {
  if(keys.arrowLeft.pressed && keys.arrowRight.pressed  && !player.lastHit){
    if(player.landed && !player.attackBox.attacking) player.setAnimation('idle', false)
    player.stopHorizontalMove()
    background.stopScroll()
  } else if(keys.arrowLeft.pressed && !player.lastHit){
    if(player.position.x <= 0){
      player.stopHorizontalMove()
      //background.scrollRight()
    } else {
      background.stopScroll()
      player.moveLeft()
    }
    if(player.landed  && !player.attackBox.attacking) player.setAnimation('run', false)
  } else if(keys.arrowRight.pressed  && !player.lastHit){
    if(player.position.x + player.width > canvas.width - 200){
      player.stopHorizontalMove()
      background.scrollLeft()
    } else {
      background.stopScroll()
      player.moveRight()
    }
    if(player.landed && !player.attackBox.attacking) player.setAnimation('run')
  } else {
    if(player.landed && !player.attackBox.attacking && !player.lastHit) player.setAnimation('idle')
    player.stopHorizontalMove()
    background.stopScroll()
  }

  if(keys.arrowUp.pressed && keys.arrowDown.pressed){
    keys.arrowUp.pressed = false
    keys.arrowDown.pressed = false
  } else if(keys.arrowUp.pressed  && !player.lastHit && player.jumpCount > 0){
    player.setAnimation('jump', true)
    player.jump()
    keys.arrowUp.pressed = false
  } else if(keys.arrowDown.pressed  && !player.lastHit){
    player.slam()
    keys.arrowDown.pressed = false
  }

  if(keys.space.pressed){
    player.doAction()
  }
}

const coinCountImg = new Image()
coinCountImg.src = 'img/Assets/CoinCount.png'

const keyCountImg = new Image()
keyCountImg.src = 'img/Assets/KeyCount.png'

function drawCounts(){
  c.fillStyle = 'black'
  c.font = "18px sans-serif"
  c.drawImage(
    coinCountImg,
    canvas.width - 100,
    20,
    44,
    32
  )
  c.fillText(player.coins, canvas.width - 55, 42)

  c.drawImage(
    keyCountImg,
    canvas.width - 100,
    50,
    44,
    32
  )
  c.fillText(player.keys, canvas.width - 55, 72)
}


function animate() {
  window.requestAnimationFrame(animate)
  drawCanvas()
  background.update()
  player.update()
  controlPlayer()
  checkCollisions()
  drawCounts()
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

    case 'Shift':
      player.interact = true
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

    case 'Shift':
      player.interact = false
      break;
  
    default:
      break;
  }
})
window.addEventListener('load', function(){
  animate()
})