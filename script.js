const sketchCanvas = document.querySelector("#sketch");

// Create a 16x16 grid of divs for the canvas
function createCanvas() {
    for (let i = 0; i < 16; i++) {
        // Create 16 columns
        const newColumn = document.createElement("div");
        newColumn.classList.add("col");
        sketchCanvas.appendChild(newColumn);
        for (let j = 0; j < 16; j++) {
            // For every column, create 16 rows of divs
            const newRow = document.createElement("row");
            newRow.classList.add("row");
            newColumn.appendChild(newRow);
        }
    }
}

createCanvas();