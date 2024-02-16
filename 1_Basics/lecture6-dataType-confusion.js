let score="33abc";
// console.log(typeof score); //string
// console.log(typeof(score)); //string

// let valueInNumber=Number(score); //number
console.log("Type of Value In Number = ",typeof(valueInNumber)); //Here Type of tells us that it is number
console.log("Value in Number = ",valueInNumber); //NaN
// NaN is not a number 33abc is not a pure number
// JS has issues of Strict Check that's why developers use Typescript for strict type check

// Number ()
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// undefined => NaN
// null => 0


// Boolean Conversions
let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
//1 -> Boolean() -> true
//0 -> Boolean() -> false

// Truthy and Falsy Values
//""(Empty String) -> Boolean() -> false
//"hitesh" ->Boolean() -> true
// falsy values false -> 0, -0, NaN, "": (empty string), null, undefined

//String()
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
// 33->String()-> String "33"