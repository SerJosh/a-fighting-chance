function update() {
    var gfg_down =
        document.getElementById("phone-screen");
    gfg_down.remove();

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = `<h2>How to Play</h2>
  
  
  <br>
  <button class="button-spacing" onclick="myRestore();">Back</button>`;
}

function update2() {
    var gfg_down =
        document.getElementById("phone-screen");
    gfg_down.remove();

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = `<h2>About the Game<h2>
  
  <p id = "abt-the-gme">After a narrow defeat in a historic battle against the legendary King Arthur, the Black Knight seeks revenge! But on his own terms,in a moble game of A Fighting Chance. He wants vengance, he chose the terms and he has chosen you as his worthy adversary... do you stand A Fighting Chance? <br><br> A Fighting Chance is an extension of the simple game of rock, paper, scissors which includes two extra options where now an option has two things it can beat and two things it can loose to (rock,paper,scissors, lizard, spock). But with a new theme of King Arthur and his fellow Knights. <p>
  <br>
  <button class="button-spacing" onclick="myRestore();">Back</button>`;
}