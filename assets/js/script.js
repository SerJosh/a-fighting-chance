/** Landing Page Button Functions */

/** Landing Page -go to-> GAME PAGE addEventListener function via Play Button,
 *  Getting the Player Name to the Game page function */
document.getElementById("start-game-btn").addEventListener("click", function () {
    window.location.href = "#game-page";
    let inputValue = document.getElementById("name").value;
    document.getElementById("player").innerText = inputValue;

});

/** Landing Page -go to-> HOW TO PLAY addEventListener function via How to Play Button */
document.getElementById("hw-to-ply").addEventListener("click", function () {
    window.location.href = "#hw-to-ply-page";
});

/** Landing Page -go to-> ABOUT THE GAME addEventListener function via About the Game Button  */
document.getElementById("about-game").addEventListener("click", function () {
    window.location.href = "#about-page";
});

/** Game Page Button Functions */

/* Game Page -go to-> LANDING PAGE(resets Game Page) addEventListener function via Exit Button  **/
document.getElementById("exit-game").addEventListener("click", function () {
    window.location.href = "#landing-page";
    document.getElementById("result").textContent = ``;
    document.getElementById("your-score").textContent = 0;
    document.getElementById("opp-score").textContent = 0;
    document.getElementById("game-left").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p class="player-quote"><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>`;
    document.getElementById("game-right").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p class="opp-quote"><em>Have&nbsp;at&nbsp;you!</em></p>`;
});

/** Game Page -go to-> RULE LIST(Game Page option) addEventListener function via Rules Button */
document.getElementById("gme-to-rules").addEventListener("click", function () {
    window.location.href = "#game-rules";
});

/** Rule List(Game page option) -go to-> GAME PAGE addEventListener function via Back Button */
document.getElementById("backtogame").addEventListener("click", function () {
    window.location.href = "#game-page";
});

/* GIF result Button Functions*/

/**GIF Win Result -go to-> GAME PAGE(resets page) addEventListener function via Play Again Button */
document.getElementById("back-btn3").addEventListener("click", function () {
    window.location.href = "#game-page";
    document.getElementById("result").textContent = ``;
    document.getElementById("your-score").textContent = 0;
    document.getElementById("opp-score").textContent = 0;
    document.getElementById("game-left").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p class="player-quote"><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>`;
    document.getElementById("game-right").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p class="opp-quote"><em>Have&nbsp;at&nbsp;you!</em></p>`;
});

/**GIF Loose Result -go to-> GAME PAGE(resets page) addEventListener function via Play Again Button */
document.getElementById("back-btn4").addEventListener("click", function () {
    window.location.href = "#game-page";
    document.getElementById("result").textContent = ``;
    document.getElementById("your-score").textContent = 0;
    document.getElementById("opp-score").textContent = 0;
    document.getElementById("game-left").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p class="player-quote"><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>`;
    document.getElementById("game-right").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p class="opp-quote"><em>Have&nbsp;at&nbsp;you!</em></p>`;
});

/**GIF Win Result -go to-> LANDING PAGE(resets Game page) addEventListener function via Exit Button */
document.getElementById("win-exit-game").addEventListener("click", function () {
    window.location.href = "#landing-page";
    document.getElementById("result").textContent = ``;
    document.getElementById("your-score").textContent = 0;
    document.getElementById("opp-score").textContent = 0;
    document.getElementById("game-left").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p class="player-quote"><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>`;
    document.getElementById("game-right").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p class="opp-quote"><em>Have&nbsp;at&nbsp;you!</em></p>`;
});

/**GIF Loose Result -go to-> LANDING PAGE(resets Game page) addEventListener function via Exit Button */
document.getElementById("loose-exit-game").addEventListener("click", function () {
    window.location.href = "#landing-page";
    document.getElementById("result").textContent = ``;
    document.getElementById("your-score").textContent = 0;
    document.getElementById("opp-score").textContent = 0;
    document.getElementById("game-left").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p class="player-quote"><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>`;
    document.getElementById("game-right").innerHTML = `<img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p class="opp-quote"><em>Have&nbsp;at&nbsp;you!</em></p>`;
});

/* How to Play Button Functions*/

/** How to Play -go to-> LANDING PAGE addEventListener function via Back Button */
document.getElementById("back-btn").addEventListener("click", function () {
    window.location.href = "#landing-page";
});

/** How to Play -go to-> RULE LIST(for How to Play) addEventListener function via Rules Button */
document.getElementById("see-rules").addEventListener("click", function () {
    window.location.href = "#game-rules2";
});


/**Rule List -go to-> HOW TO PLAY addEventListener function via Back Button */
document.getElementById("backtogame2").addEventListener("click", function () {
    window.location.href = "#hw-to-ply-page";
});

/**About the Game Button Functions */

/** About the Game -go to-> LANDING PAGE addEventListener function via Back Button  */
document.getElementById("back-btn2").addEventListener("click", function () {
    window.location.href = "#landing-page";
});

/** THE GAME */

function game() {
    /** Add all options(classes) and win results from options(classes)
     * Get all elemenets used in the game
     */
    const actions = ['arthur', 'lancelot', 'robin', 'galahad', 'bedevere'];
    const userWinResults = ['robinlancelot', 'lancelotarthur', 'arthurgalahad', 'galahadbedevere', 'bedevererobin',
        'robingalahad', 'galahadlancelot', 'lancelotbedevere', 'arthurrobin', 'bedeverearthur'];
    let userChoice = '';
    let compChoice = '';
    const userChoiceElement = document.querySelector('#all-knights-game');
    const pickedElement = document.querySelector('.game-zone');
    const userPickElement = document.querySelector('#game-left');
    const pcPickElement = document.querySelector('#game-right');
    const resultElement = document.querySelector('#vs');
    const resultTitleElement = resultElement.querySelector('#result');
    /** Wait for game to load before actions occur */
    window.addEventListener('load', () => {
        /** Add eventListner to all knight choices to start game */
        document.querySelectorAll('#all-knights-game .knight-game').forEach(knight => {
            knight.addEventListener('click', (ev) => {
                userChoice = getUserChoice(ev.target);
                compChoice = getComputerChoice();

                startGame();
            });
        });
    });
    /** Function for actions when game is started */
    function startGame() {
        calculateWinner(userChoice, compChoice);
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden');
        clearResultBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, compChoice);
    }
    /** Function to get Knight selected by player from the Knight options */
    function getUserChoice(target) {
        if (target.nodeName === 'img') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }
    /** Function to create random choice of Knights by opponent */
    function getComputerChoice() {
        return actions[Math.floor(Math.random() * 5)];
    }
    /** Function to calculate the display if player wins, loses, or draws */
    function calculateWinner(user, comp) {
        if (user === comp) {
            resultTitleElement.innerText = 'Draw';
        } else if (getUserWinsStatus(user + comp)) {
            resultTitleElement.innerText = 'Beats';
            increaseUserScore();
        } else {
            resultTitleElement.innerText = 'Loses';
            increaseComputerScore();
        }
    }
    /** Function to check if the choice you chose(the string) is the winning choice(winning string) */
    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);
    }
    /** Function to create elements on screen displaying choices of both player and opponent */
    function buildChoiceElement(isItUserElement, className) {
        const el = document.createElement('div');
        el.innerHTML = `<div class="knight-game" id="all-knights-ingame"> <img class="knight-img-ingame" src="/assets/images/${className}.png" alt="${className}"><p id="text-center-ingame"><strong>${className}</strong></p></div>`;
        if (isItUserElement) {
            userPickElement.append(el);
        } else {
            pcPickElement.append(el);
        }
    }
    /** Function to clear old choices to make way for the new choices */
    function clearResultBeforeAppend() {
        userPickElement.innerHTML = '';
        pcPickElement.innerHTML = '';
    }
    /** Function to add to your score */
    function increaseUserScore() {
        let oldScore = parseInt(document.getElementById("your-score").textContent);
        document.getElementById("your-score").textContent = ++oldScore;
        countRounds();
    }

    /** Function to add to opponents score */
    function increaseComputerScore() {
        let oldScore = parseInt(document.getElementById("opp-score").textContent);
        document.getElementById("opp-score").textContent = ++oldScore;
        countRounds();
    }
    /** Function to determine who wins the overall game out of 5 */
    function countRounds() {
        let userScore = parseInt(document.getElementById("your-score").textContent);
        let computerScore = parseInt(document.getElementById("opp-score").textContent);
        if (userScore >= 5) {
            window.location.href = "#gif-win";
        } else if (computerScore >= 5) {
            window.location.href = "#gif-loose";
        }
    }
}

game();

