// Every thing in js is a value and could be stored as a name using const, var and let keywords

// 1st way 
function sum1(){
    let a = 10
    let b = 20
    console.log(`Sum = ${a+b}`)
}

// 2nd way
const sum2 = function(){
    let a = 10
    let b = 20
    console.log(`Sum = ${a+b}`)
}

//3rd way es5 or greater version
const sum3 = () => {
    let a = 10
    let b = 20
    console.log(`Sum = ${a+b}`)
}