/*
    Build Small Calculator
    two inputs a, b and a symbol => +, -, *, /
*/
//typeOfVehicle -> bike-> 2 wheels,  auto -> 3 wheels, car -> 4 wheels

function numberOfWheelsIfElse(typeOfVehicle){
    if(typeOfVehicle == 'bike'){
        return 2
    }else if(typeOfVehicle == 'auto'){
        return 3
    }else if(typeOfVehicle == 'car'){
        return 4
    }else{
        return "Invalid Vehicle"
    }
}

function numberOfWheelsSwitchCase(typeOfVehicle){
    switch(typeOfVehicle){
        case 'bike':
            return 2
        case 'auto':
            return 3
        case 'car':
            return 4
        default:
            return "Invalid Vehicle"
    }
}

console.log(numberOfWheelsIfElse('car'))
console.log(numberOfWheelsSwitchCase('car'))

const numberOfWheelsObject = {
    bike: 2,
    auto: 3,
    car: 4
}
console.log(numberOfWheelsObject.car)

const calculatorObject = {
    "+": function (a,b){ return a+b}, // anonymous function
    "-": function (a,b){ return a-b},
    "*": function (a,b){ return a*b},
    "/": function (a,b){ return a/b},
}

const result = calculatorObject["*"](9, 8)
console.log(result)