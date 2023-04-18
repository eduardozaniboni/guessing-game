// variables
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

// functions
function handleTryClick(event) {
  //callback functions
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value) >= 0 || Number(inputNumber.value) <= 10) {
    if (Number(inputNumber.value) == randomNumber) {
      toogleScreen();
      screen2.querySelector(
        "h2"
      ).innerHTML = `Voce acertou em ${xAttempts} tentativas.`;
    }
    inputNumber.value = "";
    xAttempts++;
  } else {
    alert("O numero escolhido deve estar entre 0 e 10");
  }
}

function handleResetClick() {
  //callback functions
  toogleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function enterKeyPress() {

}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
