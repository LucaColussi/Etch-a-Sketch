function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createSquares() {
    let cont = document.querySelector(".square");
    cont.style.display = "flex";
    cont.style.flexWrap = "wrap"; // Permette ai quadrati di andare a capo

    for(let i = 0; i < 16*16; i++){
        let square = document.createElement('div');
        square.style.width = "37.5px";
        square.style.height = "37.5px";
        square.style.border = "1px solid black";
        square.style.boxSizing = "border-box"; // Include il bordo nelle dimensioni

        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor(); // Cambia il colore del quadrato
        });
        cont.appendChild(square);
    }
}


function getSquares() {
    let nSquares;
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

        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor(); // Cambia il colore del quadrato
        });

        cont.appendChild(square);
    }
}

createSquares();