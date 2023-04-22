const universialGravity = 0.2

class Sprite {
  constructor({position, scale, sprites, animation}){
    this.position = position
    this.sprites = sprites
    this.animation = animation
    this.prevAnimation = animation
    this.once = false
    this.direction = 'right'
    this.scale = scale
    if(sprites != null){
      this.framePosition = {
        x: this.sprites[this.animation].firstFrame.x,
        y: this.sprites[this.animation].firstFrame.y
    }
    }
    this.framesComplete = 1
    this.timer = 0
    this.dead = false
    this.lastHit = false
    this.image
    this.cantCancel
  }

  draw(){
    // c.fillText = 'white'
    // c.fillRect(this.position.x,
    //   this.position.y,
    //   this.width,
    //   this.height)
    if(this.direction === 'right'){
      let image = this.sprites[this.animation].img
      c.drawImage(
        this.sprites[image].img.image,
        //------------------------------------------------------------------------------
        ((this.sprites[image].size.width / this.sprites[image].size.framesX)
        * (this.framePosition.x-1)),
        //------------------------------------------------------------------------------
        ((this.sprites[image].size.height / this.sprites[image].size.framesY)
        * (this.framePosition.y-1)),
        //------------------------------------------------------------------------------
        this.sprites[image].size.width / this.sprites[image].size.framesX,
        this.sprites[image].size.height / this.sprites[image].size.framesY,
        this.position.x + this.width/2 -
        (((this.sprites[image].size.width / this.sprites[image].size.framesX) * this.scale)/2),
        this.position.y + this.height/2 -
        (((this.sprites[image].size.height / this.sprites[image].size.framesY) * this.scale)/2) -
        this.sprites[this.animation].vertOffset,
        ((this.sprites[image].size.width / this.sprites[image].size.framesX) * this.scale),
        ((this.sprites[image].size.height / this.sprites[image].size.framesY) * this.scale)
      )
    } else {
      let image = this.sprites[this.animation].img +'Reverse'
      c.drawImage(
        this.sprites[image].img.image,
        //------------------------------------------------------------------------------
        //------------------------------------------------------------------------------
        (this.sprites[image].size.width -
        ((this.sprites[image].size.width / this.sprites[image].size.framesX)
        * (this.framePosition.x-1))) - (this.sprites[image].size.width / this.sprites[image].size.framesX),
        //------------------------------------------------------------------------------
        ((this.sprites[image].size.height / this.sprites[image].size.framesY)
        * (this.framePosition.y-1)),
        //------------------------------------------------------------------------------
        this.sprites[image].size.width / this.sprites[image].size.framesX,
        this.sprites[image].size.height / this.sprites[image].size.framesY,
        this.position.x + this.width/2 -
        (((this.sprites[image].size.width / this.sprites[image].size.framesX) * this.scale)/2),
        this.position.y + this.height/2 -
        (((this.sprites[image].size.height / this.sprites[image].size.framesY) * this.scale)/2) -
        this.sprites[this.animation].vertOffset,
        ((this.sprites[image].size.width / this.sprites[image].size.framesX) * this.scale),
        ((this.sprites[image].size.height / this.sprites[image].size.framesY) * this.scale)
      )
    }
  }

  update(){
    if(this.dead) return
    if(this.sprites != null && this.timer >= this.sprites[this.animation].frameTime){
      if(this.framesComplete < this.sprites[this.animation].frames - 1){
        let image = this.sprites[this.animation].img
        if(this.framePosition.x < 
          this.sprites[image].size.framesX){
          this.framePosition.x++
        } else {
          this.framePosition.y++
          this.framePosition.x = 1
        }
        this.framesComplete++
      } else {
        if(this.animation === 'die'){ 
          this.dead = true 
        } else {
          if(this.lastHit){
            this.setAnimation('die', true)
          } else {
            if(this.once) this.animation = this.prevAnimation
          }
          this.framePosition.x = this.sprites[this.animation].firstFrame.x
          this.framePosition.y = this.sprites[this.animation].firstFrame.y
          this.framesComplete = 0
          this.cantCancel = false
        }
      }
      this.timer = 0
    } else {
      this.timer++
    }
  }

  setAnimation(animation, once = false, cantCancel = false){
    if(this.animation !== animation && !this.dead && !this.cantCancel){
      this.animation = animation
      this.framePosition.x = this.sprites[this.animation].firstFrame.x
      this.framePosition.y = this.sprites[this.animation].firstFrame.y
      this.framesComplete = 0
      this.cantCancel = cantCancel
    }
    this.once = once
  }
}

class Player extends Sprite{
  constructor({position, scale, sprites, height = 46, width = 30, health = 100}) {
    super({position, scale, sprites, animation: 'idle'})
    this.gravity = universialGravity
    this.position = position
    this.height = height
    this.width = width
    this.velocity = {x: 0, y: 0}
    this.jumpCount = 2
    this.landed = false
    this.attackBox = {
      attacking: false,
      hitRegistered: false,
      width: 26,
      height: 40,
      position: {
        x: this.position.x + this.width,
        y: this.position.y + this.height
      }
    }
    this.health = health
    this.keys = 0
    this.coins = 0
  }

  draw() {
    /*if(this.attackBox.attacking){
      c.fillStyle = 'white'
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      )
    }*/
    
    super.draw()
  }

  updateAttackBox() {
    if(this.direction === 'left') {
      this.attackBox.position.x = this.position.x - this.attackBox.width
      this.attackBox.position.y = this.position.y + this.height * 0.1
    }
    if(this.direction === 'right'){
      this.attackBox.position.x = this.position.x + this.width
      this.attackBox.position.y = this.position.y + this.height * 0.1
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
    if((this.animation === 'jump') &&
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

  loseHealth(amount, enemy) {
    if(this.health - amount <= 0){
      this.health = 0
      this.lastHit = true
      this.setAnimation('die', true)
    } else {
      this.health -= amount
    }
    enemy.attackBox.hitRegistered = false
  }

  registerHit(delay) {
    setTimeout(() => {
      this.attackBox.hitRegistered = true
      setTimeout(() => {
        this.attackBox.hitRegistered = false
      }, 100);
    }, delay);
  }

  doAction(cooldown = 400, delay = 100, animation = 'attack2') {
    if(!this.attackBox.attacking){
      this.attackBox.attacking = true
      this.setAnimation(animation, true, true)
      this.registerHit(delay)
      setTimeout(() => {
        this.attackBox.attacking = false
      }, cooldown);
    }
  }
}

class Enemy extends Sprite{
  constructor({position, scale = 1, sprites, height = 46, width = 30, health}) {
    super({position, scale, sprites, animation: 'idle'})
    this.gravity = universialGravity
    this.position = position
    this.height = height
    this.width = width
    this.velocity = {x: 0, y: 0}
    this.jumpCount = 2
    this.landed = false
    this.attackBox = {
      attaking: false,
      hitRegistered: false,
      width: 26,
      height: 40,
      position: {
        x: this.position.x + this.width,
        y: this.position.y + this.height
      }
    }
    this.health = health
    this.removed = false
    this.aiTimer = 0
    this.player = null
    this.alerted = false
    this.tookHit = false
  }

  draw() {
    /*c.fillStyle = 'white'
    c.fillRect(
      this.attackBox.position.x,
      this.attackBox.position.y,
      this.attackBox.width,
      this.attackBox.height
    )*/
    if(!this.removed) super.draw()
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
    if(!this.dead) this.enemyAi()
    super.update()
    this.updateAttackBox()
    if(!this.dead) this.position.x += this.velocity.x
    if(this.dead && !this.removed){
      setTimeout(() => {
        this.removed = true
      }, 2000);
    }
  }

  stopHorizontalMove(){
    this.velocity.x = 0
  }

  loseHealth(amount, cooldown) {
    if(!this.tookHit){
      if(this.health - amount <= 0){
        this.health = 0
        this.lastHit = true
        this.setAnimation('takeHit', true)
      } else {
        this.health -= amount
        this.setAnimation('takeHit', true)
      }
      this.tookHit = true
      setTimeout(() => {
        this.tookHit = false
      }, cooldown);
    }
  }

  registerHit(delay) {
    setTimeout(() => {
      this.attackBox.hitRegistered = true
    }, delay);
  }

  doAction(cooldown, delay, animation) {
    if(!this.attackBox.attaking){
      this.attackBox.attaking = true
      this.setAnimation(animation, true)
      this.registerHit(delay)
      setTimeout(() => {
        this.attackBox.attaking = false
      }, cooldown);
    }
  }

  enemyAi(){
    
  }
}

class Skeleton extends Enemy {
  constructor({position, scale, sprites = skeleton}){
    super({position, scale, sprites, height: 52, width: 30, health: 100})
  }
}

class Mushroom extends Enemy {
  constructor({position, scale, sprites = mushroom}){
    super({position, scale, sprites, height: 38, width: 30, health: 120})
  }
}

class Goblin extends Enemy {
  constructor({position, scale, sprites = goblin}){
    super({position, scale, sprites, height: 36, width: 30, health: 60})
  }
}

class FlyingEye extends Enemy {
  constructor({position, scale, sprites = flyingEye}){
    super({position, scale, sprites, height: 30, width: 40, health: 40})
    this.gravity = 0
  }

  update() {
    super.update()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if(this.lastHit) this.gravity = 0.2
  }

  enemyAi(){
    if(this.player == null) return
    super.enemyAi()
    if(this.alerted){
      let inRange = true
      if(this.position.x + this.width/2 < this.player.position.x + (this.player.width/2) - this.player.width){
        this.moveRight()
        inRange = false
      } else if(this.position.x + this.width/2 > this.player.position.x + (this.player.width/2) + this.player.width){
        this.moveLeft()
        inRange = false
      } else {
        this.stopHorizontalMove()
      }
      if(this.position.y + this.height/2 < this.player.position.y + (this.player.height/2) - this.player.height/2){
        this.moveDown()
        inRange = false
      } else if(this.position.y + this.height/2 > this.player.position.y + (this.player.height/2) - this.player.height/2 + 4){
        this.moveUp()
        inRange = false
      } else {
        this.stopVerticalMove()
        if(this.position.x + this.width/2 < this.player.position.x + (this.player.width/2)){
          this.direction = 'right'
        } else {this.direction = 'left'}
      }
      if(inRange && !this.tookHit){
        this.doAction(1000, 500, 'attack1')
      }
    }
    if(this.position.x + this.width/2 < this.player.position.x + (this.player.width/2) + 300
      && this.position.x + this.width/2 > this.player.position.x + (this.player.width/2) - 300
      && this.position.y + this.height/2 < this.player.position.y + (this.player.height/2) + 300
      && this.position.y + this.height/2 > this.player.position.y + (this.player.height/2) - 300){
      this.alerted = true
    } else {
      this.alerted = false 
      this.stopHorizontalMove()
      this.stopVerticalMove()
    }
  }

  moveLeft(){
    if(this.attackBox.attaking) return
    this.velocity.x = -1.5
    this.direction = 'left'
  }

  moveRight(){
    if(this.attackBox.attaking) return
    this.velocity.x = 1.5
    this.direction = 'right'
  }

  stopHorizontalMove(){
    this.velocity.x = 0
  }

  moveUp(){
    if(this.attackBox.attaking) return
    this.velocity.y = -1.5
  }

  moveDown(){
    if(this.attackBox.attaking) return
    this.velocity.y = 1.5
  }

  stopVerticalMove(){
    if(!this.dead) this.velocity.y = 0
  }
}

class InteractiveProp {
  constructor({image, position}){
    this.image = image
    this.position = position
    this.frame = 0
    this.frameTimer = 0
  }

  draw(){
    // c.fillStyle = 'red'
    // c.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.image.w,
    //   this.image.h
    // )
    c.drawImage(
      this.image.image,
      this.frame*(this.image.width/this.image.frames),
      0,
      this.image.width/this.image.frames,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.w,
      this.image.h
    )
  }

  update(){
    console.log('why')
  }
}

class Box extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
    this.opened = false
  }
  draw(){
    super.draw()
  }
  update(){

  }
  open(){
    if(this.opened){
      this.opened = true
    }
  }
}

class Chest extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
    this.opened = false
  }
  draw(){
    super.draw()
  }
  update(){
    if(this.opened){
      this.frame = this.image.frames - 1
    }
  }
  open(player){
    if(player.keys > 0 && !this.opened){
      player.keys--
      this.opened = true
    }
  }
}

class Coin extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
    this.collected = false
  }
  draw(){
    super.draw()
  }
  update(){
    if(this.frameTimer >= this.image.frameTime){
      if(this.frame < this.image.frames-1){
        this.frame++
      } else {
        this.frame = 0
      }
      this.frameTimer = 0
    } else {
      this.frameTimer++
    }
  }
}

class Flag extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
  }
  draw(){
    super.draw()
  }
  update(){
    if(this.frameTimer >= this.image.frameTime){
      if(this.frame < this.image.frames-1){
        this.frame++
      } else {
        this.frame = 0
      }
      this.frameTimer = 0
    } else {
      this.frameTimer++
    }
  }
}

class Key extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
    this.collected = false
  }
  draw(){
    super.draw()
  }
  update(){
    if(this.frameTimer >= this.image.frameTime){
      if(this.frame < this.image.frames-1){
        this.frame++
      } else {
        this.frame = 0
      }
      this.frameTimer = 0
    } else {
      this.frameTimer++
    }
  }
}

class Rune extends InteractiveProp {
  constructor({image, position}){
    super({image, position})
    this.collected = false
  }
  draw(){
    super.draw()
  }
  update(){
    console.log(this.frame)
    if(this.frameTimer >= this.image.frameTime){
      if(this.frame < this.image.frames-1){
        this.frame++
      } else {
        this.frame = 0
      }
      this.frameTimer = 0
    } else {
      this.frameTimer++
    }
  }
}