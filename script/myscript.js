function play(str) {
  var audio = document.getElementById(str);
  audio.play();
  let tuneName = document.getElementById("display");
  tuneName.innerHTML = "";
  if (str === "Q" || str === "q") {
    tuneName.innerHTML = "Duffy";
  } else if (str === "W" || str === "w") {
    tuneName.innerHTML = "Bugs";
  } else if (str === "E" || str === "e") {
    tuneName.innerHTML = "Porky";
  } else if (str === "A" || str === "a") {
    tuneName.innerHTML = "Sylvester";
  } else if (str === "S" || str === "s") {
    tuneName.innerHTML = "Taz";
  } else if (str === "D" || str === "d") {
    tuneName.innerHTML = "Tweety";
  } else if (str === "Z" || str === "z") {
    tuneName.innerHTML = "Yoseminte";
  } else if (str === "X" || str === "x") {
    tuneName.innerHTML = "Marvin";
  } else if (str === "C" || str === "c") {
    tuneName.innerHTML = "Elmer";
  }
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
