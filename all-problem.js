// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:Input: "hello" Output: "olleh"
let text = "hello";
let reversed ="";
for(let chr of text) {
    reversed = chr + reversed;
}
// let reversed2 = text.split("").reverse().join("")
console.log( reversed)



// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example:Input: "programming" Output: 3

let word = "programming";
let vowels = ["a" , "e", "i", "o", "u"];
let vowelsNumbers = 0;
for(let letter of word) {
       if(vowels.includes(letter)){
        vowelsNumbers++;
       }
}
console.log(vowelsNumbers)
