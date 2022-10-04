// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input),
// подставляет его текущее значение
// в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// 1. вытягиваем названия тегов из ХТМЛ
// 2. Делаем функцию на событие инпут
// 3. Савим слушаетля на событие 

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value;
}

refs.input.addEventListener('input', onInputChange);

