/*
WAP: to print first 10 numbers starting from 1
*/

// startingNumber = 100 // Initialization Statement

// CTRL + / -> toggle comments

// while (startingNumber <= 10){  // Loop condition
//     console.log(startingNumber) // loop body
//     startingNumber++ // Change statement
// }

// for(startingNumber = 1; startingNumber <= 10;  startingNumber++){
//     console.log(startingNumber)
// }


/*
Prints multiplication table of a given number
with for loop
*/
// num = 9
// for(mul = 1; mul<=10; mul++){
//     // console.log(`${num} x ${mul} \t= ${num*mul}`)
//     console.log(mul)
// }


/*

WAP: 1 2 3 4 5
*/
// outputString = ""
// for(i = 1; i<=10; i++){
//     outputString = outputString + i + " "
// }
// console.log(outputString)
for(i = 1; i<=10; i++){
    process.stdout.write(`${i} `)
}
process.stdout.write("\n")

