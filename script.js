const container = document.getElementById("container");
let gridWidth;
let gridHeight;
let checkNull


function promptUser() {
    gridSize = prompt("Enter Number from 0 - 100: ");
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
                let randomColor = getRandomColor();
                console.log (randomColor);
                div.style.backgroundColor = randomColor;
            })
        }
    }
}

function getRandomColor () {
    const rgbValue1 = (Math.floor(Math.random() * 255));
    const rgbValue2 = (Math.floor(Math.random() * 255));
    const rgbValue3 = (Math.floor(Math.random() * 255));
    return `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`
}

function clearCanvas() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

createCanvas(16, 16);

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
