﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Island3 {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            /*this.image = new createjs.Sprite(managers.Assets.atlas, "island");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "island3");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x < -1*(this.width)) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.width + this.stage.canvas.width;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}