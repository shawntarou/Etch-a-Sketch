const container = document.getElementById("container");
let gridWidth;
let gridHeight;
let checkNull



function promptUser () {
    gridWidth = prompt ("Enter Width < 101: ");
    if (!gridWidth) {checkNull = true; return;}
    gridHeight = prompt ("Enter Height < 101: ");
    if (!gridHeight) {checkNull = true; return;}
    checkNull = false;
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
    if (checkNull == true) {
    console.log("null");
    return;
    }
    
    if (!(isNaN(gridWidth) && isNaN(gridHeight))) {
        clearCanvas();
        createCanvas(gridWidth, gridHeight);
    } else {return;}
})


