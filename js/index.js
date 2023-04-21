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
  scale: 1.5,
  sprites
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
  let nearbyTiles = level.getNearbyTiles(player.position.x)
  envCollision(player, nearbyTiles)

  level.activeEnemies.forEach(enemy => {
    let nearbyTiles = level.getNearbyTiles(enemy.position.x)
    envCollision(enemy, nearbyTiles)
  });
  
  checkHit()
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
          enemy.loseHealth(20, player)
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

function fall(entity, nearbyTiles){
  entity.position.y += entity.velocity.y
  entity.landed = false;
  
  nearbyTiles.forEach(tile => {
    if( entity.position.x + entity.width >= tile.x &&
        entity.position.x <= tile.x + tileSize &&
        entity.position.y + entity.height + entity.velocity.y >= tile.y &&
        entity.position.y + entity.height < tile.y + 3 + entity.velocity.y
        && tile.type != 47 && tile.type != 48) {
      entity.velocity.y = 0
      entity.position.y = (tile.y + 2) - entity.height
      entity.jumpCount = 2
      entity.landed = true
    }
  })
  if(!entity.landed) entity.velocity.y += entity.gravity
}

function envCollision(entity, nearbyTiles){
  entity.position.y += entity.velocity.y
  entity.landed = false;
  nearbyTiles.forEach(tile => {
    if(entity.position.x < tile.x + tileSize &&
      entity.position.x + entity.width > tile.x &&
      entity.position.y < tile.y + tileSize &&
      entity.position.y + entity.height > tile.y){
        let block = getLeastOverlap({
          ex: entity.position.x,
          ey: entity.position.y,
          ew: entity.width,
          eh: tileSize,
          tx: tile.x,
          ty: tile.y,
          tw: tileSize,
          th: tileSize
        })
        if(!(tile.type == '47' || tile.type == '48') || true){
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
        } else {
         // 
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
  } else if(keys.arrowUp.pressed  && !player.lastHit){
    if(player.jumpCount == 2){
      player.setAnimation('jump', true)
    } else if (player.jumpCount == 1){
      player.setAnimation('spin', true)
    }
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
window.addEventListener('load', function(){
  animate()
})