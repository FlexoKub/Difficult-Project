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

function String(str){
    do {str = prompt('Введите строку.');
        if (Number(str) || str === null || str.trim() === '') 
        { alert('Ошибка, повтоите ввод строки!');}
        
        if (!str === null) {str = str.trim();}
        console.log(str);
        
    }   while (Number(str) || str === null || str.trim() === '');
    if (str.length>10) {console.log(str.slice(0, 9) + '...');}
else {console.log(str.trim());}
}
String();