// // Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
//  заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// console.log(document);


const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};
const categories = document.querySelector('#categories');
const subCategories = categories.querySelectorAll('.item');
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);
