// Loops, what are they and how do you even do them?
// Keep your code DRY!!!
// Don't Repeat Yourself

// 1. Sentry
// 2. Where it starts
// 3. How it stops
// 4. How it changes

console.log("All integers from 1 to 10")

for (var i = 1; i <= 10; i++) {
  console.log(i)
}

// 1. created i and assigned 1 to it
// 2. is i less than or equal to 10?
// 3. if true, execute code block
// 4. after code block perform incrementation
// 5. repeat steps two through four until boolean is false

console.log("All integers from 0 to 255")

for(var i = 0; i <= 255; i++) {
  console.log(i)
}

console.log("All odd integers from 1 to 255")

for(var i = 1; i <= 255; i+=2) {
  console.log(i)
}

console.log("All integers from 50 to 0")

for(var i = 50; i >= 0; i--) {
  console.log(i)
}

console.log("All integers from 25 to -25")

for (var i = 25; i >= -25; i--) {
  console.log(i)
}

// We don't always have to increment the sentry, we can also decrement or even skip numbers.
// Pay attention to the boolean and make sure it's correct.
// Decrementation does not have to stop at zero. Negative numbers are cool.

// % - Modulo or Modulus Operator
// Returns the remainder of the first value divided by the second value.

console.log(11 % 2 == 0)

console.log("All odd integers from 1 to 255 with modulo")

for(var i = 1; i <= 255; i++) {
  // We have to check if i is odd
  if(i % 2 != 0){
    console.log(i)
  }
}

// While Loops
// All four requirements of a loop must be present

console.log("Print 1 to 10 with a while loop")
var num = 1
while(num <= 10) {
  console.log(num)
  num++
}

// Rule of thumb - for loops are for when you know how many times your loop will run and while loops are for when you do not.

// CHALLENGE:
// Rewrite all previous for loops as while loops.

//6

console.log(11 % 2 == 0)

console.log("All odd integers from 1 to 255 with modulo")

for(var i = 1; i <= 255; i++) {
  // We have to check if i is odd
  if(i % 2 != 0){
    console.log(i)
  }
}


//with While


console.log(11 % 2 == 0)

console.log("All odd integers from 1 to 255 with modulo")
var num = 1
while(num <= 255) {
  if(num % 2 != 0) {
    console.log(num)
    console.log("we have found an odd integer")
  }
  num++
}