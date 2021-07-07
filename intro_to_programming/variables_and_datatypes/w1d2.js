// DATA TYPES
// Numbers
var myNum = 0;
// Strings
var myStr = "10";
// Bool
var isTired = true;
// 
console.log(myNum, myStr, isTired)
console.log(typeof myNum, typeof myStr, typeof isTired)


// CONDITIONALS
var x = 5;
//keyword  |   condition evaluates to either true or false
if(x == 4){
    // code block
    // something happens
    console.log("hurrraaayyy its true")
} else {
    console.log("oh nooooooo its false")
}

if(isTired){
    console.log("hello world")
} else {
    console.log("not today")
}


var isRaining = false;
var isCold = false;
var isWindy = false;

if (!isRaining && !isCold && !isWindy){
    console.log("enjoy a beautiful day");
}

if(isRaining) {
    console.log("dont forget an umbrella")
} 
if(isCold){
    console.log("dont forget a jacket")
} else if(isWindy){
    console.log("dont forget a wind breaker")
} 

// OPERATORS
// == compairs if two values are equal 
if( 2 == 2){
    console.log("this is true")
}
// != checks to see if two values are NOT equal
if (2 != 3){
    console.log("this is also true")
}
// > checks to see if the left value is greater than the right value
if (2 > 1){
    console.log("this is true")
}
// < checks to see if the left value is less than the right value
if (2 < 5){
    console.log("this is true")
}
// >= , <= checks to see if the left value is greater or less than the right value