"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Hello ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    const nomenclature = age === 1 ? 'year' : 'years';
    return `${name} is ${age} ${nomenclature} old`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangleArea(base, height) {
    return (base * height) / 2;
}
exports.triangleArea = triangleArea;
function squareArea(side) {
    return side ** 2;
}
exports.squareArea = squareArea;
function rectangleArea(base, height) {
    return base * height;
}
exports.rectangleArea = rectangleArea;
