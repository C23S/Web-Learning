let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Buka.png") {
    myImage.setAttribute("src", "images/Buka2.png");
  } else {
    myImage.setAttribute("src", "images/Buka.png");
  }
};
