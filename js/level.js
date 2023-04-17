class AssetImage {
  constructor(imageSrc) {
    this.image = new Image()
    this.image.src = imageSrc
  }
}

class Level {
  constructor({assets, images}){
    this.images = images
    this.assets = assets
    this.update(0,0)
    this.page = 0
  }

  draw() {
    this.currentAssets.forEach(e => {
      e.groundTiles.forEach(tile => {
      c.drawImage(this.images[tile.image].image,
        e.position.x + tile.positionOffset.x,
        e.position.y + tile.positionOffset.y,
        tile.size.width,
        tile.size.height)
    });
    e.enemies.forEach(enemy => {
      
    });
    e.props.forEach(prop => {
      c.drawImage(this.images[prop.image].image,
        e.position.x + prop.positionOffset.x,
        e.position.y + prop.positionOffset.y,
        prop.size.width,
        prop.size.height)
    });
    });
  }

  update(page, velocity) {
    if(this.page != page && this.assets[page] != undefined){
      this.currentAssets = this.assets[page]
      this.page = page
      if(this.assets[page+1] != undefined){
        this.assets[page+1].forEach(e => {
          e.position.x += canvas.width
          this.currentAssets.push(e)
        });
      }
    }
    this.currentAssets.forEach(e => {
      e.position.x += velocity
    });
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
    c.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
  }

  update() {
    this.draw()
  }
}

class Background {
  constructor({position, size, imgSrcFar, imgSrcMid, imgSrcNear, level}) {
    this.position = position
    this.size = size
    this.velocityX = 0
    this.page = 0
    this.pixelChange = 0
    this.level = level

    this.farTiles = [
      new BackTile({
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
      new BackTile({
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
      new BackTile({
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
       new BackTile({
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
      new BackTile({
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
      new BackTile({
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
      new BackTile({
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
       new BackTile({
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
      new BackTile({
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
      new BackTile({
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

    this.level.draw()
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

    this.pixelChange += -this.velocityX
    if(this.pixelChange >= this.size.width){
      this.page++
      this.pixelChange = 0
    }
    this.level.update(this.page, this.velocityX)

    this.draw()
  }
}