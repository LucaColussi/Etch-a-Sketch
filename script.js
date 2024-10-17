
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

        cont.appendChild(square);
    }
}

function changeSquares() {
    
}

createSquares();