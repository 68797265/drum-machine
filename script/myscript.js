function play(str) {
  var audio = document.getElementById(str);
  audio.play();
}

window.document.onkeyup = function (event) {
  if (event.key === "Q" || event.key === "q") {
    play("Q");
  } else if (event.key === "W" || event.key === "w") {
    play("W");
  } else if (event.key === "E" || event.key === "e") {
    play("E");
  } else if (event.key === "A" || event.key === "a") {
    play("A");
  } else if (event.key === "S" || event.key === "s") {
    play("S");
  } else if (event.key === "D" || event.key === "d") {
    play("D");
  } else if (event.key === "Z" || event.key === "z") {
    play("Z");
  } else if (event.key === "X" || event.key === "x") {
    play("X");
  } else if (event.key === "C" || event.key === "c") {
    play("C");
  }
};

function reply_click()
{
    // event.target is the element that is clicked (button in this case).
    console.log(event.target.id);
}