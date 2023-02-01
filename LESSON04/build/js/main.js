"use strict";
// Literal Types
let shortName;
let userName;
// userName = "Den";
userName = "Bob";
// Functions
const add = (a, b) => {
    // Return number as the result
    return a + b;
};
const logMsg = (message) => {
    // Void (Do not return anything)
    console.log(message);
};
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (a, b) {
    return a * b;
};
const addMultipleItems = (a, b, c) => {
    // Optional Parameters
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const subtractMultipleItems = (
// Default Parameters
a = 20, b, c = 2) => {
    return a - b - c;
};
const total = (a, ...nums) => {
    // Rest Parameters
    return a + nums.reduce((prev, curr) => prev + curr);
};
const createError = (errMsg) => {
    // The Never Type
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    // Custom Type Guard
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    // The Never Type
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This is not what we expected");
};
logMsg(userName);
logMsg(add(2, 3));
// logMsg(add("a", 3));
logMsg(subtract(400, 822));
logMsg(multiply(10, 332));
// logMsg(addMultipleItems(233, 332));
logMsg(addMultipleItems(233, 332, 20838));
// logMsg(subtractMultipleItems(12, 2));
// logMsg(subtractMultipleItems(12, 20, 3));
logMsg(subtractMultipleItems(undefined, 20, 3));
logMsg(total(90, 23, 38, 82, 33, 66));
logMsg(numberOrString("Lalala"));
// logMsg(numberOrString(true));
