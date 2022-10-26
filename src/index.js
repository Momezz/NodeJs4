const operations = require('./operation');

const operationsData = {
    add: [
        {
            user: 'user1',
            value1: 10,
            value2: 20,
        },
        {
            user: 'user2',
            value1: 30,
            value2: 40,
        },
        {
            user: 'user3',
            value1: 50,
            value2: 60,
        }
    ],
    subtract: [
        {
            user: 'user1',
            value1: 30,
            value2: 20,
        },
        {
            user: 'user2',
            value1: 40,
            value2: 30,
        },
        {
            user: 'user3',
            value1: 50,
            value2: 40,
        }
    ],
    multiply: [
        {
            user: 'user1',
            value1: 10_500,
            value2: 20_340,
        },
        {
            user: 'user2',
            value1: 30_500,
            value2: 40_340,
        },
        {
            user: 'user3',
            value1: 50_500,
            value2: 60_340,
        },
    ],
    divide: [
        {
            user: 'user1',
            value1: '2000',
            value2: '100',
        },
        {
            user: 'user2',
            value1: '3000',
            value2: 5,
        },
        {
            user: 'user3',
            value1: '5000',
            value2: 10,
        },
    ],
}

//Metohod to add;

let sumData = operationsData.add;
let sumResultData = sumData.map(item => {
    return {
        user: item.user,
        result: operations.add(item.value1, item.value2)
    }
})
let result = {
    add: sumResultData
}
console.log(result);

//Metohod to substract;

let subtData = operationsData.subtract;
let subtResultData = subtData.map(item => {
    return {
        user: item.user,
        result: operations.subtract(item.value1, item.value2)
    }
})
let resultSubt = {
    subtract: subtResultData
}
console.log(resultSubt);

//Metohod to multipy;

let multData = operationsData.multiply;
let multResultData = multData.map(item => {
    return {
        user: item.user,
        result: operations.multiply(item.value1, item.value2)
    }
})
let resultmultiply = {
    multiply: multResultData
}
console.log(resultmultiply);

//Metohod to divide;

let divideData = operationsData.divide;
let divideResultData = divideData.map(item => {
    return {
        user: item.user,
        result: operations.divide(item.value1, item.value2)
    }
})
let resultDivide = {
    divide: divideResultData
}
console.log(resultDivide);