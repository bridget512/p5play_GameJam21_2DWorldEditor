

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


let gridItem = [];
let iteration = 0;

// Gets mouse snap position and adds xy to 2D Array while not allowing duplicates
    // 2D array selection example
    // gridItem[4][0]  // forth array, firstData
    // gridItem[0][1]  // first array, secondData
function editorAddWorldObject(x, y) { // Will eventually also take other params e.g. "itemType"

    // gridItem[iteration++] = {x, y};  

    // console.log(gridItem)
    // // allowAppend = false;
    // gridItem.forEach((item) => {
    //     console.log("HELP")
    //     console.log(x)
    //     console.log(y)
    //     console.log(item)
        
    //     if(x != item.x && y != item.y){
    //         // allowAppend = true
    //         // gridItem[itteration++] = {x, y}; 
    //         console.log("boop");
            
    //     }
    // });

    // if the array is empty, add a first item so the for loop works
    if(gridItem.length == 0) {
        console.log("First GridItem");
        gridItem[0] = [x, y]; 
        // iteration += 1;
    }

    else {
        for(let i = 0; i < gridItem.length; i++) { // go through each row of array
            for(let j = 0; j < gridItem[i].length; j++) { // go through the number of columns in that row

                // console.log(gridItem[i].length)
                // console.log(gridItem[j].length)
                
                if(gridItem[i][0] != x && gridItem[i][1] != x){
                    
                    console.log("New GridItem");
                    gridItem[iteration] = [x, y];
    
                }
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

    console.log(gridItem);
}


function LoadMapJSON() {
    // load all into an array
    // get the itemType and the x,y positions
    //get the itemType and its amount of 
    // 
}