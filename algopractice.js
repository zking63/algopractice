function Sigma(num){
    var sum = 0;
    for (var i = 0; i < num +1; i++)
    if (i > 0){
        sum = sum + i;
    }
    return sum;
}
var answer = Sigma(4);
console.log(answer);

function factorial(num2){
    mult = 1;
    for (var j = 0; j < num2 +1; j++)
    if (j > 0){
        var mult = mult * j;
    }
    return mult;
}
var answer2 = factorial(5);
console.log(answer2);

function generatecoinchange(cents){
    penny = 0;
    nickel = 0;
    dime = 0;
    quarter = 0;
    remainingChange = cents;
    while (remainingChange >= 25) {
        remainingChange -= 25;
        quarter++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        dime++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        penny++;
    }
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
};
generatecoinchange(91);

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(7);
    var die1 = Math.floor(Math.random() * (max - min) + min);
    var die2 = Math.floor(Math.random() * (max - min) + min);
    var roll = 0;
    while (die1 != die2){
        roll++;
        die1 = Math.floor(Math.random() * (max - min) + min);
        die2 = Math.floor(Math.random() * (max - min) + min);
    }
    if (die1 == die2) {
        roll++;
        return [die1, die2, roll];
    }
  }
var answer = getRandomInt();
console.log(answer);

function sumdigits(num) {
    sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.trunc(num/10);
    }
    return sum;
}
var sum2 = sumdigits(1021000000007); 
console.log(sum2);