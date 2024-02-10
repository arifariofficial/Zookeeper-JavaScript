const readline = require("readline");

/* Read input from command line/console */
const inputReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputReader.on("line", (input) => {
  /* Create your arrow function below and use it to calculate the factorial of the input */
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  // Don't forget to print the result to the console using console.log()
  console.log(factorial(input));

  // Once done, remember to close the inputReader using inputReader.close()
  inputReader.close();
});

inputReader.on("close", () => {
  process.exit(0);
});
