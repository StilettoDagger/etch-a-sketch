const sketchCanvas = document.querySelector("#sketch-container");

const colorOptions = []; // The options are added on line 108

let currentColor = "black";

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

/**
 * Returns a random integer between 0 and the number specified.
 * @param {number} num 
 */
function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

// Change the color of the cells that are hovered on with the mouse.
function createCellHoverEffect() {
	const cells = document.querySelectorAll(".cell");

	for (const cell of cells) {
		cell.addEventListener("mouseenter", (e) => {
			e.target.classList.remove(...colorOptions);
            if (currentColor != "random")
            {
                e.target.classList.add(currentColor);
            }
            else
            {
                const randomColor = {
                    r: random(255),
                    g: random(255),
                    b: random(255)
                };
                e.target.style.backgroundColor = `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`;
            }
		});
	}
}

function removeCanvas() {
	sketchCanvas.innerHTML = "";
}

// Event handler function for creating a new canvas grid.
function createNewCanvas(e) {
	let isValid = false;
	let userInput = null;
	do {
		userInput = prompt(
			"Please enter the size of your new canvas (<100): ",
			"16"
		);

		if (userInput === null) return;

		if (isNaN(userInput)) {
			alert("Please enter a valid number.");
		} else if (userInput >= 100) {
			alert("Please enter a number less than 100");
		} else if (userInput <= 0) {
			alert("Please enter a positive number");
		} else {
			isValid = true;
		}
	} while (!isValid);

	removeCanvas();

	const cellCount = Number(userInput);

	createCanvas(cellCount, cellCount);
}

function clearCanvas(e) {
	const cells = document.querySelectorAll(".cell");

	for (const cell of cells) {
		cell.classList.remove(...colorOptions);
        cell.style.backgroundColor = "";
	}
}

document.querySelector("#new-grid").addEventListener("click", createNewCanvas);
document.querySelector("#clear").addEventListener("click", clearCanvas);

const hamburgerButton = document.querySelector(".hamburger-icon");

hamburgerButton.addEventListener("click", (e) => {
	const sidebarMenu = document.querySelector(".sidebar-menu");

	if (hamburgerButton.classList.contains("active")) {
		setTimeout(() => sidebarMenu.classList.toggle("active"), 100);
		hamburgerButton.classList.toggle("active");
	} else {
		setTimeout(() => hamburgerButton.classList.toggle("active"), 100);
		sidebarMenu.classList.toggle("active");
	}
});

const colorButtons = document.querySelectorAll(".color-menu > div");

for (const button of colorButtons) {
	const color = button.getAttribute("data-color");
	colorOptions.push(color);
	button.addEventListener("click", (e) => {
		const currentActiveColor = document.querySelector(
			".color-menu > div.active"
		);
		currentActiveColor.classList.toggle("active");
		currentColor = e.target.getAttribute("data-color");
		e.target.classList.toggle("active");
	});
}

createCanvas(16, 16);
