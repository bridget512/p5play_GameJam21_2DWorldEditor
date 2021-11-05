

let gridSize = 50;
let gridOffset = gridSize / 2;
// let worldSpritePositions[] = 
let editorIsOpen = 0;


function drawWorld(){

    ground = createSprite(width / 2, height - 50, width, 100);
    ground.shapeColor = color(120,200,50);

    worldSprite = new worldPlatform();
    
    
} // drawWorld()


class worldPlatform {
    constructor() {
        this.worldSprite;
    }

    setup(x, y, w, h) {
        this.worldSprite = createSprite(x, y, w, h);
        this.worldSprite.addImage(tex_grass);
    }

    draw(){

        // worldItems.drawMenu();
        // worldItems.drawItems();

        if (mouseIsPressed) {
          let x = snap(mouseX);
          let y = snap(mouseY);
    

            if (mouseButton === LEFT) {
                this.setup(x, y, 50, 50);
                worldTiles.add(this.worldSprite);

                addGridPosition(x, y);
                // console.log(x, y);
                
            }

            if (mouseButton === RIGHT) {
                console.log(gridItem);

                getGridPosition(x, y);
                console.log([x, y])

            }

        }

    }


} // class worldPlatform

function snap(op) {
    // subtract offset (to center lines)
    // divide by gridSize to get row/column
    // round to snap to the closest one
    let cell = Math.round((op - gridOffset) / gridSize);
    // multiply back to gridSize scale
    // add offset to center
    return cell * gridSize + gridOffset;
} // snap()



let gridItem = []; // 2D Array (Matrix) of items placed on gridTiles
let maxAmountOfItems = 100;

let iteration = 0;
function addGridPosition(x, y) { // Gets mouse snap position and adds xy to 2D Array

    gridItem[iteration++] = [x, y];

}

function getGridPosition(x, y){
    // gridItem[ [x], [y] ]
    // e.g. gridItem[[32, 44], [56, 123]]

    // let gridItem = [];

    let json = {};
    json.itemType = "Autumn";
    json.location = gridItem
    // saveJSON(json, "things.json");

    console.log(gridItem);

}

function loadMap() {


    
}
