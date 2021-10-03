const submitbtn = document.querySelector(".submitbtn");
const outputdiv = document.querySelector("#output");

submitbtn.addEventListener("click", submitted);

function submitted()
{
    outputdiv.innerText = "Submitted";
  }