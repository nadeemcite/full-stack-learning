/*
Given an age of a person find out if he/she is a minor, adult or a sr. citizen

minor 0 - 17
adult 18 - 59
Sr. Citizen - 60 +

The person is 
*/

age = 70;

personType = age < 18 ? "a Minor" : age < 60 ? "an Adult" : "a Sr Citizen";

console.log(`Person is ${personType}`);
