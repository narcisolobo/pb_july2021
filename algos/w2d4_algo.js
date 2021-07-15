// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

// PSEUDOCODE!!

// create a function named alwaysHungry that takes in an array
function alwaysHungry(arr) {
  // create a boolean flag to track if I'm hungry
  var amHungry = 1;
  // create a for loop to inspect each element in the array
  for (var i = 0; i < arr.length; i++){
    // check each element if equal to 'food'
    if(arr[i] == 'food') {
      // if equal to 'food,' print 'yummy'
      console.log('yummy');
      // toggle flag to false - I'm no longer hungry
      amHungry = 0;
    }
  }
  // after loop, check if I'm still hungry
  if(amHungry) {
    // if I'm still hungry, print 'I'm hungry'
    console.log('I\'m hungry');
  }
}

alwaysHungry(['book', 'ukulele', 'snare drum'])