const abc = {
    p: 100, q: true, r: "hfh", x: function(){}
}
/*
abc  -> reference of the object
{} -> body of object
p, q, r -> keys or fields of objects
100, 76, 9 -> values of the object it could be any  thing
mapping of fields with values
*/
console.log(abc.p)
/*
 {
    $xz: 90, 3abc: 676, &ddk&: 700
 } 
*/
const newAObject = {
    "$xz": 90, "3abc": 676, "&ddk&": 700, pl: 800
} 
console.log(newAObject["3abc"], newAObject.pl, newAObject["pl"])


const address = {
    line1: "234 Block C",
    line2: "XYZ Area",
    city: "New Delhi",
    state: "Delhi",
    pincode: '110045'
}

console.log(address.city)