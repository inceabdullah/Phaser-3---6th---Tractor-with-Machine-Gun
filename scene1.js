class scene1 extends Phaser.Scene{

constructor(){
  super({key:"scene1"});
  this.tile_base_h = 455;
}


preload(){

  this.load.image("egg", "assets/egg.png");
  this.load.spritesheet("beam", "assets/beam.png",{
    frameWidth: 16,
    frameHeight: 16
  });//this.load.image("bucket", "assets/bucket.png");
this.load.spritesheet("tractor", "assets/traktors.png", {
  frameWidth: 512,
  frameHeight: 512
});
this.load.image("bg", "assets/background.jpg");
this.load.image("granule", "assets/granule.png");
this.load.image("granule_grey", "assets/granule_grey.png");
this.load.image("granule_fire", "assets/granule_fire.png");
this.load.image("bale", "assets/bale.png");

this.load.spritesheet("stone", "assets/stones.png", {
  frameWidth: 120,
  frameHeight: 110
});

this.egg_group = this.add.group();
this.egg_bucket = this.add.group();
this.stone_group = this.add.group();
this.tractor_group = this.add.group();
this.bale_group = this.add.group();

this._stone_say = 0;
this.stoneSprites = [];



}


create(){

  this.projectiles = this.add.group();
  this.granuletiles = this.add.group();




  this.getCanvas = new canvas_scale(this, 512, 512, 3);
  this.getCanvas_stone = new canvas_scale(this, 120, 110, 7);
  this.getCanvas_bale = new canvas_scale(this, 120, 85, 7);


  this.anims.create({
    key: "beam_anim",
    frames: this.anims.generateFrameNumbers("beam"),
    frameRate: 20,
    repeat: -1
  });



this.bg = this.add.tileSprite(0,0,800,600, "bg")
.setOrigin(0,0);




this.tractor_sprite = this.add.sprite(0,this.tile_base_h, "tractor")
.setScale(this.getCanvas.scale_w,this.getCanvas.scale_h)
.setOrigin(0,1);
this.tractor_sprite.width = 512*this.getCanvas.scale_w;


console.log(this.tractor_sprite);

this.physics.world.enableBody(this.tractor_sprite);

this.tractor_group.add(this.tractor_sprite);

// console.log(this.tractor_sprite);



//.setOriginX(0)
//.setOriginY(0);
//.setOrigin(0,512);
this._config = {
  key:"_tractor",
  frameRate: 20,
  frames: this.anims.generateFrameNumbers("tractor"),
  repeat: -1
}

this.anims.create(this._config);
this.tractor_sprite.play("_tractor");



//this.bucket_obj = this.physics.add.image(403,487,"bucket");

// this.egg_bucket.add(this.bucket_obj);

this.input.on("pointerdown", this.pointed, this);



  this.physics.add.overlap(this.projectiles, this.stone_group, function(fires, stones){

this.grey_granuleMake(fires);

fires.destroy();
stones.destroy();


  }, null, this);

  this.physics.add.overlap(this.tractor_group, this.stone_group, function(trak, stones){

this.fire_granuleMake(stones);

setTimeout(()=>{this.dead();}, 1000);


  }, null, this);


  this.physics.add.overlap(this.projectiles, this.bale_group, function(fires, bales){

bales.destroy();
this.fire_granuleMake(fires);

setTimeout(()=>{this.dead();}, 1000);



  }, null, this);

}





update(){

  this.forClass();


this.bg.tilePositionX += 1.65;


this.stoneMake();




}

pointed(pointer){

  const beam = new Beam(this);

//this.egg_obj = this.physics.add.image(pointer.x, pointer.y,"egg")
//.setVelocityY(100);

//this.egg_group.add(this.egg_obj);

// console.log(pointer.x + "- " + pointer.y);


}

forClass(){ // + granuletiles.getChildren()

  this.classUpdate(this.projectiles);
  this.classUpdate(this.granuletiles);

}


  classUpdate(groupName){

    for (let i  = 0; i < groupName.getChildren().length; i++){

      groupName.getChildren()[i].update();

    }




    }

    stoneMake(){

      if (this.stoneSprites.length === 0 || this.stoneSprites[this.stoneSprites.length-1].x <= 500){

      this._stone_say++;

     this._rand_1_5 = Phaser.Math.Between(0,4);

      this._config_stone = {
        key: "_stone" + this._stone_say,
        frames: this.anims.generateFrameNumbers("stone", {
          start: this._rand_1_5,
          end: this._rand_1_5
        }),
        frameRate: 1,
        repeat: 0


      }

      this.anims.create(this._config_stone);
      this.stoneSprites[this._stone_say] = this.add.sprite(Phaser.Math.Between(900,1000), this.tile_base_h, "stone")
      .play("_stone" + this._stone_say)
      .setScale(this.getCanvas_stone.scale_w, this.getCanvas_stone.scale_h)
      .setOrigin(0,1);

      // make bale

      this._bale = this.physics.add.image(Phaser.Math.Between(1100,1400), this.tile_base_h, "bale");
      this._bale.setVelocityX(-100)
      .setOrigin(0,1)
      .setScale(this.getCanvas_bale.scale_w, this.getCanvas_bale.scale_h);

      this.bale_group.add(this._bale);



      this.physics.world.enableBody(this.stoneSprites[this._stone_say]);

      this.stoneSprites[this._stone_say].body.velocity.x = -100;

      this.stone_group.add(this.stoneSprites[this._stone_say]);
    }


    }

    grey_granuleMake(fire){

      for (let i = 0; i < 5; i++){

      const granule_ = new granule(this, fire, "grey");

    }



    }

    fire_granuleMake(fire){

      for (let i = 0; i < 50; i++){

      const granule_ = new granule(this, fire, "fire");

    }



    }

    dead(){


      this.scene.start("scene2");
    }









}
