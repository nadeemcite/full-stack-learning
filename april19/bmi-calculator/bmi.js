let ans
do {
    const massInKg = parseFloat(prompt("Enter your weight in Kg"))
    const heightInInches = parseFloat(prompt("Enter your height in inches"))
    const heightInMeters = heightInInches * 0.0254
    const bmi = massInKg / (heightInMeters ** 2) 
    let category
    if (bmi < 18.5){
        category = "Underweight"
    }else if (bmi >= 18.5 && bmi < 25){
        category = "Normal"
    }else if(bmi >=25 && bmi < 29.9){
        category = "Overweight"
    }else{
        category = "Obese"
    }
    alert(`Your BMI is ${bmi.toFixed(2)} and you are in ${category} category.`)
    ans = prompt("Do you want to check BMI for another user? (y/n)")
} while(ans == 'y')