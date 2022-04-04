// Create Your Own Trivia Game With Score Keeper
let userName = window.prompt('Please enter your name:')
console.log(userName)
let userScore = 0
let playAgain = true
window.prompt('This trivia game will keep score of how many questions you get right. For each question you get right, you will earn 10 points. Please enter your answers in ALL CAPS!')

function playGame(){
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        console.log("User Answer: " + userAnswer)
        if(userAnswer === question.correctAnswer){
            console.log('Correct')
            userScore = userScore + 10
            console.log("Score: " + userScore)
        } else {
            console.log('Incorrect. The correct answer is ' + question.correctAnswer)
            console.log("Score: " + userScore)
    }
}
window.alert('Your score is: ' + userScore)
}
while (playAgain === true){     //while playAgain boolean is true:
    playGame()      //repeats game
    let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
    userChoice.toLowerCase()
    if(userChoice === 'yes' || userChoice === 'y' ){
        playAgain = true        //assigns playAgain to true = repeat the game
    } else{
        playAgain = false       //assigns playAgain to false = exits the while loop
        window.alert('Thanks for playing the game!')
    } 
        
}
