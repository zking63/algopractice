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
    penny = 1;
    nickle = 5;
    dime = 10;
    quarter = 25;
    for (var p = 0; p < cents +1; p++){
        if(cents % quarter == 0){
            final = cents/quarter
            return final;
        }
        else{
            final =  Math.trunc(cents/quarter)
                if(final % dime == 0){
                    final = final + (final/dime)
                    return final;
                }
                else{
                    final = final + Math.trunc(final/dime)
                    return final;
                }
            }
        }
    }
    return final;
}

var answer3 = generatecoinchange(35);
console.log(answer3);