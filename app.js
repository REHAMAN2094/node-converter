const readline = require('readline');

const exchangeRate = 0.012; 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function convertINRtoUSD(inrAmount) {
  const usdAmount = inrAmount * exchangeRate;
  return usdAmount.toFixed(2); 
}


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
      
      askQuestion();
    }
  });
}


askQuestion();
