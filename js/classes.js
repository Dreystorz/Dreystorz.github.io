const gravity = 0.2

class Sprite {
  constructor({position, scale, sprites}){
    this.position = position
    this.sprites = sprites
    this.animation = 'idle'
    this.direction = 'right'
    this.scale = scale
    this.framePosition = {
      x: this.sprites[this.animation].firstFrame.x,
      y: this.sprites[this.animation].firstFrame.y
    }
    this.framesComplete = 1
    this.timer = 0
  }

  draw(){
    if(this.direction === 'right'){
      c.drawImage(
        this.sprites.image.img.image,

        ((this.sprites.image.size.width / this.sprites.image.size.framesX)
        * (this.framePosition.x-1)) + this.sprites[this.animation].offSet.x,

        ((this.sprites.image.size.height / this.sprites.image.size.framesY)
        * (this.framePosition.y-1)) + this.sprites[this.animation].offSet.y,

        this.sprites[this.animation].width,
        this.sprites[this.animation].height,
        this.position.x,
        this.position.y,
        (this.sprites[this.animation].width * this.scale),
        (this.sprites[this.animation].height * this.scale),
      )
    } else {
      c.drawImage(
        this.sprites.imageReverse.img.image,

        ((this.sprites.image.size.width / this.sprites.image.size.framesX)
        * (this.sprites.image.size.framesX - (this.framePosition.x))) +
        this.sprites[this.animation].offSet.x*0.7,

        ((this.sprites.image.size.height / this.sprites.image.size.framesY)
        * (this.framePosition.y-1)) + this.sprites[this.animation].offSet.y,

        this.sprites[this.animation].width,
        this.sprites[this.animation].height,
        this.position.x,
        this.position.y,
        (this.sprites[this.animation].width * this.scale),
        (this.sprites[this.animation].height * this.scale),
      )
    }
  }

  update(){
    if(this.timer >= this.sprites[this.animation].frameTime){
      if(this.framesComplete < this.sprites[this.animation].frames - 1){
        if(this.framePosition.x < this.sprites.image.size.framesX){
          this.framePosition.x++
        } else {
          this.framePosition.y++
          this.framePosition.x = 1
        }
        this.framesComplete++
      } else {
        this.framePosition.x = this.sprites[this.animation].firstFrame.x
        this.framePosition.y = this.sprites[this.animation].firstFrame.y
        this.framesComplete = 0
      }
      this.timer = 0
    } else {
      this.timer++
    }
  }

  setAnimation(animation){
    if(this.animation !== animation){
      this.animation = animation
      this.framePosition.x = this.sprites[this.animation].firstFrame.x
      this.framePosition.y = this.sprites[this.animation].firstFrame.y
      this.framesComplete = 0
    }
  }
}

class Player extends Sprite{
  constructor({position, scale, sprites, height = 46, width = 30}) {
    super({position, scale, sprites})
    this.position = position
    this.height = height
    this.width = width
    this.velocity = {x: 0, y: 0}
    this.jumpCount = 2
    this.crash = false
    this.landed = false
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
    super.draw()
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
      this.attackBox.position.x = this.position.x - this.attackBox.width
      this.attackBox.position.y = this.position.y + this.height* 0.1
    }
    if(this.direction === 'right'){
      this.attackBox.position.x = this.position.x + this.width
      this.attackBox.position.y = this.position.y + this.height* 0.1
    }
  }

  update() {
    this.draw()
    this.fall()
    super.update()
    this.updateAttackBox()
    this.position.x += this.velocity.x
  }

  fall(){
    if((this.animation === 'jump' || this.animation === 'spin') &&
    this.framesComplete == this.sprites[this.animation].frames - 1){
      this.setAnimation('fall')
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
    if(this.crash){
      setTimeout(() => {
        this.crash = false
      }, 200);
    } else {
      this.velocity.x = -4
      this.direction = 'left'
    }
  }

  moveRight() {
    if(this.crash){
      setTimeout(() => {
        this.crash = false
      }, 200);
    } else {
      this.velocity.x = 4
      this.direction = 'right'
    }
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

