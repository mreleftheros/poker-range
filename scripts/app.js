// 1326 einai o arithmos tis 100%
// ta 13 zeugh exoun aksia 6 vathmwn
// ta 78 koutakia me to "o" exoun aksia 12 vathmwn
// ta 78 koutakia me to "s" exoun aksia 4 vathmwn to kathena
// 13x6 + 78x12 + 78x4 = 1326

const pokerContainer = document.getElementById("pokerContainer");

// create grid with cards automatically when dom is ready
const createGrid = () => {
  const gridElement = document.createElement("div");
  gridElement.classList.add("poker__container__grid");
  gridElement.id = "gridElement";
  let output = "";
  let cards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      
      if (i < j) {
        output = cards[i] + cards[j] + "s";
      }
      else if (i > j) {
        output = cards[j] + cards[i] + "o";
      }
      else {
        output = cards[i] + cards[j];
      }

      const buttonElement = document.createElement("button");
      buttonElement.classList.add("poker__container__grid__btn");
      buttonElement.textContent = output;

      gridElement.appendChild(buttonElement);
    }
  }

  pokerContainer.appendChild(gridElement);
};

const markBtn = e => {
  let target = e.target;

  if (target.tagName === "BUTTON")
    target.classList.toggle("played");
}

window.addEventListener("DOMContentLoaded", createGrid);
pokerContainer.addEventListener("click", markBtn);
pokerContainer.addEventListener("click", updateResult);