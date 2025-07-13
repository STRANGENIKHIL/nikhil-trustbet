document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card2");
  const ageOverlay = document.getElementById("ageOverlay"); 
  const acceptBtn = document.querySelector(".acceptButton");
  const declineBtn = document.querySelector(".declineButton");

  acceptBtn.addEventListener("click", () => {
    card.style.display = "none";
    ageOverlay.style.display = "none"; 
    document.body.style.filter = "none"; 
  });

  declineBtn.addEventListener("click", () => {
    alert("Sorry! You must be 18+ to use this website.");
    window.location.href = "https://www.google.com";
  });
});
