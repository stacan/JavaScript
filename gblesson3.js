//========== Циклы, массивы, структруры данных ========

//------------- через CTRL+F ----------------
//1.Цикл for;
//2.continue - возврат в начало цикла;
//3.Одномерный, двумерный массив;
//4.Цикл for...in подходит для перебора ОБЬЕКТОВ по ключу,
//а не массивов;
//5.Цикл for...of подходит для перебора массивов по значению;
//6.Цикл forEach подходит для перебора массивов по 
//различным параметрам;
//7.Функция (=>) - коллбэк;
//8.Массивы, добавление (push, unshift), удаление(pop, shift),
//splice;
//9.Игра "Быки и коровы";
//10.Home Work, tasks 1, 2, 3, 4, 5;





//Цикл for
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/
//=====Бесконечный цикл======
/*
while (true) {
    console.log(i);
}
*/
//==========
/*
for (let i = 0; ; i++) {
    if (i < 1) break;
    if (i % 2 === 1) continue; //continue - возврат в начало цикла
    console.log(i);
}
*/
//============

/*outerLoop
for (let a = 0; a < 3; a++) {
    console.log('Upper circle is running');
    for (let b = 0; b < 3; b++) {
        if (b >= 1) {
            console.log('Breaking inner circle');
            break outerLoop;
        }
    }
}
*/
/*Обычно я всё перебираю for, если нужно перебрать
массив, то аналогом for -  forEach
//========  Массивы ============

// одномерный массив

let arr = [];
let arr = [1, 5, 10];
//=========
let arr = new Array(8);
console.log(arr);
//=========
let arr = new Array(8, 5, 10);
console.log(arr);
//на замену одномерному массиву оч хорошо заходит
обьект 'map', для создания всяких прикольных вещей
*/

// Двумерный массив
/*let arr = [
    [1, 5, 'hi', false],
    [10, true, '50', NaN],
    [100, NaN, true, 59],
];
console.log(arr);
*/
//=============
/*
let arr = [
    [1, 5, 'hi', false],
    [10, true, '50', NaN],
    [100, NaN, {name: 'Vasya'}, 59],
];
console.log(arr[2][2].name);
console.log(arr[2][3]);
*/
//=============
/*
let arr = [true,'string', NaN, 32];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/
// ======== for... in ========
/*
let arr = [true,'string', NaN, 32];
for (const key in arr) {
    console.log(arr[key]);
}
//for... in подходит для перебора ОБЬЕКТОВ по ключу,
а не массивов
*/
// ========= for... of ========
/*
let arr = [true,'string', NaN, 32];
for (const val of arr) {
    console.log(val);
} 
//for... of перебирает по значению
*/
//========= forEach ==========
/*
let arr = [true,'string', NaN, 32];
arr.forEach((item) => {
  console.log('Current item: ', item);
});
*/
/*
let arr = [true,'string', NaN, 32];
arr.forEach((item, index, arr) => {
  console.log('Current item: ', item);
  console.log('Current index: ', index);
  console.log('Source array: ', arr);
});
//ГДЕ '=>' - ФУНКЦИЯ КОЛЛБЭК !!!!!

//строка 76 - счетчик который каждый раз итерируется
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);

//строка 83, 92 - каждый раз создается новая константа
//let arr = [true,'string', NaN, 32];
*/
//================================
/*
let arr = [];
arr[0] = 1;
arr[10] = 10;
arr[50] = 'string';

delete arr[10];
console.log(arr);
*/
/*
let arr = [];
arr[0] = 1;
arr[10] = 10;
arr[50] = 'string';

console.log(arr);
delete arr[10];
*/
//delete больше используется для работы с обьектами, 
//а массив - это частный вид обьекта, где ключами являются
//числа от 0 и до бесконечности
// для массивов используются другие вещи

//=============================================
//============ Работа с массивами =============
/*
let arr = [];
arr[0] = 1;
arr[10] = 10;
arr[50] = 'string';

//delete arr[10]; //используется для обьектов в основном
//console.log(arr);
//========  Добавление ===========

//console.log(arr.push('to end')); //добавляет в конец массива и возвращает 
//длину массива;

//console.log(arr.unshift('to end')); //добавляет в начало массива и
//возвращает длину массива;

//console.log(arr);

//=========  Удаление  ==========

//console.log(arr.pop()); //удаляет последний элемент из массива и 
//возвращает удаленный элемент;

//console.log(arr.shift()); //удаляет первый элемент из массива и 
// и возвращает удаленный элемент;

//========== метод splice ===========
//           !!!!!!!!!!! 
//console.log(arr.splice(10, 1)); //(start, deleteCount)
//удалит элемент arr[10] из массива и вернет массив;

//console.log(arr.splice(10, 2)); //(start, deleteCount)
//удалит элемент arr[10] и [11]из массива и вернет массив;

//arr.splice(10, 1, ['2', 6]); // (start, deleteCount, items)
//удалить и вставить;

//arr.splice(3, 0, 'metallica foreware');
//(start, deleteCount, items) // вставить;

//console.log(arr);

Про forEach я вам уже рассказал, есть еще классные методы, и
фильтрации, и reduce, которые очень помогают работать с массивами.
//   !!!!!!!  
*/


//============     GAME     =============
//============  Быки и коровы  ============
/*
//Принцип игры: указываем четыре числа по одному, прога говорит - 
//либо бык(угадал), либо корова(угадал наполовину).

let generateNumbers = [];  //массив, так как значений четыре
let attemptsCount = 0;     //счетчик количества попыток

//обнуление игры, нужно сгенерировать новые значения
function resetGame() {     //функция обнуления игры(заново)
  attemptsCount = 0;       //сбрасывает попытки
  generatedNumbers = [];    //сбрасывает числа

  //после сброса генерация новых значений, целые числа, которые не 
  //должны повторяться (разные);
  //изначально у нас массив нулевой длины(207), генерируется рандом;
  //метод includes говорит нам есть ли данное значение, элемент
  // в массиве или нет (208) добавляем элемент push'eм, идем снова на
  //начало цикла (207), у нас length=1, запускаем по новой цикл; 
  //если сгенерировалось число которое уже было, includes это проверит;
  while (generatedNumbers.length < 4) {
      const part = Math.floor(Math.random() * 10); // [0...9]
      if (!generatedNumbers.includes(part)) generatedNumbers.push(part);
  }
}
//функция reset у нас готова, reset ресетит, новые числа генерируюлтся

function startGame() {
    console.log(generatedNumbers);
    while (true) {
        const guess = prompt('Угадайте четыре разных положительных числа, загаданных компьютером. Для выхода нажмите -1. ');
        if (guess === '-1') {
            return alert('Игра завершена');

        }

        if (!isValidGuess(guess)) {  //если введена откровенная дичь, функция валидации, возвращающая либо true либо false;
            continue; //идем в начало цикла, спрашиваем новые значения;
        }
        attemptsCount++;

        const result = getGuessResult(guess);

        if (result[0] !==4) {
            alert(`Быки: ${result[0]}, Коровы: ${result[1]}`);
            continue; //идем в начало цикла, спрашиваем новые значения;
        }
        alert(`Поздравляем! Вы угадали все цифры. Количество попыток ${attemptsCount}`);

        if (!confirm('Хотите сыграть еще ?')) {
            return alert('До свидания!');
        }
        resetGame();
    }
}

function isValidGuess(guess) { //введенное пользователем от 0 до 9, в строковом формате;
    //return guess.length === 4;
    if (guess.length !== 4) {
        return false;
    }
    for (let i = 0; i < guess.length; i++) {
        if (Number.isNaN(parseInt(guess[i]))) {
            return false;
        }
    }
    return true;
}

function getGuessResult(guess) {
    const result = [0, 0]; //соотношение быки/коровы

    for (let i = 0; i < guess.length; i++) {
        if (+guess[i] === generatedNumbers[i]) {
            result[0]++;
        } else if (generatedNumbers.includes(+guess[i])) {
            result[1]++;
        }
    }
    return result;
}

resetGame();
startGame(); 

*/
/*
========== Home Work ============

//описание
2.организовать функцию countBasketPrice, которая будет считать
стоимость корзины. Накидать шаблоны, обьекты с товарами, 
массивы обьектов сделать, просто написать 'title мышка',
'price 100рублей', потому что там должны храниться числовые
значения и функция которая будет это все перебирать и считать
стоимость этой корзины

3.Вывести с помощью цикла for числа от 0 до 9, не используя
тело цикла. Выглядеть должно так:

for(...) {// здесь пусто} // решение должно быть заключено как
раз в скобках ()

*/


/*==========   Home Work Task 1   ===========

1.С помощью цикла while вывести все простые числа в промежутке
от 0 до 100. Можно без оптимизаций.
//==============================================
Простые числа - это числа больше 1, делящиеся без остатка 
только на 1 и на само себя. Таким образом будем перебирать
числа начиная с двойки и до 100.

Нахождение простых чисел можно сильно оптимизировать, для 
этого существуют специализированные алгоритмы, например
решето числового поля, квадратичное решето. Более подробно
можно почитать в гугле или в википедии.
*/
/*
//начинаем с нуля
let i = 0;
//пока i меньше 100, будем перебирать все числа и проверять
//их, являются ли они простыми.
while (i < 100) {
//если число простое - выводим его
    if (isPrimeNumber(i)) {
        console.log(i);
    } 
//прибавляем к i единицу и заканчиваем итерацию
    i++;       
}

//Функция проверяет является ли число простым;
//@param {int} number - число которое проверяем;
//@returns {boolean} - Вернет true, если число простое, 
//иначе false;

function isPrimeNumber(number) {
//если number меньше двух, то сразу пропускаем эти числа, 
//они нас не интересуют, они не являются простыми;
    if (number < 2) {
        return false;
    } 
//перебираем числа с 2 до корня числа (выше точно не 
//будет делителя), которое проверяем;
    for (let i = 2; i <= Math.sqrt(number); i++) {
//если число делится без остатка, значит число не 
//является простым;
        if (number % i === 0) {
            return false;
        }        
    }
//если не было найдено делителя в цикле выше, 
//значит число является простым;
    return true;           
}
*/
/*========   Home Work Task 2, 3   ==========
2. С этого урока начинаем работать с функционалом 
интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет 
считать стоимость корзины.
==============================================
*/
//Вариант1. Простая реализация без всяких обьектов.
//@type {*[]}
/*
const basket = [
    {
        id_product: 123,
        product_name: 'Ноутбук',
        price: 43500,
        quantity: 1
    },
    {
        id_product: 456,
        product_name: 'Мышь',
        price: 199,
        quantity: 1
    }
];
*/
/*
//Вариант через for=========
function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i].price;
    }
    return totalPrice;
}
*/
/*
//Вариант через forEach=====
function countBasketPrice(basket) {
    let totalPrice = 0;
    basket.forEach((cartItem) => {
        totalPrice += cartItem[i].price;
    });
    return totalPrice;
}
*/
//========================
//через reduce
/*
const cart = [
    {
        title: 'Keyboard',
        price: 100,
        quantity: 3,
    },
    {
        title: 'Mouse',
        price: 199,
        quantity: 1,
    },
];
function getCartFullPrice() {
    return cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}
*/
// в консоли браузера для ответа нужн ввести функцию 
// getCartFullPrice()
//========================
//Самый оптимальный вариант через reduce
/*
function countBasketPrice(basket) {
    return basket.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
}
*/
//======================

//console.log(countBasketPrice(basket));
//=============================================

/*
//Реализация в псевдо.ООП. Описали сущность корзины;
//@type {{goods: *[], countBasketPrice(): *}}
*/
/*
const Basket = {
    goods: [
        {
        id_product: 123,
        product_name: 'Ноутбук',
        price: 45300,
        quantity: 1
        },
        {
        id_product: 456,
        product_name: 'Мышка',
        price: 199,
        quantity: 1
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
};
console.log(Basket.countBasketPrice());
*/


/*
//=======   Home Work Task 4  =========
4.*Вывести с помощью цикла for числа от 0 до 9, НЕ 
используя тело цикла. Выглядеть это должно так:

for(…){// здесь пусто}
==================
*/
//никогда вы такое применять не станете, это больше
//задание на сообразительность

//for (let i = 0; i < 10; console.log(i++)){}

/*=======      Home Work Task 5     ==========


5. *Нарисовать пирамиду с помощью console.log, как показано 
на рисунке, только у вашей пирамиды должно быть 20 рядов, а 
не 5:

x
xx
xxx
xxxx
xxxxx
=============================================
*/
//Пирамида начинается просто с символа 'x', выводим
//20 строк, прибавляя за каждую итерацию единицу к
//переменной i и к пирамиде 'xx';
/*
for (let i = 0, pyramid = 'x'; i < 20; i++, pyramid += 'x') {
    console.log(pyramid);
}
*/
//========   Другой вариант  =========
/*
//В переменной будет хранится строк с нашей переменной;
let pyramid = '';
//20 строк, перебираем каждую строку;
for (let i = 0; i < 20; i++) {
    pyramid += 'x';
//В каждой строке должно быть такое количество символов 'x',
//какая строк по счету. 
//Поэтому начиная с нуля и пока переменная 'j' будет меньше
//или равна переменной 'i' мы будем прибавлять по одному 
//символу 'x' в нашу пирамиду;
for (let j = 0; j < i; j++) {
    pyramid += 'xхх';   
}
//После одной сортировки необходимо сделать
//перенос строки
pyramid += '\n';
}
console.log(pyramid);
*/






















































