const container = document.getElementById("container");
let gridWidth;
let gridHeight;



function promptUser () {
    gridWidth = prompt ("Enter Width < 101: ");
    gridHeight = prompt ("Enter Height < 101: ");
}

function createCanvas (width, height) { 
    for (let i = 0; i < parseInt(width); i++) {
        const miniContainer = document.createElement("div");
        container.appendChild(miniContainer);
        for (let i = 0; i < parseInt(height); i++) {
            const div = document.createElement("div");
            div.classList.add("grid-square");
            miniContainer.appendChild(div);
            div.addEventListener ("mouseenter", () => {
            div.classList.add("grid-square-colored");
            })
        }
    }
}

function clearCanvas () {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
    
}

createCanvas(16, 16);

const square = document.getElementsByClassName("grid-square");

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    promptUser();
    clearCanvas();
    createCanvas(gridWidth, gridHeight);
})


