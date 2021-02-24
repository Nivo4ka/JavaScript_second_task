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