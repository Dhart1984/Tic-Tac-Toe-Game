/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


/*----- app's state (variables) -----*/
// playerScore, tieScore, computerScore
let playerScore
let tieScore
let computerScore

// result will have 
 let playerResult
 let computerResult

// will we need a variable to track the current result (TBD)

/*----- cached element references -----*/

const pScoreEl = document.querySelector("#p-score")
const tScoreEl = document.querySelector("#t-score")
const cScoreEl = document.querySelector("#c-score")

const btnEls = document.querySelectorAll("button")

// results element references
const pResultEl = 
// player / computer

/*----- event listeners -----*/

function handleClick(evt){
    const playerChoice = evt.target.textContent
    const computerChoice = getComputerChoice()
    checkWinner(playerChoice, computerChoice)

    // handle updating results


    // the score in state changes -> 
    
    // call checkWinner() - win logic 
        // player choice // "R""P""S"
        // computer choice - randomly select a number 0>3 | what does this number do 
        // use the number to 'randomly' pick a option from an array of options

    // based on what the player choose and the computer chooses -> determine a winner 
    // depending on the winner > update the appropriate score 
    
    render()
}

btnEls.forEach( function (btn) {
    // when providing a callback function to an array method -> 3 arguments
    // 1 - element reference (value contained in the array)
    // 2 - (optional) - index of the current element
    // 3 - (optional) - array reference itself
    // console.log(btn)
    btn.addEventListener("click", handleClick)
    // event listener - accepts 2 arguments (required)
    // 1. event type
    // 2. callback reference 
})


/*----- functions -----*/

function init() {
    console.log('starting game')
    
    // set the data (scores)
    playerScore = 0
    tieScore = 0
    computerScore = 0 
    
    // set the default result image value for player / computer 
    
    render()
}

function render(){
    console.log('rendering game')
    renderScores()
}

function renderScores(){
    // update cached dom elements - scoreEls
    pScoreEl.textContent = playerScore
    tScoreEl.textContent = tieScore
    cScoreEl.textContent = computerScore
}

function renderResults(){
    // update cached dom elements - resultEls
    // set the src attribute of our result el with the current player/computer result
}

function getComputerChoice(){
    const options = ["R","P","S"]
    const randomPos = Math.floor(Math.random()*options.length)
    return options[randomPos]
}

function checkWinner(p1, p2){
    // accept two arguments - p1, p2
    console.log("check winner", p1, p2)
    // what determines the winner ?
}
    if(p1 === p2){
        console.log('tie')
        tieScore ++ 
    } else if(p1 === "R" && p2 ==="S"){
        playerScore ++ 
    } else if(p1 === "P" && p2 ==="R"){
        playerScore ++ 
    } else if(p1 === "S" && p2 ==="P"){
        playerScore ++ 
    } else {
        computerScore ++ 
    }

    // Goal: Create a conditional / if else if else statement - that will evaluate the winning conditions for player 1 -> log the winner ("player 1 wins!")
    // update scores after winner is chosen
    // return ???