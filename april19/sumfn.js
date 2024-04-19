function sum1(a, b){
    console.log(`Sum = ${a+b}`)
}

/*
procedures
sum1 -> name of function
a,  b -> function arguments
console.log(`Sum = ${a+b}`) -> function body

return something: return statement
*/

sum1(8, 9)
/*
sum1(......) -> function call
8, 9 -> parameters of the function
*/

sum1(81, 90)
sum1(4, 5)
sum1(18, 7)

console.log("Output of sum3")
const sum3 = (a, b) => {
    console.log(`Sum = ${a+b}`)
}

sum3(8, 9) + 10

/* 
return keyword: it has to be used at the logical end of the function
*/

const sum4 = (a,b) =>{
    const sum = a+b
    return sum
}

console.log("Output of sum4")

const calculatedSum = sum4(9,4)

console.log(`My Calculated Sum = ${calculatedSum}`)
