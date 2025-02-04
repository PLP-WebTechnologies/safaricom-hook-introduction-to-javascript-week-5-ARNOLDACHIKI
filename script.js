// Part 1: JavaScript Basics


let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Gaming"];
let user = { firstName: "John", lastName: "Doe", age: 25 };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);


function runCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error (division by zero)";
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}


function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}

document.getElementById("dynamic-content").innerHTML = `<p>${greetUser("Student")}</p>`;

// Part 2: JavaScript Control Structures


function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));

    if (isNaN(userAge)) {
        alert("Please enter a valid number.");
        return;
    }

    let message = userAge >= 18 ? "You are eligible to vote!" : "You are not eligible to vote.";
    document.getElementById("dynamic-content").innerHTML += `<p>${message}</p>`;
}

// Loop - Display Numbers 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: DOM Manipulation


document.querySelector("h1").textContent = "JavaScript in Action!";


let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically by JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
