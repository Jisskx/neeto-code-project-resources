let board = ["","","","","","","","",""];
let clickCount = 0;
let gameBoard = document.querySelector('.game-board');
let boardTile = Array.from(document.querySelectorAll('.board-tile'));
let gameResetButton = document.querySelector('.game-reset-button');
let resultDeclaration = document.createElement('p');
let main = document.querySelector('main');
resultDeclaration.classList.add('game-result');

let crossImage = document.createElement('img');
crossImage.setAttribute("src","https://img.icons8.com/?size=100&id=VaHFapP3XCAj&format=png&color=000000");
crossImage.setAttribute("draggable", "false");
crossImage.classList.add('tile-image');

let circleImage = document.createElement('img');
circleImage.setAttribute("src", "https://img.icons8.com/?size=100&id=iZOwwRoXGC6C&format=png&color=000000");
circleImage.setAttribute("draggable", "false");
circleImage.classList.add('tile-image');

const gameLogic = (event)=> {
    if(!event.target.closest('.board-tile')){
        return;
    };
    clickCount++;
    if(clickCount % 2 === 0){
        event.target.appendChild(circleImage.cloneNode(true));
        board[boardTile.indexOf(event.target)] = "O";
    } else {
        event.target.appendChild(crossImage.cloneNode(true));
        board[boardTile.indexOf(event.target)] = "X";
    }
    resultCheck();
};

gameBoard.addEventListener('click', gameLogic);

gameResetButton.addEventListener('click', () =>{
    clickCount = 0;
    board = ["","","","","","","","",""];
   for(let tile of boardTile){
    if(tile.hasChildNodes()){
        tile.firstChild.remove();
    };
   };
   resultDeclaration.innerText = "";
   resultDeclaration.remove();
   gameBoard.addEventListener('click', gameLogic);
});

const resultCheck = ()=> {
    if((board[0]===board[1] && board [1] === board[2] && board[0] !== "")
        || (board[3]===board[4] && board [4] === board[5] && board[3] !== "")
        || (board[6]===board[7] && board [7] === board[8] && board[6] !== "")
        || (board[0]===board[3] && board [3] === board[6] && board[0] !== "")
        || (board[1]===board[4] && board [4] === board[7] && board[1] !== "")
        || (board[2]===board[5] && board [5] === board[8] && board[2] !== "")
        || (board[0]===board[4] && board [4] === board[8] && board[0] !== "")
        || (board[3]===board[4] && board [4] === board[6] && board[3] !== "")
    ) { 
        if(clickCount % 2 !== 0){      
            resultDeclaration.innerText = "X wins!";
            gameBoard.removeEventListener('click', gameLogic);
        } else {
            resultDeclaration.innerText = "O wins!";
            gameBoard.removeEventListener('click', gameLogic);
        };
    } else if (!board.includes("")){
        resultDeclaration.innerText = "Tie";
        gameBoard.removeEventListener('click', gameLogic);
    };
    main.insertBefore(resultDeclaration, gameResetButton);
};