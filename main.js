
//players
const players = {
    'humPlayer': 'red',
    'comPlayer': 'green',
    'tie': 'yellow',
}

//winning
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5,], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//board
const boardParent= document.querySelector('#board');
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let squares = document.querySelectorAll('.square');
   
//event listeners
document.getElementById('#board').addEventListener('click', handleMove)


//functions
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * board.length);
    return computerChoice;
}
//console.log(getComputerChoice);
//Establishing a Winner 

