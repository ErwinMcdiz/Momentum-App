// Function to update time and date
function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    timeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);

    updateGreeting(hours);  // Update greeting based on the time
}

// Helper function to format time
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update greeting based on time
function updateGreeting(hours) {
    const greetingElement = document.getElementById("greeting");
    if (hours < 12) {
        greetingElement.textContent = "Good Morning!";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon!";
    } else {
        greetingElement.textContent = "Good Evening!";
    }
}

// Function to update the name and keep it for 5 seconds
function updateName() {
    const nameInput = document.getElementById("nameInput").value;
    const greetingElement = document.getElementById("greeting");

    // Set the greeting with the input name
    greetingElement.textContent = `Hello, ${nameInput || "Guest"}!`;

    // Keep the name displayed for at least 5 seconds before updating the greeting based on the time again
    setTimeout(() => {
        const hours = new Date().getHours();  // Get current hour to update the greeting after 5 seconds
        updateGreeting(hours);
    }, 10000);  // 5000 milliseconds = 5 seconds
}

// Function to update the focus
function updateFocus() {
    const focusInput = document.getElementById("focusInput").value;
    document.getElementById("focus").textContent = focusInput || "No focus set";
}

// Function to update the quote
function updateQuote() {
    const quoteInput = document.getElementById("quoteInput").value;
    document.getElementById("quote").textContent = quoteInput || "No quote set for today";
}

// Event listener for name submission
document.getElementById("submitNameButton").addEventListener("click", updateName);

// Event listener for focus submission
document.getElementById("submitFocusButton").addEventListener("click", updateFocus);

// Event listener for quote submission
document.getElementById("submitQuoteButton").addEventListener("click", updateQuote);


// Quotes array
const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Stay positive, work hard, make it happen."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Function to add a new to-do item
document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); // Ensure no empty tasks
    const taskList = document.getElementById("taskList");

    if (taskText !== "") {
        // Creating the elements
        const listItem = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = taskText;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            label.classList.toggle("completed");
        };

        // Appending the elements
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";
    } else {
        alert("Please enter a task!"); // Alert if input is empty
    }
}
// Call the functions to display time, greeting, and quote
setInterval(updateTime, 1000);
updateTime();  // Call immediately to display the current time
displayRandomQuote(); // Display a random quote on load