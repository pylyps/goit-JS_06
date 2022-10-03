// Создай переменную counterValue в которой будет
// храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
//  внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.





let counterValue = 0;

const span = document.querySelector("span");
console.log(span);
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.log(buttonDecrement);
const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.log(buttonIncrement);

buttonIncrement.addEventListener('click', (event) => {

    console.log('клик')
    counterValue += 1; 
    console.log(counterValue);
    span.textContent = counterValue;
console.log(span);
});

buttonDecrement.addEventListener('click', (event) => {
    console.log('клик')
    counterValue -= 1;
    span.textContent = counterValue;
console.log(span);
});


