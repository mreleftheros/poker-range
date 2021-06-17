// 1326 einai o arithmos tis 100%
// ta 13 zeugh exoun aksia 6 vathmwn
// ta 78 koutakia me to "o" exoun aksia 12 vathmwn
// ta 78 koutakia me to "s" exoun aksia 4 vathmwn to kathena
// 13x6 + 78x12 + 78x4 = 1326

const pokerContainer = document.getElementById("pokerContainer");

const createGrid = () => {
  const gridElement = document.createElement("div");
  gridElement.classList.add("poker__container__grid");
  let output = "";

  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      output = "" + i + j;
      const buttonElement = document.createElement("button");
      buttonElement.textContent = output;

      gridElement.appendChild(buttonElement);
    }
  }

  pokerContainer.appendChild(gridElement);
};

createGrid();