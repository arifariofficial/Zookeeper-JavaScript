const readline = require("readline");

// Definition of the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Split the input string into an array
  let numbers = input.split(" ");

  // Assign each number to the respective variable
  let a = parseInt(numbers[0]);
  let b = parseInt(numbers[1]);
  let c = parseInt(numbers[2]);

  // Write your code here using the a, b, and c variables. Remember to handle the case when c equals to zero
  if (c !== 0) {
    let result = (a + b) / c;
    console.log(result);
  }
  // Close the readline interface
  rl.close();
});
