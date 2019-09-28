# Phaser-3---6th---Tractor-with-Machine-Gun
The mobile game made by Phaser 3


### Tractor with Machine Gun

## How to Play

should avoid from stone with firing by thouching the screen. Straw bales are not dangerous but if you fire them, you loss.

the 6th game trying with Phaser 3


**used**


custom class for beam and chiping that are in index.html:

```
<script type="text/javascript" src="granule.js"></script>
<script type="text/javascript" src="beam.js"></script>
```

## Overlap

I used 
##### `Phaser.Scene.physics.add.overlap`

for overlap, I use group, just with `this.add.group()`

for giving physics body I use:
`
this.physics.world.enableBody(imageorsprite)
`



# update() in the custom class

in scene1.js I se for loop `i < group_name.getChildren().length` in update() function.

## All granule chipping and fire effect

I use the same class `granule.js`

I called class with `new granule(this, fire, "grey")`, `new granule(this, fire, "fire")` or `new granule(this, beam)`

#### in granule.js:

```
constructor(scene, beam, color = "black"){

const _colors = [{color:"black", key:"granule"}, {color:"grey", key:"granule_grey"}, {color:"fire", key:"granule_fire"}];
let x = beam.x;
let y = beam.y;

super(scene, x, y, _colors.find(s=>s.color === color).key);
```





### Resized sprites with the real ratios in dynamic Canvas sizes:

in index.html:
`
<script type="text/javascript" src="canvas_scale.js"></script>
`

usage of it is that:
```
  this.getCanvas = new canvas_scale(this, 512, 512, 3); // 512x512 is real sizes
  imageorsprite.setScale(this.getCanvas.scale_w,this.getCanvas.scale_h);
```
3 is used in new canvas_scale(this, 512, 512, 3):
```
class canvas_scale{
  constructor(scene, orj_w, orj_h, next_by_next){


    this.canvas = scene.sys.game.canvas;


 				this._width = this.canvas.offsetWidth;
 				this._height = this.canvas.offsetHeight;

        this.__next_by_nextPcs = next_by_next;

        this.__gap = this._width/(this.__next_by_nextPcs + 1);
this.__sprite_w_scale = this.__gap/(this._width*orj_w/config.width);
this.__sprite_h_scale = this.__gap/(this._height*orj_h/config.height);

this.scale_w = this.__sprite_w_scale;
this.scale_h = this.__sprite_h_scale;


  }
}
```

this is how many items that have the same width fits in the canvas width:
`
this.__gap = this._width/(this.__next_by_nextPcs + 1); 
`

`this.__next_by_nextPcs` is 3




  
  
  ## Some notes
  
  There was a problem with bale location. That is created with that:
```
  this._bale = this.physics.add.image(Phaser.Math.Between(1100,1400), this.tile_base_h, "bale");
```
  
  and stones with that:
```
    this.stoneSprites[this._stone_say] = this.add.sprite(Phaser.Math.Between(900,1000), this.tile_base_h, "stone")
```
  
  # that is not bug, it is just a calculation result without patience
  




## [Demo](https://html5.ozguruygulama.com/tractor_with_machine_gun/index.html "Demo")
