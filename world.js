

let gridSize = 50;
let gridOffset = gridSize / 2;
// let worldSpritePositions[] = 
let editorIsOpen = 0;


function drawWorld(){

    ground = createSprite(width / 2, height - 50, width, 100);
    ground.shapeColor = color(166,124,82);

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

        if (mouseIsPressed) {
          let x = snap(mouseX);
          let y = snap(mouseY);
    
            if (mouseButton === LEFT) {
                this.setup(x, y, 50, 50);
                worldTiles.add(this.worldSprite);
                editorAddWorldObject(x, y);               
            }

            if (mouseButton === RIGHT) {
                editorSaveJSON(x, y);
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
let gridItemClean = [];
let iteration = 0;

// Gets mouse snap position and adds xy to 2D Array while not allowing duplicates
    // 2D array selection example
    // gridItem[4][0]  // forth array, firstData
    // gridItem[0][1]  // first array, secondData
function editorAddWorldObject(x, y) { 

    gridItem[iteration++] = [x, y];  


    // do a check to see if there's already an object in this x,y position
        // get current gridItem[iteration]
        // check the x,y against the current gridItem[iteration]
        // if an entry for x,y exists in the array, take the current value and put it in a clean array 

    for(let i = 0; i < gridItem.length; i++) {

        for(let j = 0; j < gridItem[i].length; j++) {


            if(x == gridItem[i][0] && y == gridItem[i][1]){
                console.log("Duplicate");
            }
            else {
                gridItemClean[i] = [x, y]
            }

            
        }
    }


} // addGridPosition


function editorSaveJSON(){
    // gridItem[ [x], [y] ]
    // e.g. gridItem[[32, 44], [56, 123]]

    let json = {};
    json.itemType = "Autumn";
    json.location = gridItem
    // saveJSON(json, "things.json");

    console.log(gridItemClean);
}
