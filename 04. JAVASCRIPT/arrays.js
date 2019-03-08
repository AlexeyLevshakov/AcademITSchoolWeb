"use strict";

var initialArray = [5, 19, 6, -15, 44, 10, -3.5, 0, 5, 9, -1];
console.log("Начальный массив: " + initialArray.join(", "));

function doReverseSorting(array) {
    array.sort(function (element1, element2) {
        return element2 - element1;
    });
}

doReverseSorting(initialArray);
console.log("Начальный массив, отсортированный по убыванию: " + initialArray.join(", "));

function getFirstFiveElementsSubarray(array) {
    return array.slice(0, 5);
}

console.log("Подмассив из первых пяти элементов отсортированного массива: " + getFirstFiveElementsSubarray(initialArray).join(", "));

function getLastFiveElementsSubarray(array) {
    return array.slice(-5);
}

console.log("Подмассив из последних пяти элементов отсортированного массива: " + getLastFiveElementsSubarray(initialArray).join(", "));

function getEvenElementsSum(array) {
    var evenElementsArray = array.filter(function (element) {
            return element % 2 === 0;
        }
    );
    return evenElementsArray.reduce(function (a, b) {
        return a + b;
    });
}

console.log("Сумма элементов массива, которые являются чётными числами, равна " + getEvenElementsSum(initialArray));

function createArrayFromOneToOneHundred() {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }
    return array;
}

console.log("Массив целых чисел от 1 до 100: " + createArrayFromOneToOneHundred().join(", "));

function getEvenNumbersSquaresSubarray(array) {
    return array.filter(function (element) {
        return Math.sqrt(element) % 2 === 0;
    });
}

console.log("Массив квадратов чётных чисел из предыдущего массива: " + getEvenNumbersSquaresSubarray(createArrayFromOneToOneHundred()).join(", "));