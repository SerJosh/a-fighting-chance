/** Landing Page Button Functions */

/** Landing Page -go to-> GAME PAGE addEventListener function via Play Button  */
document.getElementById("start-game-btn").addEventListener("click", function () {
    window.location.href = "#game-page";
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

/** How to Play -go to-> (innerHTML)RULE LIST onclick function via Rules Button */
function rules() {
    let howToPlay = document.getElementById('hw-to-ply-page');
    howToPlay.innerHTML = ` <h2>Rules</h2><div><button class="gme-btn-style" onclick="backRules();">Back</button
              ></div> <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/robin.png" alt="Robin"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/lancelot.png" alt="Lancelot"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Robin</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Lancelot</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/lancelot.png" alt="Lancelot"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/arthur.png" alt="Arthur"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Lancelot</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Arthur</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/arthur.png" alt="Arthur"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/galahad.png" alt="Galahad"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Arthur</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Galahad</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/galahad.png" alt="Galahad"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/bedevere.png" alt="Bedevere"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Galahad</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Bedevere</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/bedevere.png" alt="Bedevere"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/robin.png" alt="Robin"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Bedevere</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Robin</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/robin.png" alt="Robin"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/galahad.png" alt="Galahad"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Robin</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Galahad</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/galahad.png" alt="Galahad"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/lancelot.png" alt="Lancelot"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Galahad</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Lancelot</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/lancelot.png" alt="Lancelot"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/bedevere.png" alt="Bedevere"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Lancelot</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Bedevere</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/arthur.png" alt="Arthur"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/robin.png" alt="Robin"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Arthur</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Robin</p>
                        </div>
                    </div>
                </div>
                <hr class="rule-line">
                <div class="rulediv">
                    <div class="left-rule-img"><img class="knight-img-rule" src="/assets/images/bedevere.png" alt="Bedevere"></div>
                    <div class="right-rule-img"><img class="knight-img-rule" src="/assets/images/arthur.png" alt="Arthur"></div>
                    <div class="center-rule">
                        <div class="left-rule">
                            <p>Bedevere</p>
                        </div>
                        <div class="beats-rule">
                            <p>beats</p>
                        </div>
                        <div class="right-rule">
                            <p>Arthur</p>
                        </div>
                    </div>
                </div>
                <div> <button class="button-spacing" id="rule-bk" onclick="backRules();">
                    Back
                </button></div>`;
}

/** Rule list(innerHTML) -go to-> HOW TO PLAY(innerHTML) onclick function via (top and bottom) Back Button */
function backRules() {
    let howToPlay = document.getElementById('hw-to-ply-page');
    howToPlay.innerHTML = ` <h2>How to Play</h2>
            <!--How To Play General Rules and Introduction-->
            <div id="how2plytext">
                <p>Each Knight wins against 2 of the other Knights. Robin beats Lancelot, Lancelot beats Arthur, Arthur beats
                Galahad, Galahad beats Bedevere, Bedevere beats Robin, Robin beats Galahad, Galahad beats Lancelot, Lancelot
                beats Bedevere, Bedevere beats Arthur, and Arthur beats Robin.<br> Each the player and opponent picks a Knight and it is
                revealed at the same
                time. The winner is the one who beats the other. In a tie (the same Knights chosen), the process is repeated until a
                winner is found.
                The best player out of 5 rounds is the overall winner. To see in more detail the rules of the game, click on the Rules button.
                </p>
                </div>
                <br>
                <div><div id="how2plyhead">
                    <h3>Knights</h3>
                </div><div id="all-knights">
                    <div class="how-knight"><p class="how2plyknght">Arthur</p>
                        <img class="how-knight-img" src="/assets/images/arthur.png" alt="arthur" />
                    </div>
                    <div class="how-knight"><p class="how2plyknght">Lancelot</p>
                        <img class="how-knight-img" src="/assets/images/lancelot.png" alt="lancelot" />
                    </div>
                    <div class="how-knight"><p class="how2plyknght">Robin</p>
                        <img class="how-knight-img" src="/assets/images/robin.png" alt="robin" />
                    </div>
                    <div class="how-knight"><p class="how2plyknght">Galahad</p>
                        <img class="how-knight-img" src="/assets/images/galahad.png" alt="galahad" />
                    </div>
                    <div class="how-knight"><p class="how2plyknght">Bedevere</p>
                        <img class="how-knight-img" src="/assets/images/bedevere.png" alt="bedevere" />
                    </div>
                </div></div>
                <div><button class="button-spacing"  onclick="rules();">
                    Rules
                </button> <button class="button-spacing" onclick="backToRules();">
                    Back
                </button></div>`;
}

/** How to Play(innerHTML) -go to-> LANDING PAGE onclick function via Back Button */
function backToRules() {
    window.location.href = "#landing-page";
}

/**About the Game Button Functions */

/** About the Game -go to-> LANDING PAGE addEventListener function via Back Button  */
document.getElementById("back-btn2").addEventListener("click", function () {
    window.location.href = "#landing-page";
});

/** Getting the Player Name to the Game page function */

function PlayerName() {
    let inputValue = document.getElementById("name").value;
    document.getElementById("player").innerText = inputValue;
};






/** THE GAME */

function game() {
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

    window.addEventListener('load', () => {

        document.querySelectorAll('#all-knights-game .knight-game').forEach(knight => {
            knight.addEventListener('click', (ev) => {
                userChoice = getUserChoice(ev.target);
                compChoice = getComputerChoice();

                startGame();
            });
        });
    });

    function startGame() {
        calculateWinner(userChoice, compChoice);
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden');
        clearResultBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, compChoice);
    }

    function getUserChoice(target) {
        if (target.nodeName === 'img') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }

    function getComputerChoice() {
        return actions[Math.floor(Math.random() * 5)];
    }

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

    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr === result);
    }

    function buildChoiceElement(isItUserElement, className) {
        const el = document.createElement('div');
        el.innerHTML = `<div class="knight-game" id="all-knights-ingame"> <img class="knight-img-ingame" src="/assets/images/${className}.png" alt="${className}"><p id="text-center-ingame"><strong>${className}</strong></p></div>`;
        if (isItUserElement) {
            userPickElement.append(el);
        } else {
            pcPickElement.append(el);
        }
    }

    function clearResultBeforeAppend() {
        userPickElement.innerHTML = '';
        pcPickElement.innerHTML = '';
    }

    function increaseUserScore() {
        let oldScore = parseInt(document.getElementById("your-score").textContent);
        document.getElementById("your-score").textContent = ++oldScore;
        countRounds();

    }


    function increaseComputerScore() {
        let oldScore = parseInt(document.getElementById("opp-score").textContent);
        document.getElementById("opp-score").textContent = ++oldScore;
        countRounds();


    }

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

