const questions = document.querySelectorAll(".question");
const navlist = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".menu-btn");
const latestnewsDOM = document.querySelector('.latest-news');
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

class Products {
  async getProducts() {
      try {
          let result = await fetch("news.json");
          let data = await result.json();
          let products = data.items;
          products = products.map(item => {
              const { title, link} = item.fields;
              const {day, month, year} = item.fields.date;
              return { title, link, day, month,year};
          });
          return products;
      } catch (error) {
          console.log(error);
      }
  }
}

class UI {
  displayProduct(product) {
    let result = '';
    product.forEach(product => {
      result += `<li>
                    <h3>
                      <a href="${product.link}">
                        ${product.title}
                      </a>
                    </h3>
                    <div>
                      <span>${product.month}</span> <span>${product.day}</span><span>${product.year}</span>
                    </div>
                  </li>`;
      console.log(product.day);
    });
    latestnewsDOM.innerHTML = result;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  //get all products
  products.getProducts().then(products => {
    ui.displayProduct(products);
  });
});