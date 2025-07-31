// n = 234
const addFirstNumbert = (n) => {
    let curentNum = n;
    let iterationCount = 0;
    let getCurrentFirstNum = (n) => {
        let numString = JSON.stringify(n).split('').shift();
        return JSON.parse(numString);
    }

    while (curentNum > 0) {
        if (curentNum === 0) break;
        let curentFirstDigit = getCurrentFirstNum(curentNum);
        curentNum -= curentFirstDigit;
        iterationCount++;
    }
    console.log('iterationCount :-  ', iterationCount, 'curentNum :- ', curentNum);

    return iterationCount;
}

console.log(addFirstNumbert(245));
