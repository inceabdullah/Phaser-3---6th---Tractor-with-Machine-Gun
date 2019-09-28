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
