describe("pow", function () {

    describe("возводит x в степень 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = -1; x <= 14; x++) {
            makeTest(x);
        }
    });

    describe("возводит x в нестандартную степень", function () {
        it("для отрицательных n возвращает NaN", function () {
            assert.isNaN(pow(2, -1));
        });

        it("для дробных n возвращает NaN", function () {
            assert.isNaN(pow(2, 1.5));
        });
    });

    //проблема в том, что нужно каждый тест писать в отдельной функции, иначе, 
    //в случае краха, будет сложно разобраться где всё пошло не так
    describe("Задача секции 3.5 сложностью 5", function () {
        it("Возводит x в степень n", function() {
            let x = 5;
          
            let result = x;
            assert.equal(pow(x, 1), result);
          
            result *= x;
            assert.equal(pow(x, 2), result);
          
            result *= x;
            assert.equal(pow(x, 3), result);
          });
    });

    describe("исправленный вариант тестов", function () {
        function makeTest(n) {
            let x=4;
            let expected = x**n;
            it(`${x} в степени ${n} будет ${expected}`, function () {
                assert.equal(pow(x, n), expected);
            });
        }

        for (let n = 1; n <= 14; n++) {
            makeTest(n);
        }
    });

});