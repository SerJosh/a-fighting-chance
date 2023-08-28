function update() {
    var gfg_down =
        document.getElementById("phone-screen");
    gfg_down.remove();

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = `<h2>How to Play</h2>
  
  
  <br>
  <button class="button-spacing" onclick="myRestore();">Back</button>`;
}