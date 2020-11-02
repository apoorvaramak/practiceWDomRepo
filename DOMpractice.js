const numOfTags = document.getElementsByTagName("li");

const showMessageOne = () =>
{
  document.querySelector("#firstAnswer").textContent = numOfTags.length;
  alert("There are " + numOfTags + " li tags");
};
const buttonOneElement = document.getElementsByClassName("buttonOne");
buttonOneElement.addEventListener("click", showMessageOne);

const numInDivOne = document.getElementById("topThree");

const showMessageTwo = () =>{
  document.querySelector("#secondAnswer").textContent = numInDivOne.length;
  alert("There are " + numInDivOne + " elements in the first div");
};

const buttonTwoElement = document.getElementsByClassName("buttonTwo");
buttonTwoElement.addEventListener("click", showMessageTwo);

const numInDivTwo = document.getElementById("topTen");

const showMessageThree = () => {
  document.querySelector("#thirdAnswer").textContent = numInDivTwo.length;
  alert("There are " + numInDivTwo + " elements in the second div");
};

const buttonThreeElement = document.getElementsByClassName("buttonThree");
buttonThreeElement.addEventListener("click", showMessageThree);
