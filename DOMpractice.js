const numOfTags = document.getElementsByTagName("li");

const showMessageOne = () =>
{
  document.querySelector("firstAnswer").textContent = numOfTags;
  alert("There are " + numOfTags + " li tags");
};
const buttonOneElement = document.getElementById("buttonOne");
buttonOneElement.addEventListener("click", showMessageOne);

const numInDivOne = document.getElementsById("topThree");

const showMessageTwo = () =>{
  document.querySelector("secondAnswer").textContent = numInDivOne;
  alert("There are " + numInDivOne + " elements in the first div");
};

const buttonTwoElement = document.getElementById("buttonTwo");
buttonTwoElement.addEventListener("click", showMessageTwo);

const numInDivTwo = document.getElementsById("topTen");

const showMessageThree = () => {
  document.querySelector("thirdAnswer").textContent = numInDivTwo;
  alert("There are " + numInDivTwo + " elements in the second div");
};

const buttonThreeElement = document.getElementById("buttonThree");
buttonThreeElement.addEventListener("click", showMessageThree);
