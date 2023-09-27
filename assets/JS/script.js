let player;
let playerScore = 0;
let opponent;
let opponentScore = 0;
let bulbasaur = "assets/images/bulbasaur.png";
let charmander = "assets/images/charmander.png";
let squirtle = "assets/images/squirtle.png";

var cards = [bulbasaur, charmander, squirtle];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
     
        let card = document.createElement("img");
        card.id = cards[i];
        card.src = cards[i];
        card.addEventListener("click", selectCard);
        document.getElementById("cards").append(card);
    }
};

function selectCard() {
    player = this.id;
    document.getElementById("player-choice").src = player;

    opponent = cards[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent;

    if (player == opponent) {
        playerScore += 1;
        opponentScore += 1;
    }
    else {
        if (player == bulbasaur) {
            if (opponent == squirtle) {
                playerScore += 1;
            }
            else if (opponent == charmander) {
                opponentScore += 1;
            }
        }
        else if (player == charmander) {
            if (opponent == bulbasaur) {
                playerScore += 1;
            }
            else if (opponent == squirtle) {
                opponentScore += 1;
            }
        }
        else if (player == squirtle) {
            if (opponent == charmander) {
                playerScore += 1;
            }
        else if (opponent == bulbasaur) {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("opponent-score").innerText = opponentScore;

}