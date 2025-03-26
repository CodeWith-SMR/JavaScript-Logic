// 🔹 Exercise 2: Conditions (if-else, else if)

// (Solution Code)

let marks = 95;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80 && marks < 90) {  // `marks < 90` hona chahiye
    console.log("Grade: A");
} else if (marks >= 70 && marks < 80) {  // `marks < 80` hona chahiye
    console.log("Grade: B"); 
} else if (marks >= 60 && marks < 70) {  // `marks < 70` hona chahiye
    console.log("Grade: C"); 
} else if (marks >= 50 && marks < 60) {  // `marks < 60` hona chahiye
    console.log("Grade: D"); 
} else if (marks < 50 && marks >= 0) {   // `marks < 50` hona chahiye
    console.log("Fail 😢"); 
} else {
    console.log("Enter valid marks (0-100)");
}


Output
// Input (marks)
// 95	Grade: A+
// 90	Grade: A+
// 85	Grade: A
// 75	Grade: B
// 65	Grade: C
// 55	Grade: D
// 45	Fail 😢
// -10	Enter valid marks (0-100)
// 110	Enter valid marks (0-100)