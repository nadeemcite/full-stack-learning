/*
while - where normally we dont know number of iterations in advance
do while - atleast the statements should be executed once
for loop - when we have any pattern
*/

// if a number is prime or not

// 79 ->  2, 3, 4.....78

numberToCheck = 100000000
divisor = 2
// O(n^0.5)
// 100000000 -> 100000000 (numberToCheck)  -  10000 (numberToCheck ** 0.5)
// 39 -> 6-7
while(divisor < (numberToCheck ** 0.5) ){
    if (numberToCheck % divisor == 0){
        console.log(`The number is divisible by ${divisor}`)
        break
    }
    divisor++
}
if (divisor  == numberToCheck){
    console.log("Number is prime")
} else {
    console.log("Number is not a prime")
}

// num = 7
// mul = 100
// do {
//     console.log(`${num} x ${mul} = ${num*mul}`)
//     mul++
// } while(mul <= 10)

// num = 9
// for(mul = 1; mul<=10; mul++){
//     console.log(mul)
// }