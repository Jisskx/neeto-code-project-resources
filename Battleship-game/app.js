let clicks = 0;
let shipsFound = 0;
let gameTileImage = document.querySelectorAll('.tile-image');
let gameResetButton = document.querySelector('.game-reset-button');
let resultDialogBox = document.querySelector('.game-result-dialog-box');
let resultCloseButton = document.querySelector('.result-close-button');
let gameResult = document.createElement('p');
gameResult.classList.add('game-result');

const gameLogic = (event) => {
    clicks++;
    event.target.style.opacity = 1;
    if(event.target.classList.contains("ship-image")){
      shipsFound++;
    }
    if(clicks>=8){
        gameResult.innerText = (shipsFound === 5) ? "You won!" : "You lost!";
        resultDialogBox.insertBefore(gameResult,resultCloseButton);
        resultDialogBox.show();
    } else if(shipsFound === 5){
        gameResult.innerText = "You won!";
        resultDialogBox.insertBefore(gameResult,resultCloseButton);
        resultDialogBox.show();
    }
};
for(let tile of gameTileImage){
    tile.addEventListener('click', gameLogic);
};

resultCloseButton.addEventListener('click', () => {
    resultDialogBox.close();
    resetGame();
});

let resetGame = ()=>{
    for(let tile of gameTileImage){
      tile.style.opacity = 0;
    }
    resultDialogBox.close();
    for(let tile of gameTileImage){
    clicks = 0;
    shipsFound = 0;
    tile.addEventListener('click',gameLogic);
    }
};

gameResetButton.addEventListener('click', resetGame);