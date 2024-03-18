let A=[50, 107, 'jack', 83, 'killer','son', true];


//1.Just show the strings in a new array?

let strings = A.filter(y=> typeof y ==='string');
console.log ("Showing strings in a new array:",strings);

//2.Create a new array from the numbers and short them?

 let numbers = A.filter(item => typeof item ==='number').sort((a, b) => a - b);
console.log ("Creating a new array from the numbers and shorting them into rows:", numbers);

//3.Make the sting array reverse?

let reversed_strings = strings.reverse();
console.log ("the string array is reversed:", reversed_strings);

//4.Cobine both array of numbers and strings?

let combine = numbers.concat(strings);
console.log("after both arrays are combined:", combine);

//5.Delelet 3 items from the 6th item from the combined array?

combine.splice(5, 3);
console.log("Deleteing 3 items from the 6th item from the combined array:", combine);

//6.Show elements from a which is less than 100?

let less_than_100 = A.filter(item => typeof item === 'number' &&item<100);
console.log ("showing the elemts which are less than 100:", less_than_100);

//7.From string array remove the last letter and add word 'str' before each of them?

let modified_strings = strings.map(item => item.slice(0, -1) + 'str');
console.log("showing the result after modification:", modified_strings);