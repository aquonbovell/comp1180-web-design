const questions = document.querySelectorAll(".question");
const navlist = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navlist.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navlist.classList.remove("open");
  }
});

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});