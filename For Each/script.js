// forEach.js

// 1️⃣ Adding 10 to each number in the array
// This loop iterates over each number and adds 10, then logs the result.
const numbers = [10, 20, 30, 40];
numbers.forEach((number) => {
  console.log(number + 10);
});


// 2️⃣ Printing each fruit from the array
// This loop simply prints each fruit name.
const fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((print) => {
  console.log(print);
});


// 3️⃣ Displaying student names with their marks
// This loop iterates over student objects and prints their marks.
const students = [
    { name: "Ali", marks: 85 },
    { name: "Aisha", marks: 92 },
    { name: "Raza", marks: 78 },
    { name: "Sara", marks: 90 }
];
students.forEach((student) => {
  console.log(`${student.name} scored ${student.marks} marks.`);
});


// 4️⃣ Printing only even numbers from an array
// This loop checks if a number is even before printing it.
const numArray = [10, 15, 20, 25, 30, 35, 40];
numArray.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});


// 5️⃣ Printing product names with prices
// This loop iterates over each product object and prints the details.
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
products.forEach((product) => {
  console.log(`Product: ${product.name} Price: ${product.price}`);
});


// 6️⃣ Printing words with their lengths
// This loop logs each word with its length.
const words = ["JavaScript", "React", "Node", "MongoDB"];
words.forEach((word) => {
  console.log(`Word: ${word} Length: ${word.length}`);
});


// 7️⃣ Checking if numbers are even or odd
// This loop prints whether each number is even or odd.
const nums = [3, 6, 9, 12, 15, 18, 21, 24];
nums.forEach((evenOdd) => {
  console.log(`${evenOdd} is ${evenOdd % 2 === 0 ? "Even" : "Odd"}`);
});


// 8️⃣ Converting names to uppercase
// This loop converts each name to uppercase and prints it.
const names = ["ali", "aisha", "raza", "sara"];
names.forEach((Uppercase) => {
  console.log(Uppercase.toUpperCase());
});


// 9️⃣ Assigning grades based on student marks
// This loop categorizes students based on their marks and prints the grade.
const students1 = [
    { name: "Ali", marks: 85 },
    { name: "Aisha", marks: 92 },
    { name: "Raza", marks: 78 },
    { name: "Sara", marks: 90 }
];
students1.forEach((grade) => {
  let result = grade.marks >= 90 ? "A" : 
               grade.marks >= 80 ? "B" : 
               grade.marks >= 70 ? "C" : 
               grade.marks >= 60 ? "D" : "F";
  console.log(`${grade.name} got Grade ${result}`);
});


// 🔟 Checking if emails are Gmail addresses
// This loop determines if an email belongs to Gmail or not.
const emails = ["user1@gmail.com", "user2@yahoo.com", "user3@gmail.com", "user4@outlook.com"];
emails.forEach((email) => {
  console.log(`${email} is ${email.endsWith("@gmail.com") ? "a valid Gmail address." : "NOT a Gmail address."}`);
});


// 1️⃣1️⃣ Printing the multiplication table of 5
// This loop prints the table of 5 up to 10.
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Numbers.forEach((number) => {
  console.log(`5 x ${number} = ${number * 5}`);
});
