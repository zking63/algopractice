function Sigma(num){
    var sum = 0;
    for (var i = 0; i < num +1; i++)
    if (i > 0){
        sum = sum + i;
    }
    return sum;
}
var answer = Sigma(3);
console.log(answer);