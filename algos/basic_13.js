// Print 1-255
// Print1To255()
// Print all the integers from 1 to 255

function print1To255() {
  for (var i = 1; i < 256; i++) {
    console.log(i)
  }
}

console.log('PRINT 1 TO 255')
print1To255()

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

function printOdds1To255() {
  for (var i = 1; i < 256; i+=2) {
    console.log(i)
  }
}
console.log('PRINT ODDS 1 TO 255')
printOdds1To255()

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i < 256; i++){
    sum += i; // sum = sum + i
    console.log(i + " " + sum)
  }
}

console.log('printIntsAndSum0To255')
printIntsAndSum0To255()

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

function printArrayVals(arr){
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printArrayVals([5, "run", true, "narciso"])

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

function printMaxOfArray(arr) {
  var max = arr[0]
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i]
    }
  }
  console.log(max)
}

printMaxOfArray([5, 1, 77, 23, 99, 1, 5.5])

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

function getAverage(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
}

getAverage([1, 2, 3, 4])