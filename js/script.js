let randomNumber = Math.ceil(Math.random() * 100); //get the random number between 0 to 1
console.log("random number:", randomNumber);

//2.input box to read the
let userGuess = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let userHistory = document.getElementById("userHistory");
let resetButton = document.getElementById("resetButton");


//3.when user click the button
let guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", guess)
resetButton.addEventListener("click", resetGame)
let history = [];
let message = '';
//4 number chance 
let chance = 3;
let chanceLimit = chance;
//4 a show that chance to user.
chanceArea.innerHTML = `${chance}`;

function guess() {
    let userNumber = userGuess.value;
    let message = '';
    let text = "";
    if (!userNumber) {
        return resultArea.innerHTML = "Please add your number!!!";
    }
    if (userNumber == 0 || userNumber < 0) {
        message = "Please type again!!!"
        return resultArea.innerHTML = `${message}`;

    }

    if (history.includes(userNumber)) {
        message = "You have already guess this number!"
        return resultArea.innerHTML = `${message}`;
    }
    //3a. read the value from input
    chance = chance - 1;
    if (chance === 0) {
        guessButton.disabled = true;
    }


    history.push(userGuess.value);
    let i;
    for (i = 0; i < history.length; i++) {
        text += history[i] + " ";
    }

    //3b compare with user typed number
    if (userNumber == randomNumber) {
        message = "Yeah~~~~Correct!!!Smart!!!";
    } else if (userNumber > randomNumber) {
        message = "Too big....bro";
    } else if (userNumber < randomNumber) {
        message = "Too small.....bro!!!";
    }

    


    userHistory.innerHTML = `${text}`;

    resultArea.innerHTML = `${message}`;
    chanceArea.innerHTML = `${chance}`;

}
function resetGame() {
    chance = chanceLimit;
    history = [];
    randomNumber = Math.ceil(Math.random() * 100);
    resultArea.innerHTML = ``;
    chanceArea.innerHTML = `${chance}`;
    userHistory.innerHTML = '';
    document.getElementById("userInput").value = '';
    // userNumber = '';
    console.log('New Random Number:', randomNumber);
    document.getElementById("guessButton").disabled = false;
    time = timeLimit;
    timeOut();
    return youlose ();
    
}

function youlose () {
    myTime = setInterval(() => {
        time -= 1;
        if((chance == 0) || (time == 0)) {
            timeOut();
            document.getElementById('timecount').innerHTML = 0;
            message = "You are lose!!! Please press reset to start again!";
            resultArea.innerHTML = `${message}`;
        } else {   
        document.getElementById('timecount').innerHTML = `${time}`;}
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}

function timeOut() {
    clearInterval(myTime);
}

// // function timeOut() {
// //     if (time < 0) {
// //         clearInterval(myTime);
// //         document.getElementById('timecount').innerHTML = 'You lose!!!'
// //     }
    
// }

let time = 30 // time start from 0
let timeLimit = time;
    let myTime; // timer will be assign to this variable
    function timecounting() {
        myTime = setInterval(() => {
            time -= 1;
            document.getElementById('timecount').innerHTML = `${time}`;
        }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
    }
    
    
    youlose ();

    





// function historyArray() {
//     let text = "";
//     history.push(userGuess.value);
//     let i;
//     for (i = 0; i < history.length; i++) {
//         text += history[i] + " ";
//     }
//     let userNumber =  userGuess.value;
//     if (history.includes(userNumber)) {
//         message = "You have already guess this number!"
//     }
//         // if (userGuess.value == history[i]) {
//         //     message = "You have already guess this number!";
//         // }
//         resultArea.innerHTML = `Result here: ${message}`;



//     userHistory.innerHTML = `${text}`;



// }


