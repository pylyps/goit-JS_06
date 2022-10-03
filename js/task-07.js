// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector('#font-size-control');
console.log(input.textContent);
const span = document.querySelector('#text');
console.log(span.textContent);

input.addEventListener('input', event => {
  span.style.fontSize = input.value + "px";
});

