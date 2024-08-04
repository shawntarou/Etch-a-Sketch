const container = document.getElementById("container");
let gridWidth;
let gridHeight;
let checkNull


function promptUser() {
    gridSize = prompt("Enter Number < 101: ");
    if (!gridSize) { checkNull = true; return; }
    if (gridSize > 100) { checkNull = true; alert("Number too big"); return; }
    if (isNaN(gridSize)) {
        checkNull = true; alert("Not a valid number"); return;
    }
}

function createCanvas(size) {
    const squareSize = 960 / size;
    for (let i = 0; i < parseInt(size); i++) {
        const miniContainer = document.createElement("div");
        container.appendChild(miniContainer);
        for (let i = 0; i < parseInt(size); i++) {
            const div = document.createElement("div");
            div.classList.add("grid-square");
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            miniContainer.appendChild(div);
            div.addEventListener("mouseenter", () => {
                div.classList.add("grid-square-colored");
            })
        }
    }
}

function clearCanvas() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

createCanvas(100, 100);

const square = document.getElementsByClassName("grid-square");

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    promptUser();
    if (checkNull == true) {
        return;
    }

    if (!(isNaN(gridSize))) {
        clearCanvas();
        createCanvas(gridSize);
    } else { return; }
})
