// Predefined messages for the chatbot to use
let messages = [
    "Hello!",
    "How are you?",
    "What can I help you with?",
    "I'm here to assist you!",
    "Sorry, I didn't understand that.",
    "Could you please rephrase?",
    "That's interesting!",
    "Tell me more.",
    "Hi",
];

// Function to generate a random index from the messages array
function getRandomMessage() {
    let randomIndex = Math.ceil(Math.random() * messages.length);
    return messages[randomIndex];
}

// Function to display user message and chatbot response
function displayMessage(userMessage, botMessage) {
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><i class="fa-solid fa-user"></i>: ${userMessage}</p>`;
    chatbox.innerHTML += `<p><i class="fa-brands fa-bots"></i>: ${botMessage}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to process user input and display chatbot response
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    displayMessage(userInput, getRandomMessage());
    document.getElementById("userInput").value = ""; // Clear user input after sending
}

// Event listener to handle pressing "Enter" key
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});
