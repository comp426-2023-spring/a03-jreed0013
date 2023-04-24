// Setting up arrays for the games
const rpsChoices = ["rock", "paper", "scissors"]
const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]


// functions to play the games
export function rps(choice) {
    // checking arguments
    if (!rpsChoices.includes(choice)) {
        console.error(`${choice} is out of range.`);
        rulesRPS();
        helpRPS();
        return;
    }

    // generating computer choice
    const computerChoice = rpsMoves[Math.floor(Math.random() * rpsChoices.length)];

    // tie case
    if (choice == computerChoice) { 
        return { 
            "player": choice,
            "opponent": computerChoice,
            "result": "tie"
        };
    };

    // win and lose case
    if ((choice == "rock" && computerChoice == "scissors") ||
        (choice == "scissors" && computerChoice == "paper") ||
        (choice == "paper" && computerChoice == "rock")) {
        return {
            "player": choice,
            "opponent": computerChoice,
            "result": "win"
        };
    } else {
        return {
            "player": choice,
            "opponent": computerChoice,
            "result": "lose"
        };
    }
}



export function rpsls(playerMove) {
    // checking arguments
    if (!rpslsChoices.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);
        rulesRPSLS();
        helpRPSLS();
        return;
    }

    // generating computer choice
    const computerMove = rpsMoves[Math.floor(Math.random() * rpsMoves.length)];

    // tie case
    if (playerMove == computerMove) {
        return { 
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        };
    };

    // win and lose case
    if ((playerMove == "rock" && (computerMove == "scissors" || computerMove == "lizard")) ||
        (playerMove == "scissors" && (computerMove == "paper" || computerMove == "lizard")) ||
        (playerMove == "paper" && (computerMove == "rock" || computerMove == "spock")) ||
        (playerMove == "lizard" && (computerMove == "paper" || computerMove == "spock")) ||
        (playerMove == "spock" && (computerMove == "rock" || computerMove == "scissors"))) {
        return {
            "player": playerMove,
            "opponent": computerMove,
            "result": "win"
        };
    } else {
        return {
            "player": playerMove,
            "opponent": computerMove,
            "result": "lose"
        };
    }
}


// game help functions
export function helpRPS() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    return;
}


export function helpRPSLS() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    return;
}


// game rules functions
export function rulesRPS() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}


export function rulesRPSLS() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

