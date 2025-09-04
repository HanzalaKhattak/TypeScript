"use strict";
// In this function the parameter's num type is not declared which results in the error in typescript
// Further here we can slso call string methods with "num" and can pass String to it. Which again should'nt 
// be allowed in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5);
// So here i will define the type of the parameter in the funtion
// now tge parameter num will always take value as number and if someone put a string or any other type then it will throw an error
function addThree(num) {
    return num + 3;
}
addThree(5);
// Same is for strings
function getlower(val) {
    return val.toLowerCase();
}
getlower("Aimal Nigga");
