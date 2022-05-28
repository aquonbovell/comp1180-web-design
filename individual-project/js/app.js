var navbar = document.querySelector(".nav-center");
const contentDOM = document.querySelector('.content');
const newsDOM = document.querySelector('.latest-news');
const questions = document.querySelectorAll(".question");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//     links.classList.toggle("show-links");
// });

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
// class Data {
//     async getContent() {
//         try {
//             let result = await fetch("content.json");
//             let data = await result.json();
//             let content = data.items;
//             content = content.map(item => {
//                 const { title, text, link, image} = item.fields;
//                 return { title, text, link, image };
//             });
//             return content;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async getNews() {
//         try {
//             let result = await fetch("news.json");
//             let data = await result.json();
//             let news = data.items;
//             news = news.map(item => {
//                 const {title,link} = item.fields;
//                 const { month, year, day } = item.fields.date;
//                 return { title,link, month, year, day };
//             });
//             return news;
//         } catch (error) {
//             console.log(error);
//         }
//     }
    
// }
// class UI {
//     displayContent(product) {
//         let result = '';
//         product.forEach(product => {
//             result += `
//             <li>
//                     <img src=${product.image} alt=" " />

//                     <div>
//                         <h3>
//                             <a
//                                 href=${product.link}>
//                                 ${product.title}
//                             </a>
//                         </h3>
//                         <p>${product.text}<hr></p>
                        
//                     </div>
//                 </li>`;
//         });
//         contentDOM.innerHTML = result;
//     }
//     displayNews(news) {
//         let result = '';
//         news.forEach(news => {
//             result += `
//                 <li>
//                     <div class="date-container">
//                         <span class="month">${news.month}</span>
//                         <span class="day">${news.day}</span>
//                         <span class="year">${news.year}</span>
//                     </div>
//                     <h3>
//                         <a href=${news.link}>${news.title}</a>
//                     </h3>
//                 </li>`;
//         });
//         newsDOM.innerHTML = result;
//     }
// }
// document.addEventListener("DOMContentLoaded", () => {
//     const ui = new UI();
//     const products = new Data();

//     products.getContent().then(content => {
//         ui.displayContent(content);
//     });
//     products.getNews().then(news => {
//         ui.displayNews(news);
//     });
// });
