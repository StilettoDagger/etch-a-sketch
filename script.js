const sketchCanvas = document.querySelector("#sketch-container");

/**
 * Create a grid of div cells based on the specified size for the width and height of the canvas.
 * @param {number} width - The width of the canvas which is equivalent to the number of cell columns.
 * @param {number} height - The height of the canvas which is equivalent to the number of cells in each column.
 */
function createCanvas(width, height) {
    for (let i = 0; i < width; i++) {
        // Create div columns based on the width parameter.
        const newColumn = document.createElement("div");
        newColumn.classList.add("col");
        sketchCanvas.appendChild(newColumn);
        for (let j = 0; j < height; j++) {
            // For every column, create 16 cell divs
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newColumn.appendChild(newCell);
        }
    }

    createCellHoverEffect();
}

// Change the color of the cells that are hovered on with the mouse.
function createCellHoverEffect() {
    const cells = document.querySelectorAll(".cell");

    for (const cell of cells) {
        cell.addEventListener("mouseenter", e => {
            e.target.classList.add("active");
        })
    }
}

// Function for removing all canvas cells from the current canvas.
function removeCanvas() {
    sketchCanvas.innerHTML = "";
}

// Event handler function for creating a canvas grid.
function createNewCanvas(e) {
    let isValid = false;
    let userInput = null;
    do {
        userInput = prompt("Please enter the number of squares per side for your new canvas (<100): ", "16");
        if (isNaN(userInput))
        {
            alert("Please enter a valid number.");
        }

        else if (userInput >= 100)
        {
            alert("Please enter a number less than 100")
        }

        else if (userInput <= 0)
        {
            alert("Please enter a positive number");
        }

        else
        {
            isValid = true;
        }

    } while(!isValid);

    removeCanvas();

    const cellCount = Number(userInput);

    createCanvas(cellCount, cellCount);

}

document.querySelector("#new-grid").addEventListener("click", createNewCanvas);

createCanvas(16, 16);
