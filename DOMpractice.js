const numOfTags = document.getElementsByTagName("li");

const showMessageOne = () =>
{
  document.querySelector("firstanswer").textContent = numOfTags;
  alert("There are" + numOfTags + "li tags");
};
const buttonOneElement = document.getElementById("buttonOne");
buttonOneElement.addEventListener("click", showMessageOne);
