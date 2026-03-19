// HTTP GET & POST Requests Demo

const output = document.getElementById("output");
const getUrl = document.getElementById("getUrl");
const postUrl = document.getElementById("postUrl");
const requestInfo = document.getElementById("requestInfo");
const responseInfo = document.getElementById("responseInfo");
const calcResult = document.getElementById("calcResult");

// Utility functions
function print(line = "") {
  output.textContent += line + "\n";
  output.scrollTop = output.scrollHeight;
}

function printAndLog(line = "") {
  print(line);
  console.log(line);
}

function heading(title) {
  const line = "\n===== " + title + " =====";
  printAndLog(line);
}

function formatParams(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

// Simulate servlet request/response
function simulateServletRequest(method, url, params, isFormData = false) {
  heading(`${method} Request to Servlet`);

  // Request details
  printAndLog(`HTTP Method: ${method}`);
  printAndLog(`Request URL: ${url}`);

  if (method === "GET") {
    printAndLog(`Query String: ${new URLSearchParams(params).toString()}`);
    printAndLog(`Data Location: URL (visible in address bar)`);
  } else {
    printAndLog(`Request Body: ${isFormData ? "Form Data" : "JSON"}`);
    printAndLog(`Data Location: Request body (hidden)`);
  }

  printAndLog("\nRequest Parameters:");
  for (const [key, value] of Object.entries(params)) {
    printAndLog(`  ${key} = ${value}`);
  }

  // Simulate servlet processing
  printAndLog("\n→ Servlet Container receives request");
  printAndLog(`→ Forwarding to servlet: ${url.split("/").pop()}`);

  if (method === "GET") {
    printAndLog("→ Calling doGet(request, response)");
  } else {
    printAndLog("→ Calling doPost(request, response)");
  }

  printAndLog("→ Extracting parameters using request.getParameter()");
  printAndLog("→ Processing request...");

  return params;
}

function generateServletResponse(method, params, type = "default") {
  const timestamp = new Date().toLocaleTimeString();

  printAndLog("\n→ Generating HTTP response");
  printAndLog("→ Setting content type: text/html");
  printAndLog("→ Status: 200 OK");
  printAndLog("→ Response sent to client");
  printAndLog(`✓ Request completed at ${timestamp}`);

  // Update request info display
  let requestText = `Method: ${method}\n`;
  requestText += `Timestamp: ${timestamp}\n`;
  requestText += `Parameters:\n`;
  for (const [key, value] of Object.entries(params)) {
    requestText += `  ${key} = ${value}\n`;
  }
  requestInfo.textContent = requestText;

  // Update response info display
  let responseText = "";
  if (type === "search") {
    responseText = `HTTP/1.1 200 OK\nContent-Type: text/html\n\n`;
    responseText += `<h1>Search Results</h1>\n`;
    responseText += `<p>Query: ${params.query || params.q}</p>\n`;
    responseText += `<p>Category: ${params.category}</p>\n`;
    responseText += `<p>Page: ${params.page}</p>\n`;
    responseText += `<p>Showing ${params.limit} results</p>`;
  } else if (type === "register") {
    responseText = `HTTP/1.1 200 OK\nContent-Type: text/html\n\n`;
    responseText += `<h1>Registration Successful!</h1>\n`;
    responseText += `<p>Welcome, ${params.username}!</p>\n`;
    responseText += `<p>Email: ${params.email}</p>\n`;
    responseText += `<p>Account created successfully.</p>`;
  } else if (type === "calculator") {
    responseText = `HTTP/1.1 200 OK\nContent-Type: text/html\n\n`;
    responseText += params.result;
  } else {
    responseText = `HTTP/1.1 200 OK\nContent-Type: text/html\n\n`;
    responseText += `<h1>Success</h1>\n<p>Request processed</p>`;
  }

  responseInfo.textContent = responseText;
}

// GET Request Handler
function handleGetRequest() {
  const query = document.getElementById("getQuery").value;
  const category = document.getElementById("getCategory").value;
  const page = document.getElementById("getPage").value;
  const limit = document.getElementById("getLimit").value;

  const params = {
    q: query,
    category: category,
    page: page,
    limit: limit,
  };

  // Build URL with query string
  const baseUrl = "http://localhost:8080/app/search";
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${baseUrl}?${queryString}`;

  // Update URL display
  getUrl.innerHTML = `<strong>GET URL:</strong> ${fullUrl}`;

  // Simulate request
  simulateServletRequest("GET", baseUrl, params);
  generateServletResponse("GET", { query, category, page, limit }, "search");
}

// POST Request Handler
function handlePostRequest() {
  const username = document.getElementById("postUsername").value;
  const email = document.getElementById("postEmail").value;
  const password = document.getElementById("postPassword").value;
  const age = document.getElementById("postAge").value;
  const bio = document.getElementById("postBio").value;

  const params = {
    username: username,
    email: email,
    password: password,
    age: age,
    bio: bio,
  };

  const baseUrl = "http://localhost:8080/app/register";

  // Update URL display (no query string for POST)
  postUrl.innerHTML = `<strong>POST URL:</strong> ${baseUrl}<br><em>Data sent in request body (not visible in URL)</em>`;

  // Simulate request
  simulateServletRequest("POST", baseUrl, params, true);
  generateServletResponse("POST", params, "register");
}

// Calculator with GET
function calculateWithGet() {
  const num1 = document.getElementById("calcNum1").value;
  const num2 = document.getElementById("calcNum2").value;
  const operation = document.getElementById("calcOperation").value;

  const params = {
    num1: num1,
    num2: num2,
    operation: operation,
  };

  const baseUrl = "http://localhost:8080/app/calculate";
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${baseUrl}?${queryString}`;

  heading("Calculator - GET Method");
  printAndLog(`Full URL: ${fullUrl}`);
  printAndLog("Data visible in URL!");

  // Calculate result
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;

  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      result = n1 / n2;
      break;
  }

  const resultText = `${num1} ${getOperatorSymbol(operation)} ${num2} = ${result}`;

  simulateServletRequest("GET", baseUrl, params);

  calcResult.textContent = `Method: GET\nURL: ${fullUrl}\n\nResult: ${resultText}\n\nNote: All data visible in URL!`;

  generateServletResponse(
    "GET",
    { ...params, result: `<h1>Result: ${resultText}</h1>` },
    "calculator",
  );
}

// Calculator with POST
function calculateWithPost() {
  const num1 = document.getElementById("calcNum1").value;
  const num2 = document.getElementById("calcNum2").value;
  const operation = document.getElementById("calcOperation").value;

  const params = {
    num1: num1,
    num2: num2,
    operation: operation,
  };

  const baseUrl = "http://localhost:8080/app/calculate";

  heading("Calculator - POST Method");
  printAndLog(`URL: ${baseUrl}`);
  printAndLog("Data sent in request body (hidden)!");

  // Calculate result
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;

  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      result = n1 / n2;
      break;
  }

  const resultText = `${num1} ${getOperatorSymbol(operation)} ${num2} = ${result}`;

  simulateServletRequest("POST", baseUrl, params, true);

  calcResult.textContent = `Method: POST\nURL: ${baseUrl}\n\nResult: ${resultText}\n\nNote: Data hidden in request body!`;

  generateServletResponse(
    "POST",
    { ...params, result: `<h1>Result: ${resultText}</h1>` },
    "calculator",
  );
}

function getOperatorSymbol(operation) {
  switch (operation) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "×";
    case "divide":
      return "÷";
    default:
      return operation;
  }
}

// Event Listeners
document.getElementById("sendGet").addEventListener("click", () => {
  handleGetRequest();
});

document.getElementById("sendPost").addEventListener("click", () => {
  handlePostRequest();
});

document.getElementById("calcGet").addEventListener("click", () => {
  calculateWithGet();
});

document.getElementById("calcPost").addEventListener("click", () => {
  calculateWithPost();
});

// Initial setup
printAndLog("HTTP GET & POST Demonstration Ready");
printAndLog("================================\n");
printAndLog("Key Differences:");
printAndLog("• GET: Data in URL (visible, bookmarkable, cacheable)");
printAndLog("• POST: Data in body (hidden, secure, unlimited size)\n");
printAndLog("Try the examples above to see how each method works!");
printAndLog("\nServlet Method Mapping:");
printAndLog("• GET  → doGet(request, response)");
printAndLog("• POST → doPost(request, response)");
