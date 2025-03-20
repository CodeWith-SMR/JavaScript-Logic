const numbers = [10, 20, 30, 40];
numbers.forEach((number) => {
  console.log(number + 10);
});


const fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((print) => {
  console.log(print)
});


const students = [
    { name: "Ali", marks: 85 },
    { name: "Aisha", marks: 92 },
    { name: "Raza", marks: 78 },
    { name: "Sara", marks: 90 }
];
students.forEach((student) => {
  console.log(`${student.name} scored ${student.marks} marks.`);
});


const numArray = [10, 15, 20, 25, 30, 35, 40];
numArray.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});


const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
products.forEach((product) => {
  console.log(`Product: ${product.name} Price: ${product.price}`)
});


const nums = [3, 6, 9, 12, 15, 18, 21, 24];
nums.forEach((evenOdd) => {
  console.log(`${evenOdd} is ${evenOdd % 2 === 0 ? "Even" : "Odd"}`)
});


const words = ["JavaScript", "React", "Node", "MongoDB"];
words.forEach((word) => {
  console.log(`Word: ${word} Length: ${word.length}`)
});


const names = ["ali", "aisha", "raza", "sara"];
names.forEach((Uppercase) => {
  console.log(Uppercase.toUpperCase())
});


const students1 = [
    { name: "Ali", marks: 85 },
    { name: "Aisha", marks: 92 },
    { name: "Raza", marks: 78 },
    { name: "Sara", marks: 90 }
];
students1.forEach((grade) => {
  if(grade.marks >= 90) {
    console.log(`${grade.name} got Grade A`);
    }else if(grade.marks >= 80) {
    console.log(`${grade.name} got Grade B`);
    }else if(grade.marks >= 70) {
    console.log(`${grade.name} got Grade C`);
    }else if(grade.marks >= 60) {
    console.log(`${grade.name} got Grade D`);
    }else if(grade.marks >= 50) {
    console.log(`${grade.name} got Grade F`);
    }else{
    console.log("Enter valid marks");
    }
});


const emails = ["user1@gmail.com", "user2@yahoo.com", "user3@gmail.com", "user4@outlook.com"];
emails.forEach((email) => {
  if(email.endsWith("@gmail.com")) {
    console.log(`${email} is a valid Gmail address.`);
  }else if(email.endsWith("@yahoo.com")) {
    console.log(`${email} is NOT a Gmail address.`);
  }else if(email.endsWith("@outlook.com")) {
    console.log(`${email} is NOT a Gmail address.`);
  }
})
