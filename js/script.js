'use strict';


/*1) Создать переменную num со значением 266219 (тип данных число)
2) Вывести в консоль произведение (умножение) цифр этого числа
3) Полученный результат возвести в степень 3,
используя только 1 оператор (Math.pow не подходит)
4) Вывести в консоль первые 2 цифры полученного числа
*/
// let N = 266219;
// console.log('N: ', N);
// let arr = N.toString().split('').map(Number);
// console.log('arr: ', arr);
// let proizv = arr.reduce( (a,b) => a*b );
// console.log('proizv: ', proizv);
// let exp = proizv**3;
// console.log('exp: ', exp);
// let number = String(exp).slice(0,3);
// console.log('number: ', number);

/*
Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - 
функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все 
пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть 
текста скрывается и вместо них появляются три точки (...)
*/


// №4 Усложненное

// function String(str){
//     do {str = prompt('Введите строку.');
//         if (Number(str) || str === null || str.trim() === '') 
//         { alert('Ошибка, повтоите ввод строки!');}
        
//         if (!str === null) {str = str.trim();}
//         console.log(str);
        
//     }   while (Number(str) || str === null || str.trim() === '');
//     if (str.length>10) {console.log(str.slice(0, 9) + '...');}
// else {console.log(str.trim());}
// }
// String();

//Задание №6

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function Game() {
let numberVar = Math.floor((Math.random()*100)+1);
console.log('numberVar: ', numberVar);

let n = 11;

    function varNumber(number) {
        n = n - 1;
        if (n < 1) {
            let answer = confirm('Извините, ваши попытки закончились. Хотите сыграть еще?');
            if(answer) {Game();} else {return;}
        }
    number = prompt(`Угадай число от 1 до 100. Количество попыток: ${n}`);
    
    if (number === null) {
        alert('Игра окончена!');
    return;
    }

    if (!isNumber(number)) {
    alert('Можно вводить только числа');
    varNumber();
    }

    if (+number === numberVar) {
    alert('Верно, Вы угадали загаданное число!');
    return;

    } else if (number < numberVar) {
    alert('Загаданное число больше');
    varNumber();
    
    } else if (number > numberVar) {
    alert('Загаданное число меньше');
    varNumber();
    }
    }
    varNumber();
    }
Game();