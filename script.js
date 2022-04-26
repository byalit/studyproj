const inputPrice = document.querySelector("#price");
const inputPeople = document.querySelector("#people");
const select = document.querySelector("#tip");
const button = document.querySelector(".count");
const pError = document.querySelector(".error");
const pCostInfo = document.querySelector(".cost-info");
const pCost = document.querySelector(".cost");

const check = () => {
  if (inputPrice.value > 1 && inputPeople.value >= 1 && select.value > 0) {
    calculate();
    pError.textContent = "";
  } else {
    pError.textContent = "Please, enter values ";
    pCostInfo.style.display = "none";
  }
};
const calculate = () => {
  const inputPriceValue = parseFloat(inputPrice.value);
  const inputPeopleValue = parseInt(inputPeople.value);
  const selectValue = parseFloat(select.value);
  const sum =
    (inputPriceValue + inputPriceValue * selectValue) / inputPeopleValue;
  pCostInfo.style.display = "block";
  pCost.textContent = sum.toFixed(2);
};
button.addEventListener("click", check);
