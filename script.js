const container = document.getElementById("container");
let gridSize = 16;
let checkNull
let currentPen = "black";

document.querySelector("#black").addEventListener("click", () => {
    currentPen = "black";
});
document.querySelector("#random").addEventListener("click", () => {
    currentPen = "random";
});



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
                if (currentPen == "black") {
                    let opacity = Number(div.style.opacity);
                    div.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
                    div.style.backgroundColor = "black";
                }
                else if (currentPen == "random") {
                    let opacity = Number(div.style.opacity);
                    div.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
                    let randomColor = getRandomColor();
                    console.log(randomColor);
                    div.style.backgroundColor = randomColor;
                }
            })
        }
    }
}

function getRandomColor() {
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

function onlyClear() {
    clearCanvas();
    createCanvas(gridSize);
}

document.querySelector("#clear").addEventListener("click", () => { onlyClear(); })

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
        gridSize = size;
    } else { return; }
})
