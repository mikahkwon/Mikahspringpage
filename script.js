var season = "SPRING";
console.log("Welcome to FEEL: " + season);

var windowOpen = false;

function toggleWindow() {
  var scene = document.getElementById("windowScene");
  var button = document.getElementById("windowButton");
  var status = document.getElementById("windowStatus");

  windowOpen = !windowOpen;

  if (windowOpen) {
    scene.classList.add("open");
    button.innerText = "CLOSE WINDOW -";
    status.innerText = "THE AIR FEELS WARMER NOW.";
    console.log("Window opened");
  } else {
    scene.classList.remove("open");
    button.innerText = "OPEN WINDOW +";
    status.innerText = "THE WINDOW IS CLOSED.";
    console.log("Window closed");
  }
}

function saveMemory() {
  var memory = document.getElementById("memory").value.trim();
  var result = document.getElementById("result");

  if (memory == "") {
    result.innerText = "WRITE SOMETHING FIRST.";
  } else {
    result.innerText = "RECORDED: " + memory;
    console.log("Spring memory: " + memory);
  }
}
