class Level {
  constructor({player}){
    this.activeEnemies = []
    this.update(0,0)
    this.pixelChange = 0
    this.page = 0
    this.player = player

    this.loadEnemies({section: this.pixelChange/tileSize, offset: 0})
  }

  loadEnemies({section, offset = 1}){
    this.activeEnemies = this.activeEnemies.filter(enemy => !enemy.dead)
    for (let i = 0; i < canvas.width/tileSize; i++) {
      if(enemies[section+i] != undefined){
        enemies[section+i].forEach((e) => {
          let enemy
          switch (e.type) {
            case 'skeleton':
              enemy = new Skeleton({
                position: {
                  x: e.x + (i*tileSize) + (canvas.width*offset),
                  y: e.y
                }
              })
              break;
              case 'mushroom':
              enemy = new Mushroom({
                position: {
                  x: e.x + (i*tileSize) + (canvas.width*offset),
                  y: e.y
                }
              })
              break;

            case 'goblin':
              enemy = new Goblin({
                position: {
                  x: e.x + (i*tileSize) + (canvas.width*offset),
                  y: e.y
                }
              })
              break;

            case 'flying_eye':
              enemy = new FlyingEye({
                position: {
                  x: e.x + (i*tileSize) + (canvas.width*offset),
                  y: e.y
                }
              })
              break;
          
            default:
              break;
          }
          enemy.player = this.player
          this.activeEnemies.push(enemy)
        })
      }
    }
  }

  draw() {
    for (let i = 0; i <= canvas.width/tileSize; i++) {
      for (let j = 0; j <= canvas.height/tileSize; j++) {
        if(map[(Math.floor(this.pixelChange/tileSize))+i] != undefined &&
          map[(Math.floor(this.pixelChange/tileSize))+i][j] > 0){
          c.drawImage(
            tiles[(map[(Math.floor(this.pixelChange/tileSize))+i][j]-1)].image,
            i*tileSize-this.pixelChange%tileSize,
            j*tileSize,
            tileSize,
            tileSize
          )
        }
      } 
    }
    for (let i = -6; i < canvas.width/tileSize+2; i++) {
      if(props[Math.floor(this.pixelChange/tileSize)+i] != undefined){
        props[Math.floor(this.pixelChange/tileSize)+i].forEach((prop) => {
          c.drawImage(
            assets[prop.type].image,
            prop.x+(i*tileSize)-(this.pixelChange%tileSize),
            prop.y,
            assets[prop.type].width,
            assets[prop.type].height
          )
        })
      }
    }

    this.activeEnemies.forEach(enemy => {
      enemy.draw()
    });
  }

  update(velocity) {
    this.pixelChange -= velocity
    this.activeEnemies.forEach(enemy => {
      enemy.position.x += velocity
      enemy.update()
    });
    if(this.page < Math.floor(this.pixelChange/canvas.width)+1){
      this.loadEnemies({section: (this.pixelChange+canvas.width)/tileSize})
      this.page++
    }
  }

  getNearbyTiles(entityPosX){
    let tiles = []
    if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)-1] != null){
      for(let i = 0; i < canvas.height/tileSize; i++){
        if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)-1][i] > 0){
          tiles.push({
            type: map[Math.floor((entityPosX+this.pixelChange)/tileSize)][i],
            x: (Math.floor((entityPosX+this.pixelChange)/tileSize-1)*tileSize)-this.pixelChange,
            y: i*tileSize
          })
        }
      }
    }
    if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)] != null){
      for(let i = 0; i < canvas.height/tileSize; i++){
        if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)][i] > 0){
          tiles.push({
            type: map[Math.floor((entityPosX+this.pixelChange)/tileSize)][i],
            x: (Math.floor((entityPosX+this.pixelChange)/tileSize)*tileSize)-this.pixelChange,
            y: i*tileSize
          })
        }
      }
    }
    if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)+1] != null){
      for(let i = 0; i < canvas.height/tileSize; i++){
        if(map[Math.floor((entityPosX+this.pixelChange)/tileSize)+1][i] > 0){
          tiles.push({
            type: map[Math.floor((entityPosX+this.pixelChange)/tileSize)+1][i],
            x: (Math.floor((entityPosX+this.pixelChange)/tileSize)+1)*tileSize-this.pixelChange,
            y: i*tileSize
          })
        }
      }
    }
    return tiles
  }
}

class BackTile {
  constructor({position, size, imgSrc}) {
    this.position = position
    this.size = size
    this.image = new Image()
    this.image.src = imgSrc
  }

  draw() {
    c.drawImage(this.image, 0, 0, this.size.width,
      this.size.height, this.position.x, this.position.y, canvas.width, canvas.height)
  }

  update() {
    this.draw()
  }
}

class Background {
  constructor({imageSize, img1, img2, img3, img4, img5, level}) {
    this.imageSize = imageSize
    this.velocity = 0
    this.page = 0
    this.pixelChange = 0
    this.level = level

    this.tiles1 = [
      new BackTile({
        position: {x: 0, y: 0},
        size: imageSize,
        imgSrc: img1
      })
    ]
    this.tiles2 = [
      new BackTile({
        position: {x: 0, y: 0},
        size: imageSize,
        imgSrc: img2
      }),
      new BackTile({
        position: {x: canvas.width, y: 0},
        size: imageSize,
        imgSrc: img2
      })
    ]
    this.tiles3 = [
      new BackTile({
        position: {x: 0, y: 0},
        size: imageSize,
        imgSrc: img3
      }),
      new BackTile({
        position: {x: canvas.width, y: 0},
        size: imageSize,
        imgSrc: img3
      })
    ]
      this.tiles4 = [
      new BackTile({
        position: {x: 0, y: 0},
        size: imageSize,
        imgSrc: img4
      }),
      new BackTile({
        position: {x: canvas.width, y: 0},
        size: imageSize,
        imgSrc: img4
      })
    ]
      this.tiles5 = [
      new BackTile({
        position: {x: 0, y: 0},
        size: imageSize,
        imgSrc: img5
      }),
      new BackTile({
        position: {x: canvas.width, y: 0},
        size: imageSize,
        imgSrc: img5
      })
    ]
  }

  draw() {
    this.tiles1.forEach(tile => {
      tile.update()
    });
    this.tiles2.forEach(tile => {
      tile.update()
    });
    this.tiles3.forEach(tile => {
      tile.update()
    });
    this.tiles4.forEach(tile => {
      tile.update()
    });
    this.tiles5.forEach(tile => {
      tile.update()
    });

    this.level.draw()
  }

  scrollLeft() {
    this.velocity = -4
  }

  scrollRight(){
    this.velocity = 4
  }

  stopScroll() {
    this.velocity = 0
  }

  update() {
    this.draw()
    this.tiles2.forEach(tile => {
      if(tile.position.x + canvas.width <= 0){
        tile.position.x = canvas.width
      }
      tile.position.x += this.velocity/8
    });
    this.tiles3.forEach(tile => {
      if(tile.position.x + canvas.width <= 0){
        tile.position.x = canvas.width
      }
      tile.position.x += this.velocity/6
    });
    this.tiles4.forEach(tile => {
      if(tile.position.x + canvas.width <= 0){
        tile.position.x = canvas.width
      }
      tile.position.x += this.velocity/4
    });
    this.tiles5.forEach(tile => {
      if(tile.position.x + canvas.width <= 0){
        tile.position.x = canvas.width
      }
      tile.position.x += this.velocity/3
    });
    this.pixelChange += -this.velocity
    if(this.pixelChange >= canvas.width){
      this.page++
      this.pixelChange = 0
    }
    this.level.update(this.velocity)
  }
}