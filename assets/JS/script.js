let player;
let opponent;
var cards = ["assets/images/bulbasaur.png", "assets/images/charmander.png", "assets/images/squirtle.png"];

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

}