// In this function the parameter's num type is not declared which results in the error in typescript
// Further here we can slso call string methods with "num" and can pass String to it. Which again should'nt 
// be allowed in TypeScript

function addTwo(num){
    num.toUpperCase();
    return num + 2;
}
addTwo(5);

// So here i will define the type of the parameter in the funtion
// now tge parameter num will always take value as number and if someone put a string or any other type then it will throw an error

function addThree(num : number): number{ /// here after the parameter i have written  ": number" againThis means that the return value will be a number
    // return "hello"; // will give error now
    return num + 2; // will not give error because of strict type checking

}

addThree(5);

// Same is for strings

function getlower(val : String){
    return val.toLowerCase();
}

getlower("Aimal Nigga");


// Working with arrow function
// The following is how we will work with the Arrow Function
const getHello = (h : string) : string => {
    return "hello";
}


const heros = ['Ali', 'Umer', 'Abu BAkar', 'Usman'];
// const heros =[1, 2, 3, 4]; 

heros.map((hero) => {
    return `hero is ${hero}`
})
// Lets just comment the secont hero array
// Now if you hover on the " hero " callback parameter then it will show the type String
// And if you comment the first array and then check the type of "hero" callback parameter by hovering over it then it will show the type number

// So we conclude that the TypeScript is intelligent engough to automatically know the type of some variables ao that we do not have to specifically assign the type



export {};