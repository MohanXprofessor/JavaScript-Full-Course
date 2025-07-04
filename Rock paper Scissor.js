function rps()
{
    const choices = ['rock', 'paper', 'scissors'];
    const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        console.log("Invalid choice. Please try again.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {

      //  console.log("It's a tie!");
         document.getElementById("tie").innerHTML = "DRAW ..!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {

       // console.log("You win!");
        document.getElementById("win").innerHTML = "You.. Win!";
    } else {
        // console.log("You lose!");
         document.getElementById("lose").innerHTML = "You.. Lose  A.I Win !";
    }
}

// Call the function to start the game
rps();
