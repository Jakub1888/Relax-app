const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Nádych.";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Zadrž dych.";

    setTimeout(() => {
      text.innerText = "Výdych.";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
