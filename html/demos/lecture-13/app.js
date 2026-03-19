let count = 0;
const counterValue = document.getElementById("counterValue");
const eventLog = document.getElementById("eventLog");

function logEvent(message) {
  eventLog.textContent += message + "\n";
  console.log(message);
}

function incrementCounter() {
  count += 1;
  counterValue.textContent = count;
  logEvent("click event: counter incremented to " + count);
}

function greetUser(name) {
  if (!name) {
    return "Hello, Guest";
  }
  return "Hello, " + name;
}

function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}

function setCounter(newCount) {
  count = Number(newCount);
  counterValue.textContent = count;
  logEvent("counter set to " + count);
}

const eventsDemo = {
  showCount() {
    console.log("Current count:", count);
    return count;
  },
  setCount(value) {
    setCounter(value);
    return count;
  },
  incrementBy(step) {
    count += Number(step);
    counterValue.textContent = count;
    logEvent("counter incremented by " + Number(step) + " -> " + count);
    return count;
  },
  previewBill(price, taxRate) {
    const total = calculateTotal(Number(price), Number(taxRate));
    console.log(
      "calculateTotal(" +
        Number(price) +
        ", " +
        Number(taxRate) +
        ") -> " +
        total,
    );
    return total;
  },
  applyGreeting(name) {
    const text = (name || "").trim();
    document.getElementById("nameInput").value = text;
    const greetText = greetUser(text);
    document.getElementById("greeting").textContent = greetText;
    logEvent("greeting applied from console for value '" + text + "'");
    return greetText;
  },
};

window.eventsDemo = eventsDemo;

document.getElementById("incBtn").addEventListener("click", incrementCounter);

document
  .getElementById("nameInput")
  .addEventListener("input", function (event) {
    const text = event.target.value.trim();
    document.getElementById("greeting").textContent = greetUser(text);
    logEvent("input event: greeting updated for value '" + text + "'");
  });

document
  .getElementById("billForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    logEvent("submit event intercepted with preventDefault()");

    const price = Number(document.getElementById("price").value);
    const taxRate = Number(document.getElementById("taxRate").value);

    const total = calculateTotal(price, taxRate);
    document.getElementById("totalResult").innerHTML =
      "<strong>Total:</strong> " + total.toFixed(2);

    logEvent(
      "function calculateTotal(" +
        price +
        ", " +
        taxRate +
        ") -> " +
        total.toFixed(2),
    );
    logEvent("---");
  });

logEvent("Ready: try click, input, and submit interactions.");
logEvent(
  "Console demo syntax: eventsDemo.showCount(), eventsDemo.setCount(5), eventsDemo.incrementBy(3)",
);
logEvent(
  "More: eventsDemo.previewBill(1000, 0.18), eventsDemo.applyGreeting('Aman')",
);
