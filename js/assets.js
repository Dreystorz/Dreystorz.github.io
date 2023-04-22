const tileSize = 32

class AssetImage {
  constructor(imageSrc, width = tileSize, height = tileSize) {
    this.image = new Image()
    this.image.src = imageSrc
    this.width = width
    this.height = height
  }
}

const tiles = [
  new AssetImage('img/Assets/1 Tiles/Tile_01.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_02.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_03.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_04.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_05.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_06.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_07.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_08.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_09.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_10.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_11.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_12.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_13.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_14.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_15.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_16.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_17.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_18.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_19.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_20.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_21.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_22.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_23.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_24.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_25.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_26.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_27.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_28.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_29.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_30.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_31.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_32.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_33.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_34.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_35.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_36.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_37.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_38.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_39.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_40.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_41.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_42.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_43.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_44.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_45.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_46.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_47.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_48.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_49.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_50.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_51.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_52.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_53.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_54.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_55.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_56.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_57.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_58.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_59.png'),
  new AssetImage('img/Assets/1 Tiles/Tile_60.png'),
]

const assets = [
  //Bushes
  new AssetImage('img/Assets/3 Objects/Bushes/1.png',31,15),
  new AssetImage('img/Assets/3 Objects/Bushes/2.png',30,10),
  new AssetImage('img/Assets/3 Objects/Bushes/3.png',29,15),
  new AssetImage('img/Assets/3 Objects/Bushes/4.png',31,21),
  new AssetImage('img/Assets/3 Objects/Bushes/5.png',63,28),
  new AssetImage('img/Assets/3 Objects/Bushes/6.png',31,26),
  new AssetImage('img/Assets/3 Objects/Bushes/7.png',61,24),
  new AssetImage('img/Assets/3 Objects/Bushes/8.png',63,27),
  new AssetImage('img/Assets/3 Objects/Bushes/9.png',61,25),
  //Fence
  new AssetImage('img/Assets/3 Objects/Fence/1.png',23,18),
  new AssetImage('img/Assets/3 Objects/Fence/2.png',25,20),
  new AssetImage('img/Assets/3 Objects/Fence/3.png',16,13),
  //Grass
  new AssetImage('img/Assets/3 Objects/Grass/1.png',17,18),
  new AssetImage('img/Assets/3 Objects/Grass/2.png',17,16),
  new AssetImage('img/Assets/3 Objects/Grass/3.png',14,16),
  new AssetImage('img/Assets/3 Objects/Grass/4.png',12,12),
  new AssetImage('img/Assets/3 Objects/Grass/5.png',11,13),
  new AssetImage('img/Assets/3 Objects/Grass/6.png',11,9),
  new AssetImage('img/Assets/3 Objects/Grass/7.png',7,14),
  new AssetImage('img/Assets/3 Objects/Grass/8.png',8,14),
  new AssetImage('img/Assets/3 Objects/Grass/9.png',6,8),
  new AssetImage('img/Assets/3 Objects/Grass/10.png',9,11),
  //Pointers
  new AssetImage('img/Assets/3 Objects/Pointers/1.png',16,21),
  new AssetImage('img/Assets/3 Objects/Pointers/2.png',16,21),
  new AssetImage('img/Assets/3 Objects/Pointers/3.png',13,21),
  new AssetImage('img/Assets/3 Objects/Pointers/4.png',13,21),
  new AssetImage('img/Assets/3 Objects/Pointers/5.png',13,21),
  new AssetImage('img/Assets/3 Objects/Pointers/6.png',13,21),
  new AssetImage('img/Assets/3 Objects/Pointers/7.png',13,21),
  new AssetImage('img/Assets/3 Objects/Pointers/8.png',11,21),
  //Ridges
  new AssetImage('img/Assets/3 Objects/Ridges/1.png',89,26),
  new AssetImage('img/Assets/3 Objects/Ridges/2.png',40,28),
  new AssetImage('img/Assets/3 Objects/Ridges/3.png',109,41),
  new AssetImage('img/Assets/3 Objects/Ridges/4.png',65,61),
  new AssetImage('img/Assets/3 Objects/Ridges/5.png',81,29),
  new AssetImage('img/Assets/3 Objects/Ridges/6.png',47,55),
  //Stones
  new AssetImage('img/Assets/3 Objects/Stones/1.png',63,59),
  new AssetImage('img/Assets/3 Objects/Stones/2.png',47,57),
  new AssetImage('img/Assets/3 Objects/Stones/3.png',52,63),
  new AssetImage('img/Assets/3 Objects/Stones/4.png',57,30),
  new AssetImage('img/Assets/3 Objects/Stones/5.png',31,31),
  //Trees
  new AssetImage('img/Assets/3 Objects/Trees/1.png',101,103),
  new AssetImage('img/Assets/3 Objects/Trees/2.png',104,132),
  new AssetImage('img/Assets/3 Objects/Trees/3.png',123,150),
  //Willows
  new AssetImage('img/Assets/3 Objects/Willows/1.png',104,135),
  new AssetImage('img/Assets/3 Objects/Willows/2.png',141,168),
  new AssetImage('img/Assets/3 Objects/Willows/3.png',199,183),
]

class InteractiveImage {
  constructor(imageSrc, frames, width , height, frameTime = 10) {
    this.image = new Image()
    this.image.src = imageSrc
    this.frames = frames
    this.width = width
    this.height = height
    this.w = width/frames,
    this.h = height
    this.frameTime = frameTime
  }
}

const interactiveAssets = [
  //Boxes
  new InteractiveImage('img/Assets/3 Objects/Boxes/1.png',1,34,28),
  new InteractiveImage('img/Assets/3 Objects/Boxes/2.png',1,34,27),
  new InteractiveImage('img/Assets/3 Objects/Boxes/3.png',1,27,26),
  new InteractiveImage('img/Assets/3 Objects/Boxes/4.png',1,33,26),
  new InteractiveImage('img/Assets/3 Objects/Boxes/5.png',1,34,27),
  new InteractiveImage('img/Assets/3 Objects/Boxes/6.png',1,27,26),
  //Ladders
  new InteractiveImage('img/Assets/3 Objects/Ladders/1.png',1,32,32),
  new InteractiveImage('img/Assets/3 Objects/Ladders/2.png',1,32,32),
  new InteractiveImage('img/Assets/3 Objects/Ladders/3.png',1,32,32),
  new InteractiveImage('img/Assets/3 Objects/Ladders/4.png',1,32,32),
  new InteractiveImage('img/Assets/3 Objects/Ladders/5.png',1,32,32),
  new InteractiveImage('img/Assets/3 Objects/Ladders/6.png',1,32,32),
  //Animated
  new InteractiveImage('img/Assets/4 Animated objects/Chest.png',4,128,32),
  new InteractiveImage('img/Assets/4 Animated objects/Coin.png',4,40,10),
  new InteractiveImage('img/Assets/4 Animated objects/Flag.png',4,192,48),
  new InteractiveImage('img/Assets/4 Animated objects/Key.png',4,48,8),
  new InteractiveImage('img/Assets/4 Animated objects/Rune.png',4,64,16),
]

const playerAssets = {
  idleImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Idle.png'),
    size: {
      width: 1620,
      height: 162,
      framesX: 10,
      framesY: 1
    }
  },
  idleImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Idle_reverse.png'),
    size: {
      width: 1620,
      height: 162,
      framesX: 10,
      framesY: 1
    }
  },
  runImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Run.png'),
    size: {
      width: 1296,
      height: 162,
      framesX: 8,
      framesY: 1
    }
  },
  runImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Run_reverse.png'),
    size: {
      width: 1296,
      height: 162,
      framesX: 8,
      framesY: 1
    }
  },
  takeHitImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Take hit.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  takeHitImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Take hit_reverse.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  dieImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Death.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  dieImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Death_reverse.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  attack1Img: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack1.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  attack1ImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack1_reverse.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  attack2Img: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack2.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  attack2ImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack2_reverse.png'),
    size: {
      width: 1134,
      height: 162,
      framesX: 7,
      framesY: 1
    }
  },
  attack3Img: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack3.png'),
    size: {
      width: 1296,
      height: 162,
      framesX: 8,
      framesY: 1
    }
  },
  attack3ImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Attack3_reverse.png'),
    size: {
      width: 1296,
      height: 162,
      framesX: 8,
      framesY: 1
    }
  },
  jumpImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Jump.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  jumpImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Jump_reverse.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  fallImg: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Fall.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  fallImgReverse: {
    img: new AssetImage('img/Fantasy Warrior/Sprites/Fall_reverse.png'),
    size: {
      width: 486,
      height: 162,
      framesX: 3,
      framesY: 1
    }
  },
  'idle': {
    frames: 10,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'idleImg'
  },
  'run': {
    frames: 8,
    frameTime: 3,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'runImg'
  },
  'takeHit': {
    frames: 3,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'takeHitImg'
  },
  'die': {
    frames: 7,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'dieImg'
  },
  'attack1': {
    frames: 7,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'attack1Img'
  },
  'attack2': {
    frames: 7,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'attack2Img'
  },
  'attack3': {
    frames: 7,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'attack3Img'
  },
  'jump': {
    frames: 3,
    frameTime: 10,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'jumpImg'
  },
  'fall': {
    frames: 3,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: -3,
    img: 'fallImg'
  },
}

const skeleton = {
  idleImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Idle.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  idleImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Idle_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  walkImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Walk.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  walkImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Walk_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Take Hit.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Take Hit_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Death.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Death_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  attack1Img: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Attack.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  attack1ImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Attack_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  shieldImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Shield.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  shieldImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Skeleton/Shield_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  'idle': {
    frames: 4,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'idleImg'
  },
  'walk': {
    frames: 4,
    frameTime: 10,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'walkImg'
  },
  'takeHit': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'takeHitImg'
  },
  'die': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'dieImg'
  },
  'attack1': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'attack1Img'
  },
  'shield': {
    frames: 4,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'shieldImg'
  },
  'holdShield': {
    frames: 1,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 1,
    img: 'shieldImg'
  },
}

const mushroom = {
  idleImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Idle.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  idleImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Idle_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Take Hit.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Take Hit_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Death.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Death_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  attack1Img: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Attack.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  attack1ImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Attack_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  runImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Run.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  runImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Mushroom/Run_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  'idle': {
    frames: 4,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 8,
    img: 'idleImg'
  },
  'takeHit': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 8,
    img: 'takeHitImg'
  },
  'die': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 8,
    img: 'dieImg'
  },
  'attack1': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 8,
    img: 'attack1Img'
  },
  'run': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 8,
    img: 'runImg'
  }
}

const goblin = {
  idleImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Idle.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  idleImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Idle_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Take Hit.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Take Hit_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Death.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Death_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  attack1Img: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Attack.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  attack1ImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Attack_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  runImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Run.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  runImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Goblin/Run_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  'idle': {
    frames: 4,
    frameTime: 8,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 9,
    img: 'idleImg'
  },
  'takeHit': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 9,
    img: 'takeHitImg'
  },
  'die': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 9,
    img: 'dieImg'
  },
  'attack1': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 9,
    img: 'attack1Img'
  },
  'run': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 9,
    img: 'runImg'
  }
}

const flyingEye = {
  flyImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Flight.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  flyImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Flight_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  takeHitImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Take Hit.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  takeHitImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Take Hit_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImg: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Death.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  dieImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Death_reverse.png'),
    size: {
      width: 600,
      height: 150,
      framesX: 4,
      framesY: 1
    }
  },
  attack1Img: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Attack.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  attack1ImgReverse: {
    img: new AssetImage('img/Enemies/Monsters_Creatures_Fantasy/Flying eye/Attack_reverse.png'),
    size: {
      width: 1200,
      height: 150,
      framesX: 8,
      framesY: 1
    }
  },
  'fly': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 4,
    img: 'flyImg'
  },
  'idle': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 4,
    img: 'flyImg'
  },
  'takeHit': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 4,
    img: 'takeHitImg'
  },
  'die': {
    frames: 4,
    frameTime: 5,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 12,
    img: 'dieImg'
  },
  'attack1': {
    frames: 8,
    frameTime: 4,
    firstFrame: {
      x: 1,
      y: 1
    },
    vertOffset: 4,
    img: 'attack1Img'
  }
}