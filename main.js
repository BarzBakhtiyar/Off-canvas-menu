const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const burger1 = document.querySelector(".line-1");
const burger2 = document.querySelector(".line-2");
const burger3 = document.querySelector(".line-3");

burger.addEventListener("click", () => {
  nav.classList.toggle("display-nav");
  burger1.classList.toggle("line-1-toggle");
  burger2.classList.toggle("line-2-toggle");
  burger3.classList.toggle("line-3-toggle");
});
