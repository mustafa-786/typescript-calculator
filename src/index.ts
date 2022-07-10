import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

const  main = ():void => {
 
   const firstString:string = question('Enter first number \n');
   const operator:string = question('Enter operator \n');
   const secondString:string = question('Enter second number \n');

   const validInput:boolean = isNumber(firstString) && isNumber(secondString) && isOperator(operator);

   if(validInput){
    const firstNum:number= parseInt(firstString);
    const secondNum:number = parseInt(secondString);
    const result =calculator(firstNum,operator as Operator, secondNum);
    console.log(result)
   } else {
      console.log('\n invalid input \n')
      main()
   }
}

const isNumber = (str:string):boolean=>{
   const maybeNum = parseInt(str) //33 nan
   const isNum:boolean = !isNaN(maybeNum)
   return isNum 
}

const calculator =(firstNum:number, operator:Operator, secondNum:number)=>{
   switch(operator){
      case '+':
         return firstNum + secondNum;
      case '-':
         return firstNum - secondNum;
      case '*':
         return firstNum * secondNum;
      case '/':
         return firstNum / secondNum;
   }
}

const isOperator = (operator:string):boolean =>{
   switch(operator){

      case '+':
      case '-':
      case '*':
      case '/':
         return true
      default:
         return false
   }
}
main()




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