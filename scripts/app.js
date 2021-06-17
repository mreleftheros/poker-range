// 1326 einai o arithmos tis 100%
// ta 13 zeugh exoun aksia 6 vathmwn
// ta 78 koutakia me to "o" exoun aksia 12 vathmwn
// ta 78 koutakia me to "s" exoun aksia 4 vathmwn to kathena
// 13x6 + 78x12 + 78x4 = 1326

const pokerContainer = document.getElementById("pokerContainer");
const pokerResult = document.getElementById("pokerResult");
let score = 0;
let total = 1326;

// create grid with cards automatically when dom is ready
const createGrid = () => {
  const gridElement = document.createElement("div");
  gridElement.classList.add("poker__container__grid");
  gridElement.id = "gridElement";
  let output = "";
  let cards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      const buttonElement = document.createElement("button");
      buttonElement.classList.add("poker__container__grid__btn");


      
      if (i < j) {
        output = cards[i] + cards[j] + "s";
        buttonElement.setAttribute("data-value", "4");
      }
      else if (i > j) {
        output = cards[j] + cards[i] + "o";
        buttonElement.setAttribute("data-value", "12");
      }
      else {
        output = cards[i] + cards[j];
        buttonElement.setAttribute("data-value", "6");
      }
      
      buttonElement.textContent = output;

      gridElement.appendChild(buttonElement);
    }
  }

  pokerContainer.appendChild(gridElement);
};

const markBtn = e => {
  let target = e.target;

  if (target.tagName === "BUTTON") {
    target.classList.toggle("played");
    updateScore(e);
  }
};

const updateResult = () => {
  let result = score / total * 100;
  let resultString = `${result.toFixed(2)}%`;

  pokerResult.textContent = resultString;
}

const updateScore = e => {
  let value = +e.target.dataset.value;

  if(e.target.classList.contains("played")) {
    score += value;
  } else {
    score -= value;
  }

  updateResult();
};

window.addEventListener("DOMContentLoaded", createGrid);
pokerContainer.addEventListener("click", markBtn);