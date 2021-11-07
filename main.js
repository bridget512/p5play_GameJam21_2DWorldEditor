const RES = {x: 600, y: 500}
let jump;
let loadedMap = [];

let grassTexture = {
    image: "img/grass.png"
}


function preload(){
    loadedMap = loadJSON("things.json");
    tex_grass = loadImage("img/grass.png")
    tex_player = loadImage("img/player.png")
} 

function setup(){
    createCanvas(RES.x, RES.y);
    angleMode(DEGREES);

    player = new Player();
    player.setup(100, 400, 30, 60, 'blue');

    tex_grass.resize(gridSize, gridSize);
    tex_player.resize(gridSize, gridSize);

    worldTiles = new Group();
    
    items = new MenuItems();



    drawWorld();
    
} // setup()

function draw(){
    background(40);
    worldSprite.draw();
    

    player.sprite.collide(ground, onGround);
    player.sprite.collide(worldTiles, onGround);
    player.sprite.addSpeed(0.9, 90); // Gravity
    player.movement();



    // items.show();

    // let  menuItems = new menuItemObject(20, 20, 50, 30);
	// menuItems.show();

    drawSprites();

} // draw()

