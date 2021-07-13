// jims crazy loop
var sum = 0;
var divByI = null;
var end = 10;
// For loops: Keyword, ( initial condition; break condition; itereator ){ code block }
for(let i = 0; i<=end; i++){
    console.log(i);
    sum += i;
    console.log("Currently i is: " + i + ", and the sum is: " + sum);
    divByI = sum / i;
    console.log("The sum divided by i is: " + divByI);
}

// FUNCTIONS are a two part process
// step one: define the function
// step two: calling the function

// DEFINING THE FUNCTION keyword functionName ( opional parameters ) { code block }
function countTo50(){
    //CODE BLOCK
    for(let i = 0; i <= 50; i++){
        console.log(i);
    };
};

// CALLING THE FUNCTION  function name ()
countTo50();
console.log("hey how are you");
countTo50();
console.log("im goood how about you???");
countTo50();


// BASIC MATH FUNCTIONS

// Static Addition
function add(){
    let sum = 2+5;
    console.log(sum)
};

// Dynamic Addition | Subtraction | Multiplication | Division
// creating parameters
function add( num1, num2 ){
    let sum = num1+num2;
    console.log(sum)
}
function sub( num1, num2 ){
    let sum = num1-num2;
    console.log(sum)
}
function mult( num1, num2 ){
    let sum = num1*num2;
    console.log(sum)
}
function divd( num1, num2 ){
    let sum = num1/num2;
    console.log(sum)
}
// passing in arguments
add(2, 13);
add(7, 63);

// CALCULATOR
function calc(num1, operator, num2){
    if(operator == "+"){
        add(num1,num2);
    } else if( operator == "-"){
        sub(num1, num2)
    } else if (operator == "*"){
        mult(num1, num2)
    } else if(operator == "/"){
        divd(num1, num2)
    } else {
        console.log("hey come on now use an operator: ex: '+', '-', '*', '/'")
    }
}

calc(10,"/", 5)
calc(10,8, 5)

// THIS AFTERNOON WE WILL DISCOVER WHY THIS WONT WORK!!!
calc(calc(5,'+',10), '*', calc(175, "/", 30))