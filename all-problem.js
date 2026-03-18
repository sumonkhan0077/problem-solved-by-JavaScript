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



// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

let palindromeWord = "madam";

let reverseWord = palindromeWord.split('').reverse().join('');
if(palindromeWord === reverseWord){
    console.log(true)
}
else{
    console.log(false)
}



// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
// Example:
// Input: [5, 1, 9, 3]
// Output: 9
const arrayNum =[5, 1, 9, 3];
let maxNumber = arrayNum[0];

for(let num of arrayNum) {
    if(num > maxNumber) {
        maxNumber = num;
    }
}
console.log(maxNumber)



// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 1]
// Output: [1, 2, 3, 4]
const numbers = [1, 2, 2, 3, 4, 4, 1];
let singelNumbers =[];
for(let number of numbers) {
    if(!singelNumbers.includes(number)) {
        singelNumbers.push(number)
        // singelNumbers = [...singelNumbers, number]
    }
}
console.log(singelNumbers)


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10
const sumNumber = [1, 2, 3, 4,]
let sum=0;
for(let num of sumNumber) {
        sum= sum + num;
}
console.log(sum)


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
const numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
for (let num of numbers) {
  num % 2 === 0 && evenNumbers.push(num);
}
console.log(evenNumbers);



// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
// Example:
// Input: "hello world"
// Output: "Hello World"

const sentence = "hello world hi";
let capiSen = "";

const sem = sentence.split(" ")
for(let se of sem ) {
    capiSen += se[0].toUpperCase() + se.slice(1) + " ";
}
console.log(capiSen)



// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
// Example:
// Input: 5
// Output: 120

const number = 5;
let result = 1;
for (let i = 1; i <= number; i++  ){
       result= result * i ;
}
console.log(result)



// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:
// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

function PingPong(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

const num = 40;
PingPong(num);

// usestate ar funtion 

function UseState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    render(); 
  }

  function getState() {
    return state;
  }

  return [getState, setState];
}

function render() {
  console.log("Count:", count());
}

const [count, setCount] = UseState(0);

render();        // Count: 0
setCount(1);     // Count: 1



// object add, show, delete 
const user = {userName: "sumon", email:"sumonbd0077@gmail.com", password: 123456}

let newUser = "fahim"
// newUser = user.userName 
user.userName = newUser
delete user.password

console.log(Object.values(user))
console.log(user.userName)
console.log(Object.keys(user))
console.log(Object.entries(user));

for (let value in user) {
  console.log(user[value]);
}


// let text = "JavaScript is a powerful programming language";
// sentence থেকে সবচেয়ে বড় (longest) word বের করো
// যদি একাধিক word একই length এর হয় → প্রথমটা return করবে
// word-এর length ও দেখাবে
// Output:
// Word: programming
// Length: 11

let text = "JavaScript is a powerful programming  language";

let textslit = text.split(' ')
let bigWord = '';
let maxLength = 0;
for (let tex of textslit) {
    if(bigWord.length < tex.length) {
      bigWord=tex
      maxLength=tex.length
    }
}
console.log(bigWord , maxLength) 



// price card problem

const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoes", price: 1200, quantity: 2 }
];
// let price = 0;

// for (let product of cart ) {
//    price = price + product.price * product.quantity
   
// }
const originalTotal = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);


const price = cart.reduce((sum , item)=> {
    let itemTotal = item.price * item.quantity

    let extraDiscount = 0;

    if (item.quantity >= 2 ) {
         extraDiscount= itemTotal * .05
    }
     console.log(`${item.name}: price: ${itemTotal} -> after discount: ${itemTotal- extraDiscount}`)
       return sum = (itemTotal - extraDiscount)  + sum
},0)

// main discount
let totalPrice = price;
if (price > 1000) {
   discount= price * .10
   totalPrice = price - discount
}

console.log("Total Price:",originalTotal)
console.log("Final price:", totalPrice)




// pass fail problem
const students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 42 },
  { name: "Jamal", marks: 73 },
  { name: "Sakib", marks: 30 }
];

// average
const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
const average = totalMarks / students.length;

// pass count
const passCount = students.filter(s => s.marks >= 40).length;

// fail names
const failStudents = students
  .filter(s => s.marks < 40)
  .map(s => s.name);

console.log("Average:", average);
console.log("Pass:", passCount);
console.log("Fail Students:", failStudents);