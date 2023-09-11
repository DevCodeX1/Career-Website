const myWhyText = document.getElementById("myWhyText");
const myWhyButton = document.getElementById("myWhyButton");

myWhyButton.addEventListener("click", () => {
    myWhyText.classList.toggle("animate");

    if (myWhyText.classList.contains("animate")) {
      myWhyText.style.display = "block";

    }else{
     myWhyText.style.display = "none";
    }


});


const myNowText = document.getElementById("myNowText");
const myNowButton = document.getElementById("myNowButton");

myNowButton.addEventListener("click", () => {
    myNowText.classList.toggle("animate");

    if (myNowText.classList.contains("animate")) {
      myNowText.style.display = "block";

    }else{
     myNowText.style.display = "none";
    }


});