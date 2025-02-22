/* Error types: 
1: Syntax error -> Occurs when there is an invalid syntax
2: Reference Error -> happens when a variable or function is referenced 
   that dosen't existsor is out of scope
3: Type Error -> Occurs when an operation is applied to an incompatible type
*/

// syntax error
// const a = 4 + 5;

// throw new Error('pass any message, msg');
// console.log(a);

/* Handling Exception using ry-catch-finally */

try{
    console.log(age);
}catch(ex) {
    console.log("Manoj is logging", ex)
}finally {
    console.log("always be executed");
}