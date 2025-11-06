const armstrongNumber = (n) => {
    let digits = n.toString().split('').map(Number);
    let totalDigitsLength = digits.length;
    let sum = 0;
    for (let index = 0; index < totalDigitsLength; index++) {
        let element = digits[index];
        let rootValue = element ** totalDigitsLength;
        sum += rootValue;
    }
    return sum === n;
}

console.log(armstrongNumber(153));
