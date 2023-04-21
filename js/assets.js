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

const sprites = {
  img: {
    img: new AssetImage('img/adventurer.png'),
    size: {
      width: 400,
      height: 444,
      framesX: 8,
      framesY: 12
    }
  },
  imgReverse: {
    img: new AssetImage('img/adventurer-reverse.png'),
    size: {
      width: 400,
      height: 444,
      framesX: 8,
      framesY: 12
    },
    revComp: 0
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
    vertOffset: 5,
    img: 'img'
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
    vertOffset: 4,
    revComp: -8,
    img: 'img'
  },
  'jump': {
    width: 25,
    height: 30,
    frames: 10,
    frameTime: 4,
    firstFrame: {
      x: 7,
      y: 2
    },
    vertOffset: 5,
    img: 'img'
  },
  'spin': {
    width: 25,
    height: 30,
    frames: 9,
    frameTime: 4,
    firstFrame: {
      x: 8,
      y: 2
    },
    vertOffset: 5,
    img: 'img'
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
    vertOffset: 5,
    img: 'img'
  },
  'attack1': {
    width: 40,
    height: 35,
    frames: 5,
    frameTime: 4,
    firstFrame: {
      x: 3,
      y: 6
    },
    vertOffset: 5,
    img: 'img'
  },
  'die': {
    width: 40,
    height: 30,
    frames: 7,
    frameTime: 5,
    firstFrame: {
      x: 7,
      y: 8
    },
    vertOffset: 5,
    img: 'img'
  }
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 100,
    height: 60,
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
    width: 100,
    height: 60,
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
    width: 100,
    height: 60,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 100,
    height: 60,
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
    width: 100,
    height: 60,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 56,
    height: 50,
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
    width: 100,
    height: 60,
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
    width: 100,
    height: 60,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 46,
    height: 50,
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
    width: 56,
    height: 50,
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
    width: 100,
    height: 60,
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