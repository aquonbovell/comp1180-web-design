const questions = document.querySelectorAll(".question");
const navlist = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");
const latestnewsDOM = document.querySelector(".latest-news");

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

class News {
  async getNews() {
    try {
      let result = await fetch("../news.json");
      let data = await result.json();
      let news = data.items;
      news = news.map((item) => {
        const { title, link } = item.fields;
        const { day, month, year } = item.fields.date;
        return { title, link, day, month, year };
      });
      return news;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayNews(news_item) {
    let result = "";
    news_item.forEach((news_item) => {
      result += `<li>
                    <h3>
                      <a href="${news_item.link}">
                        ${news_item.title}
                      </a>
                    </h3>
                    <div>
                      - <span>${news_item.month}</span> <span>${news_item.day}</span>,<span>${news_item.year}</span>
                    </div>
                  </li>`;
    });
    latestnewsDOM.innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const news = new News();
  const ui = new UI();
  //get all products
  news.getNews().then((news_item) => {
    ui.displayNews(news_item);
  });
});
