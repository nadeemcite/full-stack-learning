/*
WAP to find if a number is prime or not using functions
*/
//is 1 a prime number?
const isPrime = function(num){
    if (num < 2){
        console.log("Invalid number for testing prime number") // throw error
        return;
    }
    divisor = 2
    while(divisor < (num ** 0.5)){
        console.log(divisor)
        if ( num % divisor == 0){
            return false
        }
        divisor++
    }
    return true
}
const result = isPrime(-10)
console.log(result?"Number is prime":"Number is not prime")