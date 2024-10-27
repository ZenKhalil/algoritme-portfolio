import Stack from "./stack.js";
import Queue from "./queue.js";

const precedence = {
  "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1,
};

function RPNCalculator(input) {
  const resultStack = new Stack();
  const inputQueue = new Queue();

  const inputs = input.split(" ");
  inputs.forEach((input) => {
    inputQueue.push(input); // Brug push til at tilføje til Queue
  });

  // Brug removeHead til at traversere køen korrekt
  while (!inputQueue.isEmpty()) {
    const currentInput = inputQueue.getHead();
    const token = currentInput.data;

    if (!isNaN(token)) {
      resultStack.push(Number(token));
    } else {
      const num1 = resultStack.pop().data;
      const num2 = resultStack.pop().data;

      switch (token) {
        case "+":
          resultStack.push(num2 + num1);
          break;
        case "*":
          resultStack.push(num2 * num1);
          break;
        case "-":
          resultStack.push(num2 - num1);
          break;
        case "^":
          resultStack.push(num2 ** num1);
          break;
        case "/":
          if (num1 === 0) {
            throw new Error("Division med nul");
          }
          resultStack.push(num2 / num1);
          break;
        default:
          throw new Error(`Ugyldig operator: ${token}`);
      }
    }

    inputQueue.removeHead(); // Fjern det behandlede token fra køen
  }

  if (resultStack.peek() === null) {
    throw new Error("Ingen resultat fundet");
  }

  const result = resultStack.peek().data;

  if (!resultStack.isEmpty()) {
    throw new Error("Ugyldigt RPN udtryk");
  }

  return result;
}

function shuntingYardConversion(dataStr) {
  const { inputQueue, outputQueue, operatorStack } = setupData(dataStr);
  let returnStr = "";

  while (!inputQueue.isEmpty()) {
    const currentInput = inputQueue.getHead();
    const token = currentInput.data;

    if (!isNaN(token)) {
      outputQueue.push(token);
    } else if (token !== "(" && token !== ")") {
      let currentOperator = operatorStack.peek();
      while (
        currentOperator?.data !== "(" &&
        (precedence[currentOperator?.data] > precedence[token] ||
          (precedence[currentOperator?.data] === precedence[token] &&
            token !== "^"))
      ) {
        outputQueue.push(operatorStack.pop().data);
        currentOperator = operatorStack.peek();
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      let currentOperator = operatorStack.peek();
      while (currentOperator && currentOperator.data !== "(") {
        outputQueue.push(operatorStack.pop().data);
        currentOperator = operatorStack.peek();
      }
      if (operatorStack.peek() && operatorStack.peek().data === "(") {
        operatorStack.pop(); // Fjern '(' fra stacken
      } else {
        throw new Error("Mismatched parentheses");
      }
    }

    console.log(
      "Token: [" +
        token +
        "] Output: [" +
        outputQueue.dumpList() +
        "] Operator: [" +
        operatorStack.dumpList() +
        "] "
    );
    console.log(
      "===================================================================="
    );
    inputQueue.removeHead(); // Fjern det behandlede token fra inputQueue
  }

  while (!operatorStack.isEmpty()) {
    const operator = operatorStack.pop();
    if (operator.data === "(" || operator.data === ")") {
      throw new Error("Mismatched parentheses");
    }
    outputQueue.push(operator.data);
  }

  let currentOutput = outputQueue.getHead();
  while (currentOutput) {
    returnStr += currentOutput.data + " ";
    currentOutput = currentOutput.next;
  }

  console.log(returnStr.trim());
  return returnStr.trim();
}

function setupData(dataStr) {
  const inputQueue = new Queue();
  const outputQueue = new Queue();
  const operatorStack = new Stack();
  const inputs = dataStr.split(" ");
  inputs.forEach((e) => {
    inputQueue.push(e);
  });

  return { inputQueue, outputQueue, operatorStack };
}

function realCalculator(input) {
  const RPNInput = shuntingYardConversion(input);
  return RPNCalculator(RPNInput);
}

console.log(realCalculator("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3"));
