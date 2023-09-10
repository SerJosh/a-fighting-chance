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

/** Play onclick function */

// function play() {
//     var gfg_down =
//         document.getElementById("phone-screen");
//     gfg_down.remove();

//     let empyBox = document.getElementById('game-page');
//     empyBox.innerHTML = ` <h2>Game Area<h2>`;
// }


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
    }


    function increaseComputerScore() {
        let oldScore = parseInt(document.getElementById("opp-score").textContent);
        document.getElementById("opp-score").textContent = ++oldScore;
    }




}



game();

/** Attempted gif crap */

// function countRounds() {
//     let userScore = parseInt(document.getElementById("your-score").textContent);
//     let computerScore = parseInt(document.getElementById("opp-score").textContent);

//     if (userScore >= 3 || computerScore >= 3) {
//         document.getElementById("result-div").style.display = "block";
//         displayResult(userScore, computerScore);
//     }
// }


// function displayResult(userScore, computerScore) {
//     let resultDiv = document.getElementById("result-div");

//     if (userScore > computerScore) {
//         resultDiv.textContent = `You win ${userScore}-${computerScore}`;

//     } else if (userScore < computerScore) {
//         resultDiv.textContent = `You lose ${userScore}-${computerScore}`;

//     }
// }