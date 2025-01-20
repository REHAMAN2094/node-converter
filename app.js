const readline = require('readline');

// Set a fixed exchange rate for INR to USD
const exchangeRate = 0.012; // Example: 1 INR = 0.012 USD

// Create the readline interface for CLI input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert INR to USD
function convertINRtoUSD(inrAmount) {
  const usdAmount = inrAmount * exchangeRate;
  return usdAmount.toFixed(2); // Fix the result to 2 decimal places
}

// Function to ask the user for input
function askQuestion() {
  rl.question('Enter amount in INR (or type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Exiting the application...');
      rl.close();
    } else {
      const inrAmount = parseFloat(input);
      if (isNaN(inrAmount) || inrAmount <= 0) {
        console.log('Please enter a valid number greater than 0.');
      } else {
        const usdAmount = convertINRtoUSD(inrAmount);
        console.log(`${inrAmount} INR is equivalent to ${usdAmount} USD.`);
      }
      // Ask again after processing
      askQuestion();
    }
  });
}

// Start the conversation
askQuestion();
