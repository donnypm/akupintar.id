const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});

// Slide Show Section-1
let counter = 1;

setInterval(() => {
  document.querySelector(".slide.slide-show").classList.remove("slide-show");
  const slide = document.querySelector(`.slide-${counter}`);
  slide.classList.add("slide-show");
  counter++;

  if (counter > 6) {
    counter = 1;
  }
}, 3000);

let counter2 = 1;
setInterval(function () {
  document.getElementById("radio" + counter2).checked = true;
  counter2++;
  if (counter2 > 5) {
    counter2 = 1;
  }
}, 3000);
