/*
Given 3 numbers, find the largest number, without using any inbuilt js function
*/

a = 70
b = 30
c = 55

if (a>b){
    if(a>c){
        console.log("A is the largest number")
    }else{
        console.log("C is the largest number")
    }
}else{
    // b is greater than a
    if(b>c){
        console.log("B is the largest number")
    }else{
        console.log("C is the largest number")
    }
}