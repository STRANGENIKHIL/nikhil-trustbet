document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card2");
  const ageOverlay = document.getElementById("ageOverlay");
  const acceptBtn = document.querySelector(".acceptButton");
  const declineBtn = document.querySelector(".declineButton");

  if (acceptBtn && declineBtn) {
    acceptBtn.addEventListener("click", () => {
      card.style.display = "none";
      ageOverlay.style.display = "none";
      document.body.style.filter = "none";
    });

    declineBtn.addEventListener("click", () => {
      alert("Sorry! You must be 18+ to use this website.");
      window.location.href = "https://www.google.com";
    });
  }

  document.querySelectorAll('[data-target-popup]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const popupId = this.getAttribute('data-target-popup');
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = 'block';
    });
  });

  document.querySelectorAll('.popup-responsiblegaming .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      const popup = this.closest('.popup-responsiblegaming');
      if (popup) popup.style.display = 'none';
    });
  });

  window.addEventListener('click', function (e) {
    document.querySelectorAll('.popup-responsiblegaming').forEach(popup => {
      if (e.target === popup) popup.style.display = 'none';
    });
  });
});
