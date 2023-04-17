const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 574

function drawCanvas() {
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
}

/*------------------------Test Data---------------------------*/
const assets = [[

  {
    position: {x: 450, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 400, y:352},
    size: {width: 193, height: 96},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 48},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 48},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 48},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 48},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 0, y:526},
    size: {width: 624, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 192, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 240, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 288, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 336, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 384, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 432, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 480, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 528, y: 0},
        size: {width: 48, height: 48}
      },{
        image: 'tileset1',
        positionOffset: {x: 576, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 831, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  }],[
  {
    position: {x: 450, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48},
        end: {
          left: true,
          right: true
        }
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 0, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 831, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  }],[
  {
    position: {x: 450, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 0, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 831, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  }],[
  {
    position: {x: 450, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 0, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 831, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  }],[
  {
    position: {x: 450, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 0, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  },{
    position: {x: 831, y:526},
    size: {width: 193, height: 48},
    groundTiles: [
      {
        image: 'tileset1',
        positionOffset: {x: 0, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 48, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 96, y: 0},
        size: {width: 48, height: 48}
      },
      {
        image: 'tileset1',
        positionOffset: {x: 144, y: 0},
        size: {width: 48, height: 48}
      }
    ],
    props: [
      {
        image: 'plant',
        positionOffset: {x: 24 - 22, y: 0-22},
        size: {width: 42, height: 27}
      }
    ],
    enemies: [
      /*{
        position: {x,y},
        size: {width, height},
        animations: [],
        health,
        damage
      }*/
    ]
  }]
]

const images = {
  'tileset1': new AssetImage('img/Tall Forest Files/Layers/tileset 1.png')
  ,
  'moss1': new AssetImage('img/Tall Forest Files/Layers/Props/moss-1.png')
  ,
  'moss2': new AssetImage('img/Tall Forest Files/Layers/Props/moss-2.png')
  ,
  'plant': new AssetImage('img/Tall Forest Files/Layers/Props/Plant.png')
  ,
  'rock': new AssetImage('img/Tall Forest Files/Layers/Props/Rock.png')
}

/*------------------------End Test Data---------------------------*/

/*--------Asset Declerations-------*/
const level = new Level({assets, images})

const background = new Background({
  position: { x: 0, y: 0},
  size: {width: canvas.width, height: canvas.height},
  imgSrcFar: 'img/Tall Forest Files/Layers/back.png',
  imgSrcMid: 'img/Tall Forest Files/Layers/far.png',
  imgSrcNear: 'img/Tall Forest Files/Layers/middle.png',
  level
})

const sprites = {
  image: {
    img: new AssetImage('img/adventurer.png'),
    size: {
      width: 400,
      height: 444,
      framesX: 8,
      framesY: 12
    }
  },
  imageReverse: {
    img: new AssetImage('img/adventurer-reverse.png'),
    size: {
      width: 400,
      height: 444,
      framesX: 8,
      framesY: 12
    }
  },
  'run': {
    width: 25,
    height: 36,
    frames: 6,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 2
    },
    offSet: {
      x: 16,
      y: 6
    }
  },
  'idle': {
    width: 25,
    height: 36,
    frames: 4,
    frameTime: 10,
    firstFrame: {
      x: 1,
      y: 1
    },
    offSet: {
      x: 14,
      y: 6
    }
  },
  'jump': {
    width: 25,
    height: 36,
    frames: 10,
    frameTime: 4,
    firstFrame: {
      x: 7,
      y: 2
    },
    offSet: {
      x: 14,
      y: 4
    }
  },
  'spin': {
    width: 25,
    height: 36,
    frames: 9,
    frameTime: 4,
    firstFrame: {
      x: 8,
      y: 2
    },
    offSet: {
      x: 14,
      y: 4
    }
  },
  'fall': {
    width: 25,
    height: 36,
    frames: 2,
    frameTime: 4,
    firstFrame: {
      x: 7,
      y: 3
    },
    offSet: {
      x: 14,
      y: 4
    }
  }
}

const player = new Player({
  position: {x: 512, y: 0},
  scale: 1.5,
  sprites
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
  fall(player)
  background.level.currentAssets.forEach(tile => {
    tile.groundTiles.forEach(e => {
      envCollision({tile,e})
    })
  });
}

function fall(player){
  player.position.y += player.velocity.y
  player.landed = false;
  background.level.currentAssets.forEach(e => {
    e.groundTiles.forEach(tile => {
      if( player.position.x + player.width >= e.position.x + tile.positionOffset.x &&
          player.position.x <= e.position.x + tile.positionOffset.x + tile.size.width &&
          player.position.y + player.height + player.velocity.y >= e.position.y + tile.positionOffset.y &&
          player.position.y + player.height < e.position.y + tile.positionOffset.y + 6) {
        player.velocity.y = 0
        player.position.y = (e.position.y + tile.positionOffset.y + 5) - player.height
        player.jumpCount = 2
        player.landed = true
      }
    })
  }); 
  if(!player.landed) player.velocity.y += gravity
}

function envCollision({tile,e}){
  if(tile.position.y + e.positionOffset.y <= player.position.y &&
    tile.position.y + e.positionOffset.y + e.size.height >= player.position.y &&
    player.position.x + player.width > tile.position.x + e.positionOffset.x &&
    player.position.x < tile.position.x + e.positionOffset.x + e.size.width){
      if(player.position.x < tile.position.x + e.positionOffset.x + e.size.width &&
        !(player.position.x + player.width < tile.position.x + e.positionOffset.x + e.size.width)){
          player.position.x = tile.position.x + e.positionOffset.x + e.size.width + 1
          player.crash = true
          player.velocity.x = 0
      }
      if(player.position.x + player.width > tile.position.x + e.positionOffset.x &&
        !(player.position.x > tile.position.x + e.positionOffset.x)){
          player.position.x = tile.position.x + e.positionOffset.x + - player.width - 1
          player.crash = true
          player.velocity.x = 0
      }
      if(player.velocity.y < 0){
        player.velocity.y = 0
      }
  }
}

function controlPlayer() {
  if(keys.arrowLeft.pressed && keys.arrowRight.pressed){
    if(player.landed) player.setAnimation('idle')
    player.stopHorizontalMove()
    background.stopScroll()
  } else if(keys.arrowLeft.pressed){
    if(player.position.x <= 0){
      player.stopHorizontalMove()
    } else {
      player.moveLeft()
    }
    if(player.landed) player.setAnimation('run')
  } else if(keys.arrowRight.pressed){
    if(player.position.x + player.width > canvas.width - 200){
      player.stopHorizontalMove()
      background.scrollLeft()
    } else {
      background.stopScroll()
      player.moveRight()
    }
    if(player.landed) player.setAnimation('run')
  } else {
    if(player.landed) player.setAnimation('idle')
    player.stopHorizontalMove()
    background.stopScroll()
  }

  if(keys.arrowUp.pressed && keys.arrowDown.pressed){
    keys.arrowUp.pressed = false
    keys.arrowDown.pressed = false
  } else if(keys.arrowUp.pressed){
    if(player.jumpCount == 2){
      player.setAnimation('jump')
    } else if (player.jumpCount == 1){
      player.setAnimation('spin')
    }
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
window.addEventListener('load', function(){
  animate()
})