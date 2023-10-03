let playerName = "";
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
const cardTypes = ["Grass Type Pokémon", "Fire Type Pokémon", "Water Type Pokémon"];

//Add an event listener to the start button
document.getElementById("start-button").addEventListener("click", function () {
    startGame(); // Call the startGame() function
});

//Add an event listener to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    //Display the name input div when page load
    document.querySelector(".name-input").style.display = "block";

});

function startGame() {

    playerName = document.getElementById("player-name").value;

    if (playerName === "") {
        //Default name if the input is empty
        playerName = "You";
        document.querySelector(".name-input").style.display = "none";
    } else {
        //Hide the name input div if a name is entered
        document.querySelector(".name-input").style.display = "none";

        //Update player's name
        document.getElementById("player-input").innerText = playerName;
    }

    //Placeholder
    document.getElementById("player-choice").src = empty;
    document.getElementById("opponent-choice").src = empty;

    //Create Cards options
    for (let i = 0; i < 3; i++) {
        let card = document.createElement("img");
        card.id = cards[i];
        card.src = cards[i];
        card.alt = cardTypes[i];
        card.addEventListener("click", selectCard);
        document.getElementById("cards").append(card);
    }

    //Create number of rounds
    for (let j = 0; j < 5; j++) {

        let round = document.createElement("img");
        round.id = "pokeball";
        round.src = pokeball;
        document.getElementById("pokeballs").append(round);
    }
}


function checkWinner(rounds) {
    //Check if there are no more rounds left
    if (rounds.length - 1 === 0) {
        // Restart the game
        let resultMessage = "Looks like it's a tie, Trainer!";
        if (playerScore > opponentScore) {
            resultMessage = "Congratulations! You're a Pokémon Master!";
        } else if (playerScore < opponentScore) {
            resultMessage = "Don't give up, Trainer! Your next battle awaits!";
        }
        setTimeout(function () {
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
        }, 800);
        return true;
    }
    return false;

}

function selectCard() {
    player = this.id;
    //Add image to arena when the card is selected
    document.getElementById("player-choice").src = player;
    opponent = cards[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent;
    //Add alt elements
    document.getElementById("player-choice").alt = cardTypes[cards.indexOf(player)];
    document.getElementById("opponent-choice").src = opponent;
    document.getElementById("opponent-choice").alt = cardTypes[cards.indexOf(opponent)];
    let rounds = document.querySelectorAll("#pokeballs img");
    if (checkWinner(rounds) == false) {
        //Check scores
        if (player != opponent) {
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
    }
    //Remove a round element
    if (rounds.length > 0) {
        document.getElementById("pokeballs").removeChild(rounds[0]);
    }
}

// Add a click event listener to the "info-button" element
document.getElementById("info").addEventListener("click", function (event) {
    event.stopPropagation();

    let rulesDiv = document.querySelector(".rules");

    if (rulesDiv.style.display === "none") {
        rulesDiv.style.display = "block";
    } else {
        rulesDiv.style.display = "none";
    }
});

// Add an event listener to the "play-audio" button
document.getElementById("play-audio").addEventListener("click", function () {

    let audio = document.getElementById("audio");

    if (audio.paused) {
        audio.volume = 0.4;
        audio.loop = true;
        audio.play();
    } else {
        audio.pause();
        audio.loop = false;
    }
});