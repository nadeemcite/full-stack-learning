/*

WAP to create a function checkAge -> take age as input
based on age its going to calculate if a person is minor, adult or sr. citizen
*/

const checkAge = (age) =>{
    if (age < 0 ){
        return "invalid age"
    }else if(age<18){
        return "minor"
    }else if (age<60){
        return "adult"
    }else{
        return "sr. citizen"
    }
}

const typeOfPerson = checkAge(-7)
console.log(typeOfPerson)