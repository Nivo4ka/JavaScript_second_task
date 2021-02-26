//----------------9.1-------------------

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();

//----------------9.2-------------------

class Animal {

    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        //----------------------произошли изменения-------------------------
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);

// ошибка появляется потому что конструктор должен вызывать super

//----------------9.3-------------------

class Rabbit extends Object {
    constructor(name) {
        //----------------------произошли изменения-------------------------
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty('name')); // Ошибка

// ошибка появляется потому что конструктор должен вызывать super

//----------------9.6-------------------

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
// instanceof возвращает true потому что сравнивает не функции-конструкторы, а прототипы

