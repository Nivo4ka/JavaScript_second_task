"use strict"
//--------------2.1----------------

alert("Я JavaScript!");

//--------------2.5----------------

let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Ilya

//--------------2.6----------------

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");

alert(isBoss); // true, если нажата OK

//--------------2.8----------------

let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1


"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // NaN // правильный ответ -2


let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12 //добавила унарные +

//--------------2.9----------------

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // false // правильный ответ true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//--------------2.10----------------

if ("0") { // выведется, так как "0"преобразуется в true
    alert('Привет');
}


let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}
// ответ
let result = a + b < 4 ? 'Мало' : 'Много';


let message;
if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
// ответ
let message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' : '';

//--------------2.11----------------

alert(null || 2 || undefined); // выведет 2, так как первое значение true


alert(1 && null && 2); // выведет null, так как первое значение false


alert(null || 2 && 3 || 4); // выведет 3, так как это последнее значение в операторе &&


if (-1 || 0) alert('first'); // выведет, так как -1 имеет значение true
if (-1 && 0) alert('second'); // не выведет, так как 0 имеет значение false
if (null || -1 && 1) alert('third'); // выведет, так как результат операции && имеет значение true

//--------------2.13----------------

for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    alert(i);
}


for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

while (1) {
    let value = prompt("введите число большее 100", '');
    if (+value > 100) break;
}

//--------------2.14----------------

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
}

if (browser === 'Edge') {
    alert("You've got the Edge!");
}
else if (browser === 'Chrome' || browser === 'Firefox' ||
    browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}

