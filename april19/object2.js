// let numberOfWheels1 = {
//     bike: 2,
//     auto: 3,
//     car: 4
// }

// let numberOfWheels2 = {
//     bike: 2,
//     auto: 3,
//     car: 4
// }
// numberOfWheels2.car = 9
// console.log(numberOfWheels1 == numberOfWheels2)
// console.log(numberOfWheels1)
// console.log(numberOfWheels2)

// CAN we have two or multiple references to the same object?

const numberOfWheels3 = {
    bike: 2,
    auto: 3,
    car: 4
}

const numberOfWheels4 = numberOfWheels3

numberOfWheels4.car = 8
console.log(numberOfWheels3)
console.log(numberOfWheels4)

console.log(numberOfWheels3 == numberOfWheels4)

// In Javascript even after declaration we can change the structure of the object

numberOfWheels4.truck = 8 // fixed in typescript
console.log(numberOfWheels3)
delete numberOfWheels4.bike

console.log(numberOfWheels3)
