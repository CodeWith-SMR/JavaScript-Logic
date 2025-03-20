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
})



