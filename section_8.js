// -------------------8.1-----------------------

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // ? (1) true
delete rabbit.jumps;
alert(rabbit.jumps); // ? (2) null
delete animal.jumps;
alert(rabbit.jumps); // ? (3) undefined


let head = {
    glasses: 1
};

let table = {
    pen: 3,
    //----------------------произошли изменения-------------------------
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    //----------------------произошли изменения-------------------------
    __proto__: table
};

let pockets = {
    money: 2000,
    //----------------------произошли изменения-------------------------
    __proto__: bed,
};

alert(pockets.pen); // 3
alert(bed.glasses); // 1
// с точки зрения логики быстрее получить значние можно через head.glasses, 
//но современные движки очень производительные для них разности в скорости нет.


let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
// rabbit, поскольку именно rabbit вызывает метод eat(), именно он стоит перед точкой


let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    //----------------------произошли изменения-------------------------
    stomach: [],
    __proto__: hamster
};

let lazy = {
    //----------------------произошли изменения-------------------------
    stomach: [],
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

alert(lazy.stomach); // пусто

// наедаются оба хомяка, потому что у каждого вида хомяка не переопределены свойства, 
//и тем самым все изменения происходят в общем объекте.

// -------------------8.2-----------------------
//1
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats); // true
//2
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit.eats); // false
//3
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert(rabbit.eats); // true
//4
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats); // undefined


let obj2 = new obj.constructor();
// так можно делать только если конструктор имеет корректное значение
//1
function Example(word) {
    this.word = word;
}

let example = new Example('Hi!');
let example2 = new example.constructor('Bye');

alert(user2.word); // Bye
//2
function Example(word) {
    this.word = word;
}
Example.prototype = {};

let example = new Example('Hi!');
let example2 = new example.constructor('Bye');

alert(user2.word); // undefined

// -------------------8.3-----------------------

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
function f() {
    alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

// -------------------8.4-----------------------

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
}
// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"


function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
// впервом случае rabbit имеет инициализированное свойство name 
// во всех остальных вызывается функция из прототипа, а там name не инициализирован
