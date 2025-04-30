const board = document.querySelector(".board");
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add((row+col)%2==0 ? "white" : "black");
        board.appendChild(square);
    }
}