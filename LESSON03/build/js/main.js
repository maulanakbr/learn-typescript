"use strict";
// Array
let stringArr = ["hey", "ho", "lets", "go"];
let favAlbums = ["Dune", "True", "Ray", 40];
let mixedData = ["NO", 1963, false];
stringArr[0] = "Boom";
stringArr.push("accepted");
// stringArr.push(20);
favAlbums[2] = 403;
favAlbums.unshift("Strange");
// stringArr = favAlbums;
// favAlbums = mixedData;
let test = [];
let bands = [];
bands.push("Cranberries");
bands.push("The Smiths");
// Tuple
let tuple = ["Bob", 99, true];
// mixedData = tuple;
// tuple = mixedData;
tuple[0] = "Dee-Dee";
tuple[2] = false;
// Object
let myObj;
// myObj = [];
myObj = bands;
// myObj = stringArr;
myObj = {};
const exObj = {
    prop1: "Maulana",
    prop2: true,
};
// exObj.prop2 = 42;
exObj.prop1 = "Dean";
let catalog1 = {
    id: 139,
    title: "Vertigo",
    price: 800,
    company: ["Company1", "Company2", 311],
    isReleased: true,
};
let catalog2 = {
    id: 129,
    title: "Suspiria",
    company: ["Company3", "Company4", 211],
    isReleased: true,
};
let catalog3 = {
    id: 129,
    company: ["Company2", "Company4", 231],
    isReleased: false,
};
// catalog1.stock
const getTitle = (movie) => {
    var _a;
    if (movie.title) {
        return `The movie title is ${(_a = movie.title) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "Blank title";
};
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 10] = "A";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["C"] = 12] = "C";
})(Grade || (Grade = {}));
console.log(stringArr);
console.log(favAlbums);
console.log(bands);
console.log(tuple);
console.log(typeof myObj);
console.log(myObj);
console.log(catalog1);
console.log(catalog2);
console.log(getTitle(catalog1));
console.log(getTitle(catalog3));
console.log(Grade.B);
