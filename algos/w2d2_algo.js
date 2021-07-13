// Array: Largest
// Write a function that, given an array, returns the largest element of that array. Given [42, 1, 4, 50, Math.PI, 7, 60], return 42. If the array is too short, return null.

// PSEUDOCODE - GAME PLAN IN ENGLISH

// 1. Create a function named largest that takes in an array (arr) as input.
// 1.5 Create a variable called largestNum and set its value to arr[0].
// 2. Create a for loop that starts i at 0, ends at arr.length and increments by one.
// 3. Inside the for loop, check to see if the current value (arr[i]) is larger than   largestNum.
// 4. If the current value is larger, make it the new largestNum.
// 5. After the for loop, return largestNum.

function largest(arr){
  if(arr.length == 0) {
    return null;
  }
  else {
    var largestNum = arr[0];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > largestNum){
        largestNum = arr[i];
      }
    }
    return largestNum;
  }
}

console.log(largest([42, 1, 4, 50, Math.PI, 7, 60]));

// OVER BREAK:
// Try the second largest algorithm challenge.

// Array: Second-Largest
// Write a function that, given an array, returns the second-largest element of that array. Given [42, 1, 4, Math.PI, 7], return 7. If the array is too short, return null.