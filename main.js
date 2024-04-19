//Lucas Brinks
//4/19/24
//JS Simple Calculator

//imput
const firstNum = parseInt(prompt('Enter first number'));
const secondNum = parseInt(prompt('Enter second number'));

//process

//addition
const add = firstNum+secondNum;

//subtraction
const sub = firstNum-secondNum;

//Multiplication
const mult = firstNum*secondNum;

//divison
const div = firstNum/secondNum;

const addstring = `${firstNum} + ${secondNum} = ${add}`;
const substring = `${firstNum} - ${secondNum} = ${sub}`;
const multstring = `${firstNum} * ${secondNum} = ${mult}`;
const divstring = `${firstNum} / ${secondNum} = ${div}`;

//output
console.log('Lucas Brinks')
console.log('4-19-2024')
console.log('Simple Calcutor')
console.log(addstring)
console.log(substring)
console.log(multstring)
console.log(divstring)