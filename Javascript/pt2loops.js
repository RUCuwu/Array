let payment = 4;
let cost = 10;
let quarters = .25;
let change = payment - cost;

while(cost < 10) {
    payment -=(change)
}



console.log("Your change will be: $" ,cost-payment)
console.log("You will receive" ,cost-quarters/payment, " quarters")