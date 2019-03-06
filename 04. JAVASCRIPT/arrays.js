"use strict";

var initialArray = [5, 19, 6, -15, 44, 10, -3.5, 0, 5, 9];
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
    return array.slice((array.length - 5), array.length);
}

console.log("Подмассив из последних пяти элементов отсортированного массива: " + getLastFiveElementsSubarray(initialArray).join(", "));

function getEvenElementsSum(array) {
    var evenElementsSum = 0;
    array.forEach(function (element) {
        if (element % 2 === 0) {
            evenElementsSum += element;
        }
    });
    return evenElementsSum;
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
    var subarray = [];
    array.forEach(function (element) {
        if (Math.sqrt(element) % 2 === 0) {
            subarray.push(element);
        }
    });
    return subarray;
}

console.log("Массив квадратов чётных чисел из предыдущего массива: " + getEvenNumbersSquaresSubarray(createArrayFromOneToOneHundred()).join(", "));