//Написать функцию, получающее массив с вложенными массивами и 
//возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.
//Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function lets_flat(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr = arr.reduce((acc, val) => acc.concat(val), []);
        } else {
            continue;
        }
    }
    return arr;
}

// alert(arr);
alert(lets_flat(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Дана матрица [ [1, 2, 3, 2, 3, 7, 9], [4, 5, 6, 5, 7, 8, 9], [7, 8, 9, 4, 6, 3, 1] ]
// Дальше берется матрица 3х3 и идет по этой матрице сдвигаясь на один столбец на каждой итерации. 
// Функция должна вернуть массив булевых значений. Если в матрице 3х3 цифры не повторяются, то true.

let array = [
    [1, 2, 3, 2, 3, 7, 9],
    [4, 5, 6, 5, 7, 8, 9],
    [7, 8, 9, 4, 6, 3, 1]
];

function checkingForValues(array) {
    let valuesSet = new Set();
    let matrix = [];
    let boolResult = [];
    for (let i = 0; i < array[0].length - 2; i++) {
        matrix = [];
        for (let j = 0; j < 3; j++) {
            for (let n = i; n <= i + 2; n++) {
                matrix.push(array[j][n]);
            }
        }

        valuesSet = new Set(matrix);
        boolResult.push(valuesSet.size === 9);
    }
    return boolResult;
}

console.log(checkingForValues(array)); // [true, false, false, false, false]