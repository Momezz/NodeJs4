function add(value1,value2){
    return value1+value2;
}

function subtract(value1,value2){
    return value1-value2;
}

function multiply(value1,value2){
    return value1*value2;
}

function divide(value1,value2){
    if(value2===0){
        return console.log("error")
    }else{
        return value1/value2;
    }
}

module.exports={
    add,
    subtract,
    multiply,
    divide
}