"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var main = function () {
    var firstString = readline_sync_1.question('Enter first number \n');
    var operator = readline_sync_1.question('Enter operator \n');
    var secondString = readline_sync_1.question('Enter second number \n');
    var validInput = isNumber(firstString) && isNumber(secondString) && isOperator(operator);
    if (validInput) {
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculator(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input \n');
        main();
    }
};
var isNumber = function (str) {
    var maybeNum = parseInt(str); //33 nan
    var isNum = !isNaN(maybeNum);
    return isNum;
};
var calculator = function (firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
};
var isOperator = function (operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
};
main();
/////////////////////////////////////////
// const isNumber = (check_num: number): boolean => {
//   const num = !isNaN(check_num);
//   return num;
// };
// const isOperator = (operator:any):any =>{
//    switch(operator){
//        case '+':
//        case '-':
//        case '*':
//        case '/':
//            return true 
//        default:
//             return false    
//    }
// }
// const num1: string = question("Enter the first number\n");
// const operator= question("Enter the operator\n");
// const num2: string = question("Enter the second number\n");
// const num1_parse:number =parseInt(num1)
// const num2_parse:number =parseInt(num2)
// if(!(isNumber(num1_parse) || isNumber(num1_parse))){
//   console.log('Please enter only number ')             
// } else{
// }
// if(operator==='+'){
//   const sum= num1_parse +num2_parse            
//   console.log(sum)
// } else if(operator==='-'){
//    const sum =num1_parse - num2_parse
//    console.log(sum)
// } else if(operator==='*'){
//    const sum =num1_parse * num2_parse
//    console.log(sum)
// } else if(operator==='/'){
//    const sum =num1_parse / num2_parse
//    console.log(sum)
// } else{
//    console.log('please enter a valid operator')            
// }
//////////////////////////////////////
