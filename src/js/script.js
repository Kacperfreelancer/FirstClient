const burgerIcon = document.querySelectorAll(".icon");
const btn = document.querySelector(".burger");
const menu = document.querySelector(".menu-mobile");

const handleBurgerIcon = () => {
  burgerIcon.forEach(bar => {
    bar.classList.toggle("active");
    menu.classList.toggle("active");
  });
};

btn.addEventListener("click", handleBurgerIcon);
