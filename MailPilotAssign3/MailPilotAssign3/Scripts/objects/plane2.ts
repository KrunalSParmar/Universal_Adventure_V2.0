﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Plane Class
    export class Plane2 {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            /*this.image = new createjs.Sprite(managers.Assets.atlas, "plane");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "plane2");
            this.image.y = 240;
            this.image.x = 75;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            //this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            this.engineSound = createjs.Sound.play('space_engine2', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        update(){
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 