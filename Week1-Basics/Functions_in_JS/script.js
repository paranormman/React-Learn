// function greet(firstName){
//     console.log(firstName, "Hi, How are you?")

//     return firstName + " Hello";
// }

// const res = greet("Manoj");
// console.log(res);

// calling the function normally
// function greet() {
//     console.log("hi");
// } greet();


// function multiply(a, b) {
//     console.log("Multiply " + a + " and " + b);
//     console.log(a * b);
    // return a * b;
// }
// multiply(2, 3)
// const res = multiply(5, 2);
// console.log(res);

// console.log(multiply(5, 10));

// Arrow Function
// const addition = (c, d) => {
//     console.log("Adding " + c + " and " + d);
//     console.log(c + d);
    // return c + d;
// };

// addition(10, 1);
// console.log(addition(9, 1));

// Two ways to call a function
// by defining a function to a variable
// const greetFunction = function greet(){
//     console.log("hi");
// }

// greetFunction();

// function declaration can also be a one liner
// const greetFunction = () => console.log("hi");
// greetFunction();

// default value in a function
// const greetFunction = (name = "Learner") => console.log("Hi", name);
// greetFunction("Manoj");



// Create a Calculator
// The calculate function is a higher order function: 
// a function that take function or a argument as a parameter
// const calculate = (a, b, operation) => {
//     return operation(a, b);
// };

// function add(a, b) {
//     return a + b;
// }
// // call a function
// function mul(a, b) {
//     return a * b;
// }

// const res = calculate(10, 10 , add);
// console.log(res);
// // calling the function using arrow method
// const resMul = calculate(2, 4 , (a, b) => a*b);
// console.log(resMul);

// Currying in JS, defining multiple functions 
// const multiple = (a) => {
//     return (b) => a * b;
// };

// create a function that doubles any number
// const double = multiple(2);
// const res = double(5);
// console.log(res);

// create a function that triples any number
// const triple = multiple(3);
// const res2 = triple(5);
// console.log(res2);

// This function in JS
// console.log(this);

// function greet() {
//     console.log(this);
// }; greet();

// const obj ={
//     age: 30,
//     walk() {
//         console.log(this);
//     },
// };
// obj.walk();

// const multiple = (a) => {
//     return (b) => a * b; 
// }

// console.log(multiple);

// const double = multiple(2)
// const res = double(5);
// console.log(res);

// console.log(this);

// function greet() {
//     console.log(this);
// }

// greet();

// const obj = {
//     age: 34,
//     walk() {
//         console.log(this);
//     },
// };

// obj.walk();

// calculator using multiple functions

const calculator = (a, b, operation) => {
    return operation(a, b)
}

const resadd = calculator(2, 4, (a, b) => (a + b));
console.log(resadd);
const ressub = calculator(5, 4, (a, b) => (a - b));
console.log(ressub);
const resmul = calculator(4, 5, (a, b) => (a * b));
console.log(resmul);
const resdiv = calculator(10, 5, (a, b) => (a / b));
console.log(resdiv);