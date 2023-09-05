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

document.getElementById("start-game-btn").addEventListener("click", function () {
    window.location.href = "#game-page";
});


function game() {
    const actions = ['arthur', 'lancelot', 'robin', 'galahad', 'bedevere'];
    const userWinResults = ['robinlancelot', 'lancelotarthur', 'arthurrobin', 'robinbedevere', 'bedevererobin',
        'arthurrobin', 'robingalahad', 'galahadlancelot', 'lancelotbedevere', 'bedeverearthur'];
    let userChoice = '';
    let compChoice = '';
const userChoiceElement = document.querySelector('#all-knights-game');
const pickedElement = document.querySelector('.game-zone');
const userPickElement = document.querySelector('#game-left');
const pcPickElement = document.querySelector('#game-right');
const resultElement = document.querySelector('#vs');
const resultTitleElement = resultElement.querySelector('#result');
const scoreCountElement = document.querySelector('#your-score');