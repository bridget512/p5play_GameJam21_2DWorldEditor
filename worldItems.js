

let worldItems = [];

// class itemMenu {
//     constructor(s) {
//         this.itemMenuBackground = { x: 0, y: 0, w: width, h: 70 }
//         this.itemMenuItem = { x: 10, y: 10, w: 50, h: 50 }
//     }

//     drawMenu() {
//         rect(this.itemMenuBackground.x,  
//              this.itemMenuBackground.y, 
//              this.itemMenuBackground.w, 
//              this.itemMenuBackground.h
//             );
//     }

//     drawMenuItems() {
//         fill(250, 25, 255, 150);
//         rect(this.itemMenuItem.x,  
//             this.itemMenuItem.y, 
//             this.itemMenuItem.w, 
//             this.itemMenuItem.h
//            );
//     }
// }

// main class for menuItems

class menuItem {
	constructor(x, y, size, color){
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = "yellow"; // replace  with selectedTileSprite
		this.display();
	}

	display(){
		fill(this.color);
		rect(this.x, this.y, this.size, this.size);
	}
}

// subclass for menuItems
// 
class menuItemObject {
	constructor(x, y, shape, tileSize){
		this.x = x;
		this.y = y;
		this.shape = shape;
		this.tileSize = tileSize;
	}

	display() {
		let itemSpacing = 41;

        for (let i = 0; i < 14; i++) {
            new menuItem(this.x + i * itemSpacing , this.y , this.tileSize);
        }
	}


} // class menuItemObject