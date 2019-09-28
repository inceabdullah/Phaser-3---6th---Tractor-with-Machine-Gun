// 3.1 create the beam class
// 3.1 NOTE dont forget to add this file in the index.html file
class Beam extends Phaser.GameObjects.Sprite{
  constructor(scene){

        /*
var x =scene.tractor_sprite.x+512;
var y = scene.tractor_sprite.y;

    */
    var x = scene.tractor_sprite.x+(500*scene.getCanvas.scale_w);
    var y = scene.tractor_sprite.y - (335*scene.getCanvas.scale_h);

    let mgun_h = (335*scene.getCanvas.scale_h);
    let shot_w = config.width/2 - x;

    console.log(shot_w + " - " + mgun_h);


    super(scene, x, y, "beam");

    // 3.2 add to scene
    scene.add.existing(this);

    // 3.3
    this.play("beam_anim")
    .setScale(2);
    scene.physics.world.enableBody(this);
    this.body.velocity.y = 250;
    this.body.velocity.x = 250*shot_w/mgun_h;


    // 4.2 add the beam to the projectiles group
    scene.projectiles.add(this);

  }


  update(){

    // 3.4 Frustum culling
    if(this.y >= this.scene.tile_base_h ){
      const granule_ = new granule(this.scene, this);
      this.destroy();
    }
  }
}
