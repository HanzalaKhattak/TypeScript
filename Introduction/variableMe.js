"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Atif!";
greetings.toLocaleLowerCase();
//// if you declared the type of the variable as string and put a dot in the end of it like 
// "greetings. " then it will show all of the strings methods which can be used with this type variable
console.log(greetings);
// Same goes for boolean and number
var userId = 12345;
console.log(userId);
// we can also assign number to a variables and typescript is smart enough to recognize that. this is called type inference
var Id = 12345;
// Id = "Name";
// Here above when i tried to assign a string to the variable in which there was already number assigned
// it threw an error
// For Boolean we will write
var isLoggedIn = true;
