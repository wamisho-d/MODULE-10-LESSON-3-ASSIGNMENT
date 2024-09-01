// Question 1 Task: Obtaining String Length.
let message = "Hello, World!";
let messageLength = message.length;
console.log("Length of the string:", messageLength); // Output: 13

// Task 2: Converting Cases
let text = "Hello, World!";
let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();
console.log("Uppercase:", upperText); // Output: "HELLO, WORLD!"
console.log("Lowercase:", lowerText); // Output: "hello, world!"

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
let substring1 = sentence.substring(4, 9); // Extract "quick"
let substring2 = sentence.substring(16, 19); // Extract "fox"
console.log("Extracted substring 1:", substring1); // Output "quick"
console.log("Extracted substring 2:", substring2 ); // Output "fox"

// Task 4: Splitting Strings
let word = sentence.split(" ");
console.log("Splitted words:", words);
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
