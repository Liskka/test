"use strict";

//&& - и (проверяет, если все условия равны, то выдаст true), || - или (если хоть одно условие верно, то выдась тру)

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);   //Оператор "!" оборачивает значение в противоположное (тру\фолс)

let incr = 10,
    decr = 10;
/* incr++; 
decr--;  */
console.log(++incr);
console.log(--decr);

let checkTrue = true,
    checkFalse = false;

console.log(!checkFalse && checkTrue);

let twentyFive = prompt('Введи 25', '25') == '25' ? console.log('Молодец') : console.log('Нужно было ввести 25');

let test1;
let test2;