var cards = ["assets/images/bulbasaur.png", "assets/images/charmander.png", "assets/images/squirtle.png"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let card = document.createElement("img");
        card.id = cards[i];
        card.src = cards[i];
        document.getElementById("cards").append(card);
    }
};