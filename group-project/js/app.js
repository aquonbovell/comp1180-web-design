const menu = document.querySelector('.menu');

let menuOpen = false;

menu.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    menuOpen = true;
    // navlist.classList.add("open");
  } else {
    menu.classList.remove("open");
    menuOpen = false;
    // navlist.classList.remove("open");
  }
});
