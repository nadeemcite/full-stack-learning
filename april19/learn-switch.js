/*
Build Small Calculator
two inputs a, b and a symbol=> +, -, *, /
*/

a = 100
b = 90
symbol = "?"

// if (symbol == "+"){
//     result = a + b
// }else if(symbol == "-"){
//     result = a - b
// }else if(symbol == "*"){
//     result = a * b
// } else if(symbol == "/"){
//     result = a / b
// } else{
//     console.log("Invalid operator used!")
// }
// console.log(result);

switch(symbol){ // More readabilty : Bookish Statement
    case '+':
        result = a + b
        break
    case '-':
        result = a - b
        break
    case '*':
        result = a * b
        break
    case '/':
        result = a / b
        break
    default:
        console.log("Invalid operator used")
}
console.log(result);