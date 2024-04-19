/*
WAP : Write a program 

WAP to find if a day is a weekday or a weekend
MTWT -> Weekday
FSS -> Weekend
*/

day = "tuesday"

// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday"){
//     console.log("Day is a Weekday")
// }else if(day == "friday" || day == "saturday" || day == "sunday"){
//     console.log("Day is weekend")
// }else{
//     console.log("invalid day provided")
// }

switch(day){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log("Day is a weekday")
        break
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log("Day is weekend")
        break
    default:
        console.log("Invaild day provided") 
        break // useless
}

