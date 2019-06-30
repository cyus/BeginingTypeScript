//string
let myName = 'Cyrus';
//myName = 28; error

//number
let myAge = 38;
//myAge = 'Cyrus'; error

//boolean
let hasHobbies = true;
//hasHobbies = 1; erro

//assign types 
let myRealAge;
myRealAge = 27;
myRealAge ='27';
//any is defaulted if you are not explicit

let mRealAge: number;
mRealAge = 27;
//mRealAge ='27'; error

//array
let hobbies = ["Cooking","Sports"];
//hobbies = [100]; error the array in string

let hobs: any [] = ["Cooking","Sports"];
hobs = [100];

//tuples
let address: [string,number] = ["Cyrus",99];

//enum
enum Color {
    Gray,//0
    Green,//1
    Blue = 100
}
//Behind the scenes has equivalent numbers, you can also overight the numbers.
let myColor: Color = Color.Green;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW",series: 3};
console.log(car);

//functions 
function returnMyName():string{
    return myName;
    //return myAge; error

}
console.log(returnMyName());

//void
function sayHello():void{
    console.log("Hello");
}

//argument types
function multiply(value1:number, value2:number):number{
    return value1 * value2;

}
console.log(multiply(2,5));

//function types
let myMultiply: (val1:number, val2:number) => number ; //name of the argument is totally ignored only that it matches the type
myMultiply = multiply;
console.log(myMultiply(5,2));

//object 
let userData: {name: string, age: number} = {
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
let complex: {data:number[],output: (all:boolean)=>number[]} = {
    data: [100,3,99,10],
    output: function (all:boolean):number[]{
        return this.data;
    }
};

//complex = {};
// type alias

type Complex = {data:number[],output: (all:boolean)=>number[]};
let complex2: Complex ={
    data: [100,3,99,10],
    output: function (all:boolean):number[]{
        return this.data;
    }
};

//union types
let myRealRealAge:number|string = 27;

//check types
let finalValue = 38;
if (typeof finalValue =="number" ){  //"" withint the string is the type so if you are checking for bollean so its bollean
    console.log("Final value is number");
}

//never 
function neverReturns():never{
    throw new Error ('An error');
}

//Nullable Types
let canBeNull: number | null = 12;
canBeNull = null; 
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
//canThisBeAny = 12 : error if strictNullChecks = true
