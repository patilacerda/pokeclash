# Poké Clash

![Poké Clash](assets/images/title_pkc.png)

Poké Clash is an exciting Pokemon card battle game inspired by the classic rock-paper-scissors game where you can challenge the computer to a game of strategy. [View the deployed project here](https://patilacerda.github.io/pokeclash_PP2/).

![Responsive](assets/images/responsive.png)

## Features

### How to play

You have the option to personalize your game experience by entering your name. When the game starts, you can insert your own name to appear on the arena screen.

1. Start by selecting your Pokemon card.
2. The computer will also randomly select a Pokemon card.
3. Each Pokemon card has its type (e.g., Fire, Water, Grass).
4. The game follows the type advantage system:
   - Fire beats Grass
   - Grass beats Water
   - Water beats Fire
5. Keep playing to see how many wins you can rack up against the computer!

### Future Features

While the current version of Poké Clash is a simple one-card battle against the computer, we have exciting plans for the future, including:

- Expanding the card collection with more Pokemon and abilities.
- Implementing a ranking system for players to compete and climb the leaderboards.
- Adding animations and visual effects for a more immersive experience.

## User Experience

### User stories

- As a Pokemon fan, I want to enjoy a quick and fun card battle game against the computer.
- As a gamer, I want a straightforward interface to engage with the game.
- As a competitive player, I want to challenge the computer and test my strategic skills.

### Wireframes

Wireframes created using Balsamiq.

![Wireframes](assets/images/pokeclash_wireframe.png)

## Design

### Typography

- Press Start 2P, cursive - The main font, it perfectly captures the essence of a classic console game.

### Colour Scheme

The color scheme draws inspiration from Pokemon frames and previous games to create a nostalgic experience:

![Color Scheme](assets/images/color.png)

- Black: Used for buttons, borders, and lettering, providing a sharp and contrasting element.
- Control’s area background and additional tabs(#eaedc8): A soft, yellowish hue reminiscent of the classic Game Boy screen.
- Background (#AFD4E8): A cool blue shade representing the world of Pokemon and adventure.

### Layout

The site is a single page with 3 sections:

![Layout](assets/images/layout.png)

- Main Frame: The central game area where battles take place.
- Player Name Tab: A tab where you can insert your name, adding a personal touch to your gaming experience.
- Rules Tab: A tab where you can view the game rules, ensuring you're always informed and ready for action.

## Technologies Used

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

- [Google Fonts](https://fonts.google.com/) - Provide all of the fonts for this website.
- [Font Awesome](https://fontawesome.com/) - Used for the site icons.
- [Favicon](https://favicon.io/) - Used to generate favicon.
- [Photoshop](https://www.adobe.com/ie/products/photoshop.html) - Used to compress images to reduce file size without a reduction in quality and create the cards background on controls area.
- [Git](https://git-scm.com/) - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub](https://github.com/patilacerda) - Used for hosting the code.
- [Balsamiq](https://balsamiq.com/) - Used to create site wireframes.
- [Only Mp3](http://en.onlymp3.to/TCK/) - Used to convert the Youtube video to Mp3 audio.
- [Am I Responsive](http://ami.responsivedesign.is/) - Used to check if the site is responsive on different screen sizes.
- [Responsinator](http://www.responsinator.com/) - Used to check if the site is responsive on different screen sizes.
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - Used for overall development and tweaking, including testing responsiveness and performance.
- [Free Online Formatter](https://www.freeformatter.com) - Used to correct indentation issues and get rid of unnecessary whitespace.

## Testing

### Validating

- HTML - No errors were returned when passing through the [W3C Markup Validator](https://validator.w3.org/nu/).
  ![HTML Validation](assets/images/html_valid.png)
  
- CSS - No errors were found when passing through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
  ![CSS Validation](assets/images/css_valid.png)
  
- JavaScript - No errors were found when passing through [JSHint](https://jshint.com/).

  ![JavaScript Validation](assets/images/js_valid.png)
  
- Accessibility - Desktop 97% performance average and mobile 85% performance on Lighthouse.
  ![Lighthouse](assets/images/lighthouse.png)

### Further Testing

Chrome Developer Tools are used to test the responsiveness on: Desktop, Laptop, iPhone SE, iPhone XR, iPhone 12 Pro, iPad, iPad Pro, Galaxy Fold.

### Known Bugs

Score Calculation Issue: In some instances, the game wasn't calculating the scores correctly. Players had to click 6 times instead of 5 to determine the winner. Additionally, sometimes the game incorrectly displayed a tie when one player should have won. This issue has been resolved by updating the statement that checks the round length. Instead of `(rounds.length === 0)`, we now use `(rounds.length - 1 === 0)` to ensure accurate score calculation.

## Deployment

The project was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1. Go to the repository on GitHub.com.
2. Select 'Settings' near the top of the page.
3. Select 'Pages' from the menu bar on the left of the page.
4. Under 'Source' select the 'Branch' dropdown menu and select the main branch.
5. Once selected, click the 'Save'.
6. Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

### Cloning

To clone the repository, follow these steps:

1. Locate the [repository link](https://patilacerda.github.io/pokeclash_PP2/) on GitHub.
2. Under the 'Code' button, you will see different cloning options, including HTTPS, SSH, and GitHub CLI. Click on your preferred cloning option.
3. Copy the URL provided.
4. Open your Terminal or Command Prompt.
5. In the Terminal, navigate to the directory where you want to create the local clone. You can use the cd command to change the current working directory.
6. Type the following command:
7. Press 'Enter' to execute the command. This will create a local clone of the repository in the specified directory.

## Credits

### Content

- The idea for this game was inspired by Code Institute Assessment Guide.
- The code for this project was inspired by the work of [Kenny Yip](https://www.kennyyipcoding.com/).

### Media

Media used in this game, such as images and graphics, were sourced from the following links:

- Squirtle, Pikachu and Bulbasaur - [Stick png](https://www.stickpng.com/)
- Charmander - [Png find](https://www.pngfind.com/)
- Arena background - [Nauris Amatnieks Artstation page](https://www.artstation.com/artwork/0PKZ8)
- Pokebola for rounds and favicon - [Wikimedia](https://commons.wikimedia.org/)
- Audio - [Pokemon Theme 16-bit](https://www.youtube.com/watch?v=1Pca2uJbYC4)

### Acknowledgments

I would like to express my gratitude to Nintendo for creating the magical world of the Pokemon game series, which has filled our childhoods with cherished memories.

A special thanks to my husband William Paiva for support and constant motivation throughout this project.

I am grateful to my mentor Antonio Rodriguez for providing valuable guidance and assistance during the final adjustments.

To all my friends who dedicated their time to test the game and join in the fun, your support and enthusiasm have been invaluable.

Your contributions, encouragement, and presence have made this project a reality, and I couldn't have done it without you. Thank you all!
