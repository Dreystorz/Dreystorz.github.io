const map = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,58,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,57,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,3,13,13,13,13,13,13,13],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,1,21,0,0,1],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,23,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,57],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,47,57,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,13,13,13,13,13,13],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,11,11,11,11],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,12,12,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,13,13,13,13],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
const props = [[{"type":12,"x":15,"y":462}],[],[{"type":13,"x":24,"y":464}],[{"type":30,"x":15,"y":454}],[],[],[{"type":17,"x":22,"y":471}],[{"type":36,"x":9,"y":422}],[],[],[],[],[],[],[],[{"type":46,"x":18,"y":297}],[],[],[{"type":19,"x":2,"y":465},{"type":14,"x":15,"y":463}],[],[],[{"type":14,"x":6,"y":464}],[{"type":19,"x":14,"y":467}],[],[],[],[{"type":19,"x":12,"y":371}],[{"type":14,"x":6,"y":368}],[{"type":24,"x":9,"y":363}],[{"type":14,"x":13,"y":368}],[{"type":26,"x":11,"y":363}],[],[],[],[{"type":8,"x":14,"y":456},{"type":17,"x":28,"y":599}],[{"type":41,"x":23,"y":377}],[],[],[],[{"type":39,"x":22,"y":450},{"type":11,"x":11,"y":275},{"type":9,"x":24,"y":270}],[{"type":10,"x":29,"y":269},{"type":18,"x":11,"y":594}],[{"type":6,"x":25,"y":456}],[{"type":16,"x":18,"y":597}],[],[{"type":5,"x":14,"y":454}],[],[],[{"type":13,"x":22,"y":591}],[{"type":15,"x":22,"y":595}],[],[],[],[],[],[],[],[],[],[],[{"type":32,"x":23,"y":375}],[],[],[],[{"type":39,"x":3,"y":386}],[],[{"type":29,"x":15,"y":395}],[],[],[],[],[{"type":19,"x":11,"y":274}],[],[],[],[],[{"type":19,"x":14,"y":273}],[],[{"type":13,"x":10,"y":272}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":8,"x":31,"y":455}],[],[{"type":44,"x":21,"y":345}],[{"type":18,"x":3,"y":465}],[{"type":14,"x":18,"y":465}],[{"type":5,"x":19,"y":455}],[{"type":39,"x":9,"y":451}],[{"type":35,"x":29,"y":426}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
const enemies = [[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":"goblin","x":29,"y":447}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":"mushroom","x":1,"y":540},{"type":"goblin","x":19,"y":215}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":"skeleton","x":29,"y":346}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":"flying_eye","x":4,"y":166}],[],[],[],[],[],[],[],[],[],[],[],[{"type":"flying_eye","x":6,"y":90}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
const iProps = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":15,"x":14,"y":593}],[{"type":16,"x":1,"y":263}],[],[],[],[],[],[],[],[],[{"type":2,"x":17,"y":454}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":12,"x":6,"y":385}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":13,"x":10,"y":396}],[],[],[],[{"type":13,"x":11,"y":330}],[],[],[{"type":13,"x":22,"y":226}],[{"type":13,"x":16,"y":226}],[{"type":13,"x":13,"y":227}],[{"type":13,"x":7,"y":227}],[{"type":13,"x":1,"y":226},{"type":13,"x":26,"y":226}],[{"type":13,"x":19,"y":227}],[],[],[{"type":3,"x":30,"y":230}],[],[],[],[],[{"type":13,"x":13,"y":198}],[{"type":13,"x":1,"y":181},{"type":13,"x":29,"y":173}],[{"type":13,"x":28,"y":174}],[{"type":13,"x":27,"y":187}],[{"type":13,"x":16,"y":203}],[{"type":13,"x":7,"y":232},{"type":13,"x":26,"y":259}],[{"type":13,"x":10,"y":287},{"type":13,"x":26,"y":317}],[{"type":13,"x":7,"y":351}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"type":14,"x":12,"y":431}],[],[],[],[],[],[],[],[]]