// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color 
//   и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");

 
changeColorBtn.addEventListener("click", (event) => {

  
const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;

});

