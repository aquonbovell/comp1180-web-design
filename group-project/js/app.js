const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

let menuOpen = false;

menu.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    menuOpen = true;
    nav.classList.add("open");
  } else {
    menu.classList.remove("open");
    menuOpen = false;
    nav.classList.remove("open");
  }
});