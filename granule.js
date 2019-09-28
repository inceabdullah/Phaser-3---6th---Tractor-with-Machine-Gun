class granule extends Phaser.GameObjects.Image{


  constructor(scene, beam, color = "black"){

    const _colors = [{color:"black", key:"granule"}, {color:"grey", key:"granule_grey"}, {color:"fire", key:"granule_fire"}];




    let x = beam.x;
    let y = beam.y;

    super(scene, x, y, _colors.find(s=>s.color === color).key);

    scene.add.existing(this);

    scene.physics.world.enableBody(this);
    this.body.velocity.y = -200;
    this.body.velocity.x = Phaser.Math.Between(-40,40);


    scene.granuletiles.add(this);
    this.body.gravity.y = 400;

//    console.log(this.body);

  }

  update(){

    if(this.y >= 500 ){

      this.destroy();
  }

}
}
