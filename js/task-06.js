// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {

    const blurInputValue = event.currentTarget.value;
   console.log(blurInputValue);
    console.log(blurInputValue.split(""));
    console.log(blurInputValue.length);
 
    if (blurInputValue.length == input.dataset.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }else{
        input.classList.add('invalid');
    input.classList.remove('valid');
        }
});


