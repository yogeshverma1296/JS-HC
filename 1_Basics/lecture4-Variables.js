// Variables in Javascript
// Let, Var and Const are Keywords(Reserved Words) used to define variables and Constants.
// const is used to create a constant that cannot be changed or reinitialize and is immutable.
const accountId=550;
// reassignment to constant variable is not allowed, it cannot be changed otherwise interpretor throws an error

// To declare a variable two ways Let and Var
// let is block scoped and can be changed
let accountName="Yogesh Verma";
let accountState; //value if we print is undefined

// Prefer not to use var because of issue of block scope and functional scope
// var is global scoped or function scoped
var accountCity="Chandigarh"

// not used keyword to declare variable, should not be used (avoided)
accountEmail="xyz@google.com";

// console.table() to print multiple variables in a clear format
console.table([accountId,accountName,accountCity,accountEmail])