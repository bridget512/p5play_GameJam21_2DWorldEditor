

class Player {
    constructor(){
        this.sprite;
    }

    setup(x, y, w, h, color){
        this.sprite = createSprite(x, y, w, h);
        this.sprite.addImage(tex_player);
        this.sprite.shapeColor = color;
        this.sprite.debug = false;
        this.sprite.friction = 0.1;
    }

    movement(){
        if(jump == false){
            if(keyIsDown(UP_ARROW)){
                player.sprite.addSpeed(40, -90);
                jump = true;
            }
        }
        
        if(keyIsDown(LEFT_ARROW)){
            player.sprite.addSpeed(1, 180);
            
        } else if(keyIsDown(RIGHT_ARROW)){
            player.sprite.addSpeed(1, 0);
        } else {
            player.sprite.velocity.x = 0;
        }
    }
}

function onGround(){
    jump = false;
}

function onWorldSprite(){
    player.sprite.velocity.x = 0;
}




