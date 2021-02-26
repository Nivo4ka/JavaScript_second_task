//-------------------10.1-----------------------

// у finally есть преимущство, так как есть случаи (такие как использование return и throw), 
//в которых код после try-catch не сработает.

//Пример:
function f() {
    try {
        return "a";
    } catch (e) { }
    finally {
        // очистить рабочее пространство
    }
}

//-------------------10.2-----------------------

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
