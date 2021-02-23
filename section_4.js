//-----------------4.1-------------------

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";
//да, будет работать, так как в подобных случаях нельзя переопределять user, а не его свойства


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

//-----------------4.4-------------------

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name); // Каким будет результат?
//выведется ошибка, так как ref вызывается без скобок, то есть не как метод, значит this будет неопределено


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 1);
        this.b = +prompt('b?', 1);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//-----------------4.5-------------------

function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', 1);
        this.b = +prompt('b?', 1);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько хотите добавить к текущему значению?', 1);
    };

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений