function checkPositiveNegative(number) {
  if(number > 0) {
    console.log("is positive");
  }else if(number < 0) {
    console.log("is negative");
  }else{
    console.log("is zero");
  }
}

checkPositiveNegative(5); // Output: is positive
checkPositiveNegative(-10); // Output: is negative
checkPositiveNegative(0); // Output: is zero