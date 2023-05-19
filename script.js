//header toggle
let Menubtn = document.getElementById("Menubtn");

Menubtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

// typing effect
let typed = new Typed(".auto-input", {
  strings: [
    "React Developer",
    "Mern Stack developer",
    "React Developer",
    "Mern Stack developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});
