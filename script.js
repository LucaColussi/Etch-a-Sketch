let clicked = false;
let eraseClicked = false;
let nSquares = 16;

const square = document.querySelector("body");

square.addEventListener("mousedown", function() {
    clicked = true;
})


square.addEventListener("mouseup", function() {
    clicked = false;
})

function getRandomColor() {
    return Math.floor(Math.random() * 255);
}

function getSquares() {
    while (true) {
        nSquares = prompt("Insert the number of squares per side (1-100): ");
        
        // Check if the user clicked 'Cancel'
        if (nSquares === null) {
            alert("Operation cancelled.");
            return null;  // Exit the function if the user cancels
        }

        // Convert the input to an integer
        nSquares = parseInt(nSquares, 10);

        // Check if the input is a valid number within the range
        if (!isNaN(nSquares) && nSquares >= 1 && nSquares <= 100) {
            return changeSquares(nSquares);  // Return the valid number
        }

        // If the input is invalid, show an error message
        alert("Invalid input! Please insert a number between 1 and 100.");
    }
}



function changeSquares(nSquares) {
    let cont = document.querySelector(".square");
    cont.innerHTML = ""; // Svuota il contenitore
    cont.style.display = "flex";
    cont.style.flexWrap = "wrap"; // Permette ai quadrati di andare a capo
    let length = 600 / nSquares;
    for(let i = 0; i < nSquares*nSquares; i++){
        let square = document.createElement('div');
        square.style.width = length + "px";
        square.style.height = length + "px";
        square.style.border = "1px solid black";
        square.style.boxSizing = "border-box"; // Include il bordo nelle dimensioni
        square.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Colore nero con opacita' iniziale a 0
        
        square.addEventListener('mouseover', function() {
            if(clicked) {

                let currentOpacity = parseFloat(square.style.backgroundColor.split(",")[3]); // Estrai l'opacita' corrente
                
                if (isNaN(currentOpacity)) {
                    currentOpacity = 1; // Nel caso in cui non ci sia opacita', impostala a 0
                }

                if (currentOpacity < 1) {
                    currentOpacity = Math.min(currentOpacity + 0.1, 1); // Incrementa l'opacita' di 0.1 fino ad un massimo di 1
                }
                if(!eraseClicked){
                    square.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${currentOpacity})`; // Imposta il colore di sfondo con la nuova opacita'
                } else {
                    square.style.backgroundColor = `rgba(0,0,0,0)`; 
                }
            }
        });

        square.addEventListener('mousedown', function() {

                let currentOpacity = parseFloat(square.style.backgroundColor.split(",")[3]); // Estrai l'opacita' corrente
                
                if (isNaN(currentOpacity)) {
                    currentOpacity = 1; // Nel caso in cui non ci sia opacita', impostala a 0
                }

                if (currentOpacity < 1) {
                    currentOpacity = Math.min(currentOpacity + 0.2, 1); // Incrementa l'opacita' di 0.1 fino ad un massimo di 1
                }
                if(!eraseClicked){
                    square.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${currentOpacity})`; // Imposta il colore di sfondo con la nuova opacita'
                } else {
                    square.style.backgroundColor = `rgba(0,0,0,0)`; 
                }
            
        });
        
        cont.appendChild(square);
    }
}

function reset(){
    changeSquares(nSquares);
}

function erase(){
    eraseClicked = true;
}
function draw(){
    eraseClicked = false;
}
changeSquares(nSquares);