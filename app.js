"use strict";
//string
var myName = 'Cyrus';
//myName = 28; error
//number
var myAge = 38;
//myAge = 'Cyrus'; error
//boolean
var hasHobbies = true;
//hasHobbies = 1; erro
//assign types 
var myRealAge;
myRealAge = 27;
myRealAge = '27';
//any is defaulted if you are not explicit
var mRealAge;
mRealAge = 27;
//mRealAge ='27'; error
//array
var hobbies = ["Cooking", "Sports"];
//hobbies = [100]; error the array in string
var hobs = ["Cooking", "Sports"];
hobs = [100];
//tuples
var address = ["Cyrus", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
})(Color || (Color = {}));
//Behind the scenes has equivalent numbers, you can also overight the numbers.
var myColor = Color.Green;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions 
function returnMyName() {
    return myName;
    //return myAge; error
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
//function types
var myMultiply; //name of the argument is totally ignored only that it matches the type
myMultiply = multiply;
console.log(myMultiply(5, 2));
//object 
var userData = {
    name: "Cyrus",
    age: 38
};
// Key thing to note type definition is the blueprint, while the property
// of the object. Its just weird that assigning is donoted by :
// userData = {
//     a: "Max",
//     g: 37
// }; error since unlike function types where properties name does not matter for objects property name matters.
//complex object
//it has data property array & output property function
var complex = {
    data: [100, 3, 99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27;
//check types
var finalValue = 38;
if (typeof finalValue == "number") { //"" withint the string is the type so if you are checking for bollean so its bollean
    console.log("Final value is number");
}
//never 
function neverReturns() {
    throw new Error('An error');
}
//Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
//canThisBeAny = 12 : error if strictNullChecks = true
