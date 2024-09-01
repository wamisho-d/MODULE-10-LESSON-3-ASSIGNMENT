// Question 1 Task 1:  Adding and Removing Elements.
let fruits = ['apple', 'banana', 'ornage'];

//Adding a new element to the end of the array
fruits.push('strawberry');
console.log('after push:', fruits); // Output: ['apple', 'banana', 'strawberry', 'strawberry']

// Removing the last element from the array
let removedFruit = fruits.pop();
console.log('After pop:', fruits); // Output: ['apple', 'banana', 'orange']
console.log('Removed fruit:', removedFruit); // Output: 'strawberry'

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order
numbers.sort((a,b) => a - b);
console.log('Sorted numbers:', numbers);  // Output: [1, 2, 3, 4, 5]


// Task 3: Applying Array Methods
let moreNumbers = [3, 1, 5, 2, 4]

// Doubling each number in the array using map
let doubledNumbers = moreNumbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers); // Output: [6, 2, 10, 4, 8]

// Filtering out even numbers using filter
let oddNumbers = moreNumbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers); // Output: [3, 1, 5]

// Calcualte the sum of all numbers using reduce
let sumOfNumbers = moreNumbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sumOfNumbers); // Output: 15
