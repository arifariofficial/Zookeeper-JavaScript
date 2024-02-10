// Required library for handling console input/output
const readline = require("readline");

// Using the readline library to create interface for console input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// This function will be called when the user provides input
rl.on("line", (input) => {
  let numCount = 0;
  let letterCount = 0;

  for (let i = 0; i < input.length; i++) {
    // Loop through each character in the input string
    if (!isNaN(input[i]) && input[i] !== " ") {
      numCount++;
    } else if (input[i] >= "a" && input[i] <= "z") {
      letterCount++;
    }
  }

  console.log(numCount + " " + letterCount);

  // Finally, close the interface for clean-up
  rl.close();
});
