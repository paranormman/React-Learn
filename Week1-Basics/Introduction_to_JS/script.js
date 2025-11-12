// Grade Students using switch case statements;

// let studentMarks = prompt("Please enter your Marks to be graded");
// console.log(studentMarks);

// switch(true){
//     case studentMarks >= 90:
//         console.log("Grade : A");
//         break;
//     case studentMarks >= 80:
//         console.log("Grade : B");
//         break;
//     case studentMarks >= 70:
//         console.log("Grade : C");
//         break;
//     case studentMarks >= 60:
//         console.log("Grade : D");
//         break;
//     case studentMarks >= 50:
//         console.log("Grade : E");
//         break;
//     default:
//         console.log("Grade : F");    
// }

// Average marks generator
// let scienceMarks = window.prompt("Enter your Science Marks");
// console.log(scienceMarks);
// let mathsMarks = prompt("Enter your Maths Marks");
// console.log(mathsMarks);
// let socialMarks = prompt("Enter your Social Marks");
// console.log(socialMarks);
// let englishMarks = prompt("Enter your English Marks");
// console.log(englishMarks);

// const avg = scienceMarks + mathsMarks + socialMarks + englishMarks;
// console.log("Average Marks : " + avg); 

// var Number1 = prompt("Enter your first Integer");
// var Number2 = prompt("Enter your second integer");
// // var Num1 = parseInt(Number1);
// var Num2 = parseInt(Number2);
// var sum = Number1 + Number2;
// var difference = Number1 - Number2;
// var product = Num1 * Num2;
// var quotient = Num1 / Num2;
// document.writeln(Number1 + "+" + Number2 + "=" + sum + "<BR>");
// document.writeln(Number1 + "-" + Number2 + "=" + difference + "<BR>");
// document.writeln(Number1 + "x" + Number2 + "=" + product + "<BR>");
// document.writeln(Number1 + "/" + Number2 + "=" + quotient);





// const x = "Manoj";
// console.log(x);

// const obj = {
//     name: "Manoj",
//     age: 26
// };

// console.log(obj.age, obj.name);

// const x = -7;

// const y = "-7";

// console.log(x === y);

// console.log(x == y);

// const z = x == 7 ? "hello" : "bye";

// console.log(z);

// if("0") {
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }



// const y = Boolean(x);
// console.log(y);
// console.log(typeof y);

// let z = "Manoj";  //let can be used when the variable is mutable
// console.log(z);

// const x = "Shivam"; //constant is used when the variable is immutable
// x = "Narayan";
// console.log(x);

// const x = 7;
// const y = "7";
// console.log(x === y); // "===" used to compare if both the value and type are the same

// Ternary operation

// const z = x == -7 ? "Hello World it's 7" : "Sorry boys my BAD";
// console.log(z);

// Program to calculate BMI
let height = prompt("Enter the Height in Meters");
let weight = prompt("Enter the Weight in Kilograms");
let bmi = Math.round((weight)/(height ** 2));
console.log("BMI of the given user is : " + bmi)
// Switch case will not work as it only compares the values explicitly (===) with value and type.
if(bmi < 18.5){
    console.log("You are underweight Eat UP!!");
}else if (bmi > 18.5 && bmi < 24.9){
    console.log("You have a normal weight, Keep working out!!");
}else if (bmi > 24.9) {
    console.log("You Fat Ass go work out You are Overweight!!");
}

// Program to convert CM to M
// var number = prompt("Enter a number in CM");
// let x = (number)/(100);
// console.log("The conversion of " + number + " from cm to m is " + x);