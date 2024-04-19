numberToCheck = 100000000000 
divisor = 2
i = 0
while(divisor < (numberToCheck ** 0.5) ){
    i ++ 
    if (numberToCheck % divisor == 0){
        console.log(`The number is divisible by ${divisor}`)
        //break
    }
    divisor++
}
// if (divisor  == numberToCheck){
//     console.log("Number is prime")
// } else {
//     console.log("Number is not a prime")
// }

console.log(i)
// O(n) O(2n) O(3n) O(100n)  O(n/100) -> O(n)
// O(n^1/2)
// divisor < numberToCheck - 99999998

// divisor < numberToCheck / 2 - 49999998

// divisor < numberToCheck ** 0.5 - 9998