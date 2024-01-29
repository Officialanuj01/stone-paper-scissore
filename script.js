// **Iteration 3.1:** Declare the variables required for this game.
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors  = document.getElementById("scissors")
let comp = document.getElementsByClassName("compimage")
let userScoreUpdate = document.getElementById("userScore")
let compScoreUpdate = document.getElementById("compScore")
let resultMessage = document.getElementById("result");
let playAgainBtn = document.getElementById("playAgain");
let quit = document.getElementById("quit");
let userImgExit = null
let compImgExit = null
let userScore = 0
let compScore = 0
compChoices = ["rock","paper","scissors"]
// **Iteration 3.2:** Using random number function select the shapes randomly for the computer.

// **Iteration 3.3:** Write onclick function with the game logic to make the game functional.

let computer = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png",
    
]

function getrandom() {
    compu = Math.floor(Math.random() * 3);
    return compu;
}





function displayComputerChoice() {
    if (compImgExit) {
        compImgExit.remove();
    }

    

    let img = document.createElement("img");
    img.src = computer[getrandom()];
    img.setAttribute("class","compImg")

    const compImage = document.getElementById("compimage");
    compImage.appendChild(img);

    compImgExit = img;
}


rock.addEventListener("click",()=>{
    userChoice('rock')
    if (userImgExit){
        userImgExit.remove()
    }
    let rockimg = document.createElement("img");
    rockimg.src = "./assets/rock-hand.png";

    rockimg.style.height = "250px"
    rockimg.style.width = "320px"

    const imgondisplay = document.getElementById("gameimage");
    imgondisplay.appendChild(rockimg)

    userImgExit= rockimg;

    displayComputerChoice()
    
})

paper.addEventListener("click",()=>{
    userChoice("paper")
    if (userImgExit){
        userImgExit.remove()
    } 

    let paperimg = document.createElement("img");
    paperimg.src = "./assets/paper-hand.png";

    paperimg.style.height = "300px"
    paperimg.style.width = "370px"

    const imgondisplay = document.getElementById("gameimage");
    imgondisplay.appendChild(paperimg)

    userImgExit = paperimg;

    displayComputerChoice()
    
})

scissors.addEventListener("click",()=>{
    userChoice("scissors")
    if (userImgExit){
        userImgExit.remove()
    } 

    let scissorsimg = document.createElement("img");
    scissorsimg.src = "./assets/scissors-hand.png";

    scissorsimg.style.height = "250px"
    scissorsimg.style.width = "320px"

    const imgondisplay = document.getElementById("gameimage");
    imgondisplay.appendChild(scissorsimg)
    userImgExit = scissorsimg;

    displayComputerChoice()
})

console.log(computer[getrandom()])

function userChoice(choice){
    if((choice === "scissors" && computer[getrandom()]=== "./assets/scissors-hand.png") ||
    (choice === "rock" && computer[getrandom()]=== "./assets/rock-hand.png") ||
    (choice === "paper" && computer[getrandom()] === "./assets/paper-hand.png")){
        compScore++
        userScore++
        userScoreUpdate.innerHTML = userScore
        compScoreUpdate.innerHTML = compScore
    }
    
    else if((choice === "rock" && computer[getrandom()]=== "./assets/scissors-hand.png") ||
    (choice === "paper" && computer[getrandom()]=== "./assets/rock-hand.png") ||
    (choice === "scissors" && computer[getrandom()] === "./assets/paper-hand.png")||
    (computer[ choice === "scissors" && getrandom()]=== "./assets/rock-hand.png")){
        
        userScore++
        userScoreUpdate.innerHTML = userScore

    }

    else if((computer[getrandom()]=== "./assets/scissors-hand.png" && choice === "rock" ) ||
    (computer[getrandom()]=== "./assets/rock-hand.png" && choice === "scissors" ) ||
    (computer[getrandom()] === "./assets/paper-hand.png" && choice === "paper" )||
    (choice ==="rock" && computer[getrandom()]==="./assets/paper-hand.png")||
    (choice === "paper" && computer[getrandom()]=== "./assets/scissors-hand.png")||
    (choice === "scissors" && computer[getrandom()]=== "./assets/rock-hand.png") ){
        
        compScore++
        compScoreUpdate.innerHTML = compScore

    }

    else{
        console.log("error")
    }

    displayResult()

}
function displayResult() {
    if (userScore === 5) {
        resultMessage.innerHTML = "You Win!";
        playAgainBtn.style.display = "block";
        quit.style.display = "block";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";

    } else if (compScore === 5) {
        resultMessage.innerHTML = "Computer Wins!";
        playAgainBtn.style.display = "block";
        quit.style.display = "block";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    }
}



playAgainBtn.addEventListener("click", () => {
    window.location.reload();
});
displayResult()

quit.addEventListener("click", () => {
    location.href = "./index.html"
})














// **Iteration 3.4:** Write a function with logic to display result.

// **Iteration 3.5:** When the play again button is clicked the game page should be reloaded.
