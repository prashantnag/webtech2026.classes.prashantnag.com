const output = document.getElementById("output");
let currentScore = 0;

const demo = {
  showScore() {
    console.log("Current score:", currentScore);
    return currentScore;
  },
  setScore(value) {
    currentScore = Number(value);
    console.log("Updated score with demo.setScore(...):", currentScore);
    return currentScore;
  },
  incrementScore(delta) {
    currentScore += Number(delta);
    console.log("Updated score with demo.incrementScore(...):", currentScore);
    return currentScore;
  },
};

window.demo = demo;

function print(line = "") {
  output.textContent += line + "\n";
}

function printAndLog(line = "") {
  print(line);
  console.log(line);
}

function heading(title) {
  const line = "===== " + title + " =====";
  printAndLog(line);
}

function runDemo() {
  console.clear();
  output.textContent = "";

  const studentName = document.getElementById("name").value;
  const ageText = document.getElementById("age").value;
  const isStudent = document.getElementById("student").value === "true";
  const hobbiesText = document.getElementById("hobbies").value;
  const numA = Number(document.getElementById("numA").value);
  const numB = Number(document.getElementById("numB").value);
  const rawValue = document.getElementById("rawValue").value;
  const initialScore = Number(document.getElementById("initialScore").value);
  const scoreDelta = Number(document.getElementById("scoreDelta").value);

  // Convert comma-separated text to array and trim each item.
  const hobbies = hobbiesText
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const ageNumber = Number(ageText);

  heading("1) Variables");
  let score = initialScore;
  score = score + scoreDelta;
  currentScore = score;
  const courseCode = "BMC201";
  var legacyLabel = "old var example";

  printAndLog(
    "let score = Number(document.getElementById('initialScore').value);",
  );
  printAndLog(
    "score = score + Number(document.getElementById('scoreDelta').value);",
  );
  printAndLog("score: " + score);
  printAndLog("const courseCode: " + courseCode);
  printAndLog("var legacyLabel: " + legacyLabel);
  printAndLog(
    "Try in console: demo.showScore(), demo.setScore(80), demo.incrementScore(10)",
  );
  print();

  heading("2) Data Types");
  printAndLog("studentName value: " + studentName);
  printAndLog("typeof studentName: " + typeof studentName);
  printAndLog("ageText value: " + ageText);
  printAndLog("typeof ageText: " + typeof ageText);
  printAndLog("ageNumber value: " + ageNumber);
  printAndLog("typeof ageNumber: " + typeof ageNumber);
  printAndLog("isStudent value: " + isStudent);
  printAndLog("typeof isStudent: " + typeof isStudent);
  printAndLog("hobbies value: [" + hobbies.join(", ") + "]");
  printAndLog("typeof hobbies: " + typeof hobbies + " (array is object)");
  print();

  heading("3) Type Conversion");
  const asNumber = Number(rawValue);
  const asString = String(ageNumber);
  const asBoolean = Boolean(rawValue);
  const asInt = parseInt(rawValue, 10);
  const asFloat = parseFloat(rawValue);

  printAndLog("rawValue: " + rawValue + " | typeof: " + typeof rawValue);
  printAndLog(
    "Number(rawValue): " + asNumber + " | typeof: " + typeof asNumber,
  );
  printAndLog(
    "String(ageNumber): " + asString + " | typeof: " + typeof asString,
  );
  printAndLog(
    "Boolean(rawValue): " + asBoolean + " | typeof: " + typeof asBoolean,
  );
  printAndLog("parseInt(rawValue): " + asInt);
  printAndLog("parseFloat(rawValue): " + asFloat);
  printAndLog("'5' + 3 -> " + ("5" + 3));
  printAndLog("'5' - 3 -> " + ("5" - 3));
  printAndLog("'5' == 5 -> " + ("5" == 5));
  printAndLog("'5' === 5 -> " + ("5" === 5));
  print();

  heading("4) Arrays");
  const demoArray = [...hobbies];
  demoArray.push("demo-item");
  const removed = demoArray.pop();
  const upperHobbies = demoArray.map((item) => item.toUpperCase());

  printAndLog("Original hobbies: [" + hobbies.join(", ") + "]");
  printAndLog("After push/pop, removed: " + removed);
  printAndLog("demoArray length: " + demoArray.length);
  printAndLog("First item demoArray[0]: " + (demoArray[0] || "N/A"));
  printAndLog("Mapped uppercase array: [" + upperHobbies.join(", ") + "]");
  console.table(demoArray);
  print();

  heading("5) Objects");
  const profile = {
    name: studentName,
    age: ageNumber,
    isStudent: isStudent,
    hobbies: hobbies,
  };
  profile.city = "Noida";
  profile.age = profile.age + 1;

  printAndLog("Object profile.name (dot): " + profile.name);
  printAndLog("Object profile['age'] (bracket): " + profile["age"]);
  printAndLog("Added profile.city: " + profile.city);
  printAndLog("profile.hobbies.length: " + profile.hobbies.length);
  console.log("profile object:", profile);
  console.table(profile);
  print();

  heading("6) Operators");
  printAndLog("Using Number A = " + numA + ", Number B = " + numB);
  printAndLog("Arithmetic: A + B = " + (numA + numB));
  printAndLog("Arithmetic: A - B = " + (numA - numB));
  printAndLog("Arithmetic: A * B = " + numA * numB);
  printAndLog(
    "Arithmetic: A / B = " +
      (numB === 0 ? "undefined (division by zero)" : numA / numB),
  );
  printAndLog(
    "Arithmetic: A % B = " + (numB === 0 ? "undefined" : numA % numB),
  );
  printAndLog("Comparison: A > B -> " + (numA > numB));
  printAndLog("Comparison: A < B -> " + (numA < numB));
  printAndLog("Comparison: A === B -> " + (numA === numB));

  const canAccessLab = ageNumber >= 18 && isStudent;
  const qualifiesForPortal = isStudent || numA > 10;
  printAndLog("Logical: age >= 18 && isStudent -> " + canAccessLab);
  printAndLog("Logical: isStudent || numA > 10 -> " + qualifiesForPortal);
  printAndLog("Logical: !isStudent -> " + !isStudent);
  print();

  heading("Demo Complete");
  printAndLog("Also check browser console output (including console.table).");

  console.group("Lecture 12 Demo Summary");
  console.log("Variables covered");
  console.log("Data Types covered");
  console.log("Conversion covered");
  console.log("Arrays covered");
  console.log("Objects covered");
  console.log("Operators covered");
  console.groupEnd();
}

document.getElementById("runDemo").addEventListener("click", runDemo);

runDemo();
