const buyBtn = document.getElementById("buyBtn");
const popup = document.getElementById("buyPopup");
const closePopup = document.getElementById("closePopup");

buyBtn.onclick = () =>{
popup.style.display="flex";
}

closePopup.onclick = () =>{
popup.style.display="none";
}