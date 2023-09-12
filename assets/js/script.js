/** How to Play onclick function */

// function howtoplay() {
//     var gfg_down =
//         document.getElementById("phone-screen");
//     gfg_down.remove();

//     let emptyBox = document.getElementById('empty-box');
//     emptyBox.innerHTML = `<h2>How to Play</h2>


//   <br>
//   <button class="button-spacing" onclick="myRestore();">Back</button>`;


/** About the Game onclick function */

// function aboutthegame() {
//     var gfg_down =
//         document.getElementById("phone-screen");
//     gfg_down.remove();

//     let emptyBox = document.getElementById('empty-box');
//     emptyBox.innerHTML = `<h2>About the Game<h2>

//   <p id = "abt-the-gme">After a narrow defeat in a historic battle against the legendary King Arthur, the Black Knight seeks revenge! But on his own terms,in a moble game of A Fighting Chance. He wants vengance, he chose the terms and he has chosen you as his worthy adversary... do you stand A Fighting Chance? <br><br> A Fighting Chance is an extension of the simple game of rock, paper, scissors which includes two extra options where now an option has two things it can beat and two things it can loose to (rock,paper,scissors, lizard, spock). But with a new theme of King Arthur and his fellow Knights. <p>
//   <br>
//   <button class="button-spacing" onclick="myRestore();">Back</button>`;
// }

/** Back button onclick function */

// function myRestore() {
//     var gfg_down =
//         document.getElementById("empty-box");
//     gfg_down.remove();

//     let empyBox = document.getElementById('landing-page');
//     empyBox.innerHTML = ` <div id="phone-screen">
//         <header><h1 id="logo">A Fighting Chance</h1></header>
//         <div id="all-knights">
//           <div class="knight">
//             <img id="arthur" src="/assets/images/king-arthur2.jpg" alt="" />
//           </div>
//           <div class="knight">
//             <img id="lancelot" src="/assets/images/sir-lancelot2.jpg" alt="" />
//           </div>
//           <div class="knight">
//             <img id="robin" src="/assets/images/sir-robin3.jpeg" alt="" />
//           </div>
//           <div class="knight">
//             <img id="galahad" src="/assets/images/sir-galahad.png" alt="" />
//           </div>
//           <div class="knight">
//             <img id="bedevere" src="/assets/images/sir-bedevere.webp" alt="" />
//           </div>
//         </div>
//         <div><label for="name"></label>
//         <input id="name" name="name" type="text" class="text-input" placeholder="Your name" required>
//         <br>
//         <button class="button-spacing" id="start-game-btn" type="submit" onclick="play();">Play</button>
//         <br>
//         <button class="button-spacing" onclick="howtoplay();">How to Play</button>
//         <br>
//         <button class="button-spacing" onclick="aboutthegame();">About the Game</button></div>
//         <footer><footer>
//             <ul>
//                 <li>
//                     <a href="https://facebook.com" target="_blank" rel="noopener"
//                         aria-label="Visit our Facebook page (opens on a new tab)"><i class="fab fa-facebook-f"></i></a>
//                 </li>
//                 <li>
//                     <a href="https://instagram.com" target="_blank" rel="noopener"
//                         aria-label="Visit our Instagram page (opens on a new tab)"><i class="fab fa-instagram"></i></a>
//                 </li><li>
//                     <a href="https://www.youtube.com/" target="_blank" rel="noopener"
//                         aria-label="Visit our Youtube page (opens on a new tab)"><i class="fab fa-youtube"></i></a>
//                 </li><li>
//                     <a href="https://www.tiktok.com/" target="_blank" rel="noopener"
//                         aria-label="Visit our Tik Tok page (opens on a new tab)"><i class="fab fa-tiktok"></i></a>
//                 </li>
//                 </ul></footer>
//       </div>
//     <div id="empty-box"></div>
//     <div id="landing-page"></div>
//     <div id="game-page"></div>
//     </div>`;
// }

/** How to Play Rule List onclick function */

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
                </button> <button class="button-spacing" id="bck-landing" onclick="backToRules();">
                    Back
                </button></div>`;
}

function exitGame2() {
    window.location.href = "#landing-page";
}
function exitGame3() {
    let howToPlay = document.getElementById('game-page');
    howToPlay.innerHTML = ` <header><h1 id="logo">A Fighting Chance</h1></header>
            <!--Game Page Buttons-->
            <div id="game-btns">
              <button class="gme-btn-style">Rules</button
              ><button class="gme-btn-style" id="exit-game">Exit</button>
            </div>
            <!--Game Page Player Names-->
            <div id="players">
              <h3 id="player">Name</h3>
              <h3 id="opponent">Black Knight</h3>
            </div>
            <!--Game Zone (where the Ingame Content is displayed)-->
            <div class="game-zone">
              <div id="game-left">
                <img
                  class="knight-img"
                  src="/assets/images/monty-python-god3.jpg"
                  alt="depicted God in Monty Python and the Holy Grail"
                />
                <p><em>Get&nbsp;on&nbsp;with&nbsp;it!</em></p>
              </div>
              <div id="game-right">
                <img
                  class="knight-img"
                  src="/assets/images/blk-knt-gme.webp"
                  alt="Black Knight"
                />
                <p><em>Have&nbsp;at&nbsp;you!</em></p>
              </div>
            </div>
            <div id="vs">
              <p>VS</p>
              <p id="result"></p>
            </div>
            <hr>
            <!--Game Page Score Area-->
            <div id="score-area">
              <div id="your-score">0</div>
              <div id="opp-score">0</div>
              <div id="score-center"><p>Score</p></div>
            </div>
            <hr>
            <!--Game Page Knight Choice Area-->
            <div><h3 id="knight-choice">Choose your Knight</h3></div>
            <div id="all-knights-game">
              <div class="knight-game">
                <img
                  class="knight-gme-img arthur"
                  src="/assets/images/arthur.png"
                  alt="arthur"
                />
              </div>
              <div class="knight-game">
                <img
                  class="knight-gme-img lancelot"
                  src="/assets/images/lancelot.png"
                  alt="lancelot"
                />
              </div>
              <div class="knight-game">
                <img
                  class="knight-gme-img robin"
                  src="/assets/images/robin.png"
                  alt="robin"
                />
              </div>
              <div class="knight-game">
                <img
                  class="knight-gme-img galahad"
                  src="/assets/images/galahad.png"
                  alt="galahad"
                />
              </div>
              <div class="knight-game">
                <img
                  class="knight-gme-img bedevere"
                  src="/assets/images/bedevere.png"
                  alt="bedevere"
                />
              </div>
            </div>`;
}

function backToRules() {
    window.location.href = "#landing-page";
}

/** Back Button in How to Play page */
// document.getElementById("bck-landing").addEventListener("click", function () {
//     window.location.href = "#landing-page";
// });

/** Play Button to go to Game page */
document.getElementById("start-game-btn").addEventListener("click", function () {
    window.location.href = "#game-page";
});

/** About Game Button to go to AboutGame page */
document.getElementById("about-game").addEventListener("click", function () {
    window.location.href = "#about-page";
});

/** Back Button to go back to Landing page */
document.getElementById("back-btn").addEventListener("click", function () {
    window.location.href = "#landing-page";
});

/** How to Play Button to go to How to Play page */
document.getElementById("hw-to-ply").addEventListener("click", function () {
    window.location.href = "#hw-to-ply-page";
});

/* Exit Game Button **/
document.getElementById("exit-game").addEventListener("click", function () {
    window.location.href = "#landing-page";
});


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
    // const scoreCountElement = document.querySelector('#your-score');


    // let currentScore = null;

    window.addEventListener('load', () => {
        // retrieveScoreFromLocalStorage();

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
            // calculateScore(1);
            increaseUserScore();
        } else {
            resultTitleElement.innerText = 'Loses';
            // calculateScore(-1);
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

    // function tryAgain() {
    //     userChoiceElement.classList.remove('hidden');
    //     pickedElement.classList.add('hidden');
    // }

    function clearResultBeforeAppend() {
        userPickElement.innerHTML = '';
        pcPickElement.innerHTML = '';
    }

    // function calculateScore(roundResult) {
    //     currentScore += roundResult;
    //     // updateScoreBoard();
    //     increaseUserScore();
    //     increaseComputerScore();
    // }

    // function retrieveScoreFromLocalStorage() {
    //     const score = +window.localStorage.getItem('gameScore') || 0;
    //     currentScore = score;
    //     updateScoreBoard();
    // }

    // function updateScoreBoard() {
    //     scoreCountElement.innerText = currentScore;
    //     window.localStorage.setItem('gameScore', currentScore);
    // }


    /** Score testing */
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

        if (userScore >= 3) {
            let result = document.getElementById('game-page');
            result.innerHTML = ` <h2>win</h2> <img src="/assets/images/black-knight-gif-win.gif" alt=""> <div>${userScore} -${computerScore}</div><div id="game-btns">
              <button class="gme-btn-style" onclick="exitGame3();" >Play Again</button
              ><button class="gme-btn-style" onclick="exitGame2();">Exit</button>
            </div>`;
        } else if (computerScore >= 3) {
            let result = document.getElementById('game-page');
            result.innerHTML = ` <h2>loose</h2> <img src="/assets/images/black-knight-lose-gif.gif" alt=""> <div>${userScore} -${computerScore}</div><div id="game-btns">
              <button class="gme-btn-style" onclick="exitGame3();" >Play Again</button
              ><button class="gme-btn-style" onclick="exitGame2();">Exit</button>
            </div>`;
        }
    }


    // function displayResult(userScore, computerScore) {
    //     let resultDiv = document.getElementById("gif");

    //     if (userScore > computerScore) {
    //         resultDiv.textContent = `You win ${userScore} -${computerScore} `;

    //     } else if (userScore < computerScore) {
    //         resultDiv.textContent = `You lose ${userScore} -${computerScore} `;

    //     }

}






game();

/** Attempted gif crap */

// function countRounds() {
//     let userScore = parseInt(document.getElementById("your-score").textContent);
//     let computerScore = parseInt(document.getElementById("opp-score").textContent);

//     if (userScore >= 3 || computerScore >= 3) {
//         document.getElementById("gif").style.display = "block";
//         displayResult(userScore, computerScore);
//     }
// }


// function displayResult(userScore, computerScore) {
//     let resultDiv = document.getElementById("gif");

//     if (userScore > computerScore) {
//         resultDiv.textContent = `You win ${userScore} -${computerScore} `;

//     } else if (userScore < computerScore) {
//         resultDiv.textContent = `You lose ${userScore} -${computerScore} `;

//     }
// };