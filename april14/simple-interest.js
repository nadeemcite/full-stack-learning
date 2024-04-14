principle = 1000
rate = 8
time = 5

simpleInterest = principle * rate * time / 100
amount = principle + simpleInterest
msg = "Interest for principle amount " + principle + " for " + rate + "% in " + time + " years is " + simpleInterest + ", total amount = " + amount
console.log(msg) 