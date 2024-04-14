principle = 1000
rate = 8
time = 5

amount = principle * ((1 + rate / 100) ** time)
compundInterest = amount - principle
msg = `Interest for principle amount ${principle} for ${rate}% in ${time} years is ${compundInterest}, total amount = ${amount}`
console.log(msg) 