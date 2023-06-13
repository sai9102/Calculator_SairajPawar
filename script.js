let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function clearText() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    let result;
    
    // Evaluate exponentiation and modulus separately
    expression = expression.replace(/(\d+(\.\d+)?)(\^)(\d+(\.\d+)?)/g, function(match, num1, decimal1, operator, num2, decimal2) {
      return Math.pow(parseFloat(num1), parseFloat(num2));
    });
    expression = expression.replace(/(\d+(\.\d+)?)(%)(\d+(\.\d+)?)/g, function(match, num1, decimal1, operator, num2, decimal2) {
      return parseFloat(num1) % parseFloat(num2);
    });

    result = eval(expression);

    expression = result.toString();
    document.getElementById('result').value = expression;
  } catch (error) {
    expression = '';
    document.getElementById('result').value = 'Error';
  }
}
