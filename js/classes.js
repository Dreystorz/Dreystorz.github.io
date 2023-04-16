const gravity = 0.2

class Player {
  constructor({position, velocity, groundBelow}) {
    this.position = position
    this.velocity = velocity
    this.width = 25
    this.height = 50
    this.jumpCount = 2
    this.direction = 'right'
    this.groundBelow = groundBelow
    this.attackBox = {
      attaking: false,
      width: 25,
      height: 40,
      position: {
        x: this.position.x + this.width,
        y: this.position.y + this.height
      }
    }
  }

  draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)

    if(this.attackBox.attaking){
      c.fillStyle = 'white'
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height)
    }
  }

  updateAttackBox() {
    if(this.direction === 'left') {
      this.attackBox.position.x = this.position.x - this.width
      this.attackBox.position.y = this.position.y + this.height* 0.1
    }
    if(this.direction === 'right'){
      this.attackBox.position.x = this.position.x + this.width
      this.attackBox.position.y = this.position.y + this.height* 0.1
    }
  }

  updateGround(groundBelow){
    this.groundBelow = groundBelow
  }

  update() {
    this.updateAttackBox()
    this.draw()
    this.obeyGravity()
    this.position.y += this.velocity.y
  }

  obeyGravity() {
    this.position.x += this.velocity.x

    let tile;
    if(this.groundBelow != null &&
      this.groundBelow.getCurrentTile(this.position.x, this.width) != null ){
        tile = this.groundBelow.getCurrentTile(this.position.x, this.width)
    }

    if(tile != null && this.position.y + this.height + this.velocity.y >= tile.y &&
      this.position.y + this.height <= tile.y){
      this.velocity.y = 0
      this.position.y = 
        tile.y - this.height
      this.jumpCount = 2;
    } else {
      this.velocity.y += gravity
    }
  }

  jump() {
    if(this.jumpCount > 0){
      this.velocity.y = -5
      this.jumpCount -= 1;
    }
  }

  slam() {
    this.velocity.y = 10
  }

  moveLeft() {
    this.velocity.x = -4
    this.direction = 'left'
  }

  moveRight() {
    this.velocity.x = 4
    this.direction = 'right'
  }

  stopHorizontalMove(){
    this.velocity.x = 0
  }

  doAction() {
    this.attackBox.attaking = true
    setTimeout(() => {
      this.attackBox.attaking = false
    }, 100);
  }
}

class Ground {
  constructor({position, tiles}){
    this.position = position,
    this.tiles = []
    tiles.forEach(tile => {
      let temp = new GroundTile(this.position.x + tile.position.x,
        this.position.y + tile.position.y,
        tile.size, tile.imgSrc)
      this.tiles.push(temp)
    });
    this.size = {
      width: 48,
      height: 48
    }
  }

  draw() {
    this.tiles.forEach(tile => {
      c.drawImage(tile.image, tile.x, tile.y)
    });
  }

  update() {
    this.draw()
  }

  getCurrentTile(x, width) {
    let temp = null;
    this.tiles.forEach(tile => {
      if(x + width >= tile.x 
      && x <= tile.x + tile.size.width && temp == null){
        temp = tile;
      }
    });
    return temp;
  }
}

class GroundTile {
  constructor(positionX, positionY, size, imgSrc){
    this.x = positionX
    this.y = positionY
    this.size = size
    this.image = new Image()
    this.image.src = imgSrc
  }
}

class Sprite {
  constructor({position, size, imgSrc}) {
    this.position = position
    this.size = size
    this.image = new Image()
    this.image.src = imgSrc
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
  }

  update() {
    this.draw()
  }
}

class Background {
  constructor({position, size, imgSrcFar, imgSrcMid, imgSrcNear}) {
    this.position = position
    this.size = size
    this.velocityX = 0
    this.groundTiles = []

    this.farTiles = [
      new Sprite({
        position: {
          x: position.x,
          y: position.y
        },
        size: {
          width: 345,
          height: size.height
        },
        imgSrc: imgSrcFar
      }),
      new Sprite({
        position: {
          x: position.x + 345,
          y: position.y
        },
        size: {
          width: 345,
          height: size.height
        },
        imgSrc: imgSrcFar
      }),
      new Sprite({
        position: {
          x: position.x + 345 * 2,
          y: position.y
        },
        size: {
          width: 345,
          height: size.height
        },
        imgSrc: imgSrcFar
      }),
       new Sprite({
        position: {
          x: position.x + 345 * 3,
          y: position.y
        },
        size: {
          width: 345,
          height: size.height
        },
        imgSrc: imgSrcFar
      })
    ]

    this.midTiles = [
      new Sprite({
        position: {
          x: position.x,
          y: position.y
        },
        size: {
          width: 420,
          height: size.height
        },
        imgSrc: imgSrcMid
      }),
      new Sprite({
        position: {
          x: position.x + 420,
          y: position.y
        },
        size: {
          width: 420,
          height: size.height
        },
        imgSrc: imgSrcMid
      }),
      new Sprite({
        position: {
          x: position.x + 420 * 2,
          y: position.y
        },
        size: {
          width: 420,
          height: size.height
        },
        imgSrc: imgSrcMid
      }),
       new Sprite({
        position: {
          x: position.x + 420 * 3,
          y: position.y
        },
        size: {
          width: 420,
          height: size.height
        },
        imgSrc: imgSrcMid
      })
    ]

    this.nearTiles = [
      new Sprite({
        position: {
          x: position.x + 100,
          y: position.y
        },
        size: {
          width: 460,
          height: size.height
        },
        imgSrc: imgSrcNear
      }),
      new Sprite({
        position: {
          x: position.x + 600,
          y: position.y
        },
        size: {
          width: 460,
          height: size.height
        },
        imgSrc: imgSrcNear
      })
    ]
  }

  draw() {
    this.farTiles.forEach(tile => {
      tile.update()
    });

    this.midTiles.forEach(tile => {
      tile.update()
    });

    this.nearTiles.forEach(tile => {
      tile.update()
    });

    this.drawGround()
  }
  
  drawGround(){
    this.groundTiles.forEach(tile => {
      tile.draw()
  });
}

  scrollLeft() {
    this.velocityX = -4
  }

  stopScroll() {
    this.velocityX = 0
  }

  update() {
    this.farTiles.forEach(tile => {
      if(tile.position.x + tile.size.width <= 0){
        tile.position.x = tile.size.width*3 - 1
      }
      tile.position.x += this.velocityX/4
    });

    this.midTiles.forEach(tile => {
      if(tile.position.x + tile.size.width <= 0){
        tile.position.x = tile.size.width*3 - 1
      }
      tile.position.x += this.velocityX/2
    });

    this.nearTiles.forEach(tile => {
      if(tile.position.x + tile.size.width <= 0){
        tile.position.x = canvas.width + Math.floor(Math.random() * 500)
      }
      tile.position.x += this.velocityX
    });

    this.groundTiles.forEach(tile => {
      tile.position.x += this.velocityX
    });
    this.draw()
  }
}