// ARRAYS and stuff!!!

var myStr = "hello world";
var myNum = 78;
var isTired = true;

// what happens when you need more than one variable?
var num1 =10, num2 = 4, num3 = 7, num4 = 120, num5 = 75;
var max = 0;
// How do you find the largest number?
// this is where Array's come to the rescue

var myArr = [10,4,7,120,75];
// console log the 3rd piece of date
console.log(myArr[2])
//  change the 7 to the string Dojo
myArr[2]= "Dojo";
console.log(myArr)

// mixed datatype array
var arr2 = [23,39, "hello", "world", true, 24, [1,2,3,4,5,[9,8,7,6]], "goodbye", 3]
// how do you access the number 3?
console.log(arr2[6][5][1])
//display the last piece of data in the array
console.log(arr2.length)
// get the start and end data of an array
console.log(arr2[0], arr2[arr2.length-1])

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])
console.log(arr2[3])

for(var i = 0; i<arr2.length; i++){
    console.log(arr2[i])
}

for(var i = arr2.length-1;i>=0; i--){
    console.log(arr2[i])
}

// now lets search 
var arr3 = [26, 39, "hello", "world", true, 24, [1,2,3,4,5], "goodbye"]
function searchArr(arr, query){
    //pass in an array and something to search for
    for(var i = 0; i<arr.length; i++){
        if(arr[i]==query){
            return true
        }
    }
    console.log(query + " was not found!")
    return false
}

console.log(searchArr(arr3, "bananas"))