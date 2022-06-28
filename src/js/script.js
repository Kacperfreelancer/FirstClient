const burgerIcon = document.querySelectorAll(".icon");
const btn = document.querySelector(".burger");
const menu = document.querySelector(".menu-mobile");
const elementsMenu = document.querySelectorAll(".menu-item");

const handleBurgerIcon = () => {
  burgerIcon.forEach(bar => {
    bar.classList.toggle("active");
  });
  menu.classList.toggle("active");

  navItemAnimation();
};

const navItemAnimation = () => {
  let delayTime = 0;

  elementsMenu.forEach(item => {
    item.classList.toggle("active");
    item.style.animationDelay = `.${delayTime}s`;
    item.addEventListener("click", handleBurgerIcon);
    delayTime += 2;
  });
};

btn.addEventListener("click", handleBurgerIcon);
