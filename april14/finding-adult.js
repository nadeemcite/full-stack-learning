/*
Given an age of a person find out if he/she is a minor, adult or a sr. citizen

minor 0 - 17
adult 18 - 59
Sr. Citizen - 60 +

The person is 
*/

age = 5;

if (age < 18) {
  console.log("The person is a minor.");
} else if (age < 60) {
  //  if(!(age<18) && age<60 )
  console.log("The person is an Adult.");
} else {
  console.log("The person is an Sr. Citizen.");
}

console.log("End of program");
