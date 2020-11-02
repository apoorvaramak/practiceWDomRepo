const numOfTags = document.getElementsByTagName("li");

const showMessageOne = () =>
{
  document.querySelector("#firstAnswer").textContent = numOfTags.length;
  alert("There are " + numOfTags.length + " li tags");
};
const buttonOneElement = document.getElementById("buttonOne");
buttonOneElement.addEventListener("click", showMessageOne);

const numInDivOne = document.getElementById("topThree");

const showMessageTwo = () =>{
  document.querySelector("#secondAnswer").textContent = numInDivOne.length;
  alert("There are " + numInDivOne.length + " elements in the first div");
};

const buttonTwoElement = document.getElementById("buttonTwo");
buttonTwoElement.addEventListener("click", showMessageTwo);

const numInDivTwo = document.getElementById("topTen");

const showMessageThree = () => {
  document.querySelector("#thirdAnswer").textContent = numInDivTwo.length;
  alert("There are " + numInDivTwo.length + " elements in the second div");
};

const buttonThreeElement = document.getElementById("buttonThree");
buttonThreeElement.addEventListener("click", showMessageThree);
