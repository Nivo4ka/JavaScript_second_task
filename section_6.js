// //-------------------6.1----------------------

// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }

// alert(sumTo(100));
// // самый быстрый вариант это встроенная функция, поскольку её максимально оптимизировали прежде чем сделать встроенной;
// // вторым вариантом является итеративная функция так как она не вызывает другие функции и не заполняет стек вызовов;
// // последним вариантом является рекурсивная функция.

// // sumTo(100000) может не сработать, так как стек вызовов может быть переполнен


// function fib(n) {
//     let first = 1;
//     let second = 1;
//     for (let i = 3; i <= n; i++) {
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     return second;
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList(list) {
//     alert(list.value);
//     if (list.next) printList(list.next);
// }

// printList(list);


// function printListRevers(list) {
//     if (list.next) printListRevers(list.next);
//     alert(list.value);
// }

// printListRevers(list);

// //-------------------6.3----------------------

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2()); // 1
// // из-за того, что эти переменные инициализировали отдельно, а не приравнивая друг к другу, count у них будет у каждого свой


// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();
// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down()); // 1
// // функция будет работать и count у методов общий


// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }
// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2


// function byField(arg) {
//     return (a, b) => a[arg] > b[arg] ? 1 : -1;
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// alert(users[0].name);
// users.sort(byField('age'));

// alert(users[0].age);


// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//         //--------------произошли изменения---------------
//         let j = i;
//         let shooter = function () { // функция shooter
//             alert(j); // должна выводить порядковый номер
//         };
//         //--------------произошли изменения---------------
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
//   // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// //-------------------6.6----------------------

// function makeCounter() {
//     let count = 0;
//     let counter = () => count++;
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
// }

// //-------------------6.8----------------------

// function printNumbersInterval(from, to) {
//     let num = from;
//     let timerId = setInterval(function func() {
//         alert(num);
//         if (num == to) {
//             clearInterval(timerId);
//         }
//         num++;
//     }, 1000);
// }

// printNumbersInterval(5, 10);

// function printNumbersTimeout(from, to) {
//     let num = from;
//     function go() {
//         alert(num);
//         if (num < to) {
//             num++;
//             setTimeout(go, 1000);
//         }
//     }
//     setTimeout(go, 1000);
// }

// printNumbersTimeout(5, 10);


// let i = 0;
// setTimeout(() => alert(i), 100); // 100000000 // запланированная функция выполнится после цикла
// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// //-------------------6.9----------------------

// function work(a, b) {
//     alert(a + b); // произвольная функция или метод
// }

// function spy(func) {
//     function wrap(...args) {
//         wrap.calls.push(args);
//         return func.apply(this, arguments);
//     }
//     wrap.calls = [];
//     return wrap;
// }

// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }


// function f(x) {
//     alert(x);
// }

// function delay(f, ms) {
//     return function func() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс


// function debounce(f, ms) {
//     let isDone = true;
//     return function () {
//         if (!isDone) return;
//         f.apply(this, arguments);
//         isDone = false;
//         setTimeout(() => isDone = true, ms);
//     };
// }

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500);


// function f(a) {
//     console.log(a)
// }

// function throttle(func, ms) {

//     let isThrottle = false,
//         savedArgs,
//         savedThis;

//     function wrap() {
//         if (isThrottle) {
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//         func.apply(this, arguments);
//         isThrottle = true;
//         setTimeout(function () {
//             isThrottle = false;
//             if (savedArgs) {
//                 wrap.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//     return wrap;
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

//   // когда 1000 мс истекли ...
//   // ...выводим 3, промежуточное значение 2 было проигнорировано

// //-------------------6.10----------------------

// function f() {
//     alert(this); // null
// }
// let user = {
//     g: f.bind(null)
// };
// user.g();


// function f() {
//     alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f(); // Вася
// // this нельзя изменить дополнительным связыванием


// function sayHi() {
//     alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "Вася"
// });

// alert(bound.test); // undefined, потому что у bound нет свойства test


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };
// //--------------произошли изменения---------------
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',
//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };
// //--------------произошли изменения---------------
// askPassword(() => user.login(true), () => user.login(false));
