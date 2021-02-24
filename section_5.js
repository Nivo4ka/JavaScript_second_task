// //-----------------------5.1------------------------

// let str = "Привет";

// str.test = 5;

// alert(str.test); // indefined так как примитывы не могут хранить дополнительные данные

// //-----------------------5.2------------------------

// let a = +prompt('а = ?', '');
// let b = +prompt('b = ?', '');

// alert(a + b);


// function readNumber() {
//     let number;
//     while (true) {
//         number = prompt("Введите число", 0);
//         if (isFinite(number)) break;
//     }

//     if (number === null || number === '' || number === ' ') return null;

//     return +number;
//   }

//   alert(`Число: ${readNumber()}`);

// //-----------------------5.3------------------------

// let ucFirst=(str) => str.charAt(0).toUpperCase() + str.slice(1);

// alert(ucFirst("вася"));


// function checkSpam(str) {
//     let maybe_spam = str.toLowerCase();

//     return maybe_spam.includes('viagra') || maybe_spam.includes('xxx');
// }

// alert(checkSpam('buy ViAgRA now') == true);
// alert(checkSpam('free xxxxx') == true);
// alert(checkSpam("innocent rabbit") == false);


// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '…';
//     } else return str;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));

// //-----------------------5.4------------------------

// let styles = ['Джаз', 'Блюз'];
// alert(styles);

// styles.push('Рок-н-ролл');
// alert(styles);

// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// alert(styles);

// alert( styles.shift() );

// styles.unshift('Рэп', 'Регги');
// alert(styles);


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a, b, function() так как к массиву уже добавится функция, которая выводит все элементы

// //-----------------------5.5------------------------

// function camelize(str) {
//     str = str.split('-');
//     str = str.map((str, index) => index == 0 ? str : str[0].toUpperCase() + str.slice(1));
//     str = str.join('');
//     return str
// }

// alert(camelize("background-color"));
// alert(camelize("list-style-image"));


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)


// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     };

//     this.calculate = function (str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// let calc = new Calculator;
// alert( calc.calculate(prompt('введите выражение (- или +)', '')) ); 

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate(prompt('введите выражение (-, +, *, /, **)', ''));
// alert( result ); 


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name);
// let years = users.map(users => users.age);

// alert(names);
// alert(years);


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// //-----------------------5.7------------------------

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert(unique(values)); // Hare,Krishna,:-O


// let map = new Map();

// map.set("name", "John");

// let keys = map.keys(); // нужно изменить на массив
// keys = Array.from(keys);

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// //-----------------------5.8------------------------

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
// // хранить прочитанные сообщения можно в WeakSet


// // для того, чтобы хранить время прочтения каждого сообщения можно использовать WeakMap

// //-----------------------5.9------------------------

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// alert(sumSalaries(salaries)); // 650


// let user = {
//     name: 'John',
//     age: 30
//   };

//   let count=(obj)=> Object.keys(obj).length;

//   alert( count(user) ); // 2

// //-----------------------5.10------------------------

// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, IsAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let max_salary = 0;
//     let max_name = null;

//     for (let [name, salary] of Object.entries(salaries)) {
//         if (max_salary < salary) {
//             max_salary = salary;
//             max_name = name;
//         }
//     }
//     return max_name;
// }

// // -----------------------5.11------------------------

// let date = new Date(2012, 1, 20, 3, 12);
// alert( date );


// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(date) {
//     let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return week[date.getDay()];
// }

// alert(getWeekDay(date));        // нужно вывести "ВТ"


// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// let getLocalDay = (date) => date.getDay() == 0 ? 7 : date.getDay();

// alert(getLocalDay(date));       // вторник, нужно показать 2


// function getLastDayOfMonth(year, month) {
//     return (new Date(year, month + 1, 0)).getDate();
// }

// alert(getLastDayOfMonth(2020, 11)); // 31
// alert(getLastDayOfMonth(2020, 1)); // 29
// alert(getLastDayOfMonth(2021, 1)); // 28


// function getSecondsToday() {
//     let now = new Date();
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     return Math.round((now - today) / 1000);
// }

// alert(getSecondsToday());


// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    
//     return Math.round((tomorrow - now) / 1000);
//   }
//   alert(getSecondsToTomorrow());

// //-----------------------5.12------------------------

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let jfirst = JSON.stringify(user);
// alert(jfirst);

// let jsecond=JSON.parse(jfirst);
// alert(jsecond.name + ' ' + jsecond.age);


// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(JSON.stringify(meetup, replacer = (key, value) => (key != "" && value == meetup) ? undefined : value));

