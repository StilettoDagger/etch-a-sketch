const sketchCanvas = document.querySelector("#sketch-container");

// Create a 16x16 grid of divs for the canvas
function createCanvas() {
    for (let i = 0; i < 16; i++) {
        // Create 16 div columns
        const newColumn = document.createElement("div");
        newColumn.classList.add("col");
        sketchCanvas.appendChild(newColumn);
        for (let j = 0; j < 16; j++) {
            // For every column, create 16 cell divs
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newColumn.appendChild(newCell);
        }
    }
}

createCanvas();