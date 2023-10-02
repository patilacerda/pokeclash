let player;
let playerScore = 0;
let opponent;
let opponentScore = 0;
let empty = "assets/images/empty.png";
let bulbasaur = "assets/images/bulbasaur.png";
let charmander = "assets/images/charmander.png";
let squirtle = "assets/images/squirtle.png";
let pokeball = "assets/images/pokeball.png";

let gameEnded = false;

let cards = [bulbasaur, charmander, squirtle];

window.onload = function startGame() {
    //Placeholder
    document.getElementById("player-choice").src = empty;
    document.getElementById("opponent-choice").src = empty;

    //Creat Cards options
    for (let i = 0; i < 3; i++) {
        let card = document.createElement("img");
        card.id = cards[i];
        card.src = cards[i];
        card.addEventListener("click", selectCard);
        document.getElementById("cards").append(card);
    }

    //Creat number of rounds
    for (let j = 0; j < 5; j++) {

        let round = document.createElement("img");
        round.id = "pokeball";
        round.src = pokeball;
        document.getElementById("pokeballs").append(round);
    }
};

function selectCard() {
    player = this.id;
    document.getElementById("player-choice").src = player;

    opponent = cards[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent;

    //Check scores
    if (player == opponent) {
        playerScore += 1;
        opponentScore += 1;
    }
    else {
        //Grass type beat water type
        if (player == bulbasaur) {
            if (opponent == squirtle) {
                playerScore += 1;
            }
            //Fire beat Grass
            else if (opponent == charmander) {
                opponentScore += 1;
            }
        }
        //Fire beat grass
        else if (player == charmander) {
            if (opponent == bulbasaur) {
                playerScore += 1;
            }
            //Water beat Fire
            else if (opponent == squirtle) {
                opponentScore += 1;
            }
        }
        //Water beat Fire
        else if (player == squirtle) {
            if (opponent == charmander) {
                playerScore += 1;
            }
            //Grass beat Water
        else if (opponent == bulbasaur) {
                opponentScore += 1;
            }
        }
    }

    //Add Score
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("opponent-score").innerText = opponentScore;

    // Remove a round element
    let rounds = document.querySelectorAll("#pokeballs img");
    if (rounds.length > 0) {
        document.getElementById("pokeballs").removeChild(rounds[0]);
    }

    //Check if there are no more rounds left
    if (rounds.length === 0) {
        // Restart the game
        let resultMessage = "Looks like it's a tie, Trainer!";
        if (playerScore > opponentScore) {
            resultMessage = "Congratulations! You're a Pokémon Master!";
        } else if (playerScore < opponentScore) {
            resultMessage = "Don't give up, Trainer! Your next battle awaits!";
        }

        alert(resultMessage);

        gameEnded = true;

        // Reset the scores to 0
        playerScore = 0;
        opponentScore = 0;
        document.getElementById("player-score").innerText = playerScore;
        document.getElementById("opponent-score").innerText = opponentScore;

        // Reset player and opponent choices to the placeholder image
        document.getElementById("player-choice").src = empty;
        document.getElementById("opponent-choice").src = empty;

        // Re-add round elements
        for (let j = 0; j < 5; j++) {
            let round = document.createElement("img");
            round.id = "pokeball";
            round.src = pokeball;
            document.getElementById("pokeballs").append(round);
        }
    }

}