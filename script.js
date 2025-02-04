const chatForm = document.querySelector(".chat-form");
const chatBody = document.querySelector(".chat-body");
const sendMessageBtn = document.querySelector("#send-message");
const messageInput = document.querySelector(".message-input"); // Correct input reference

// Function to create message element dynamically
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
};

// Handle outgoing message from user
const handleOutgoingMessage = () => {
    const userMessage = messageInput.value.trim();
    if (!userMessage) return; // Prevent empty messages

    // Create user message
    const messageContainer = `<div class="message-text">${userMessage}</div>`;
    const outgoingMessage = createMessageElement(messageContainer, "user-message");
    chatBody.appendChild(outgoingMessage);
    
    // Clear input after sending
    messageInput.value = "";

    // Scroll to the bottom of chat body
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate bot response after a delay
    setTimeout(() => {
        const botMessageContainer = `
            <div class="bot-message-content">
                <img src="https://img.freepik.com/free-vector/chatbot-concept-background-realistic-style_23-2147831749.jpg?ga=GA1.1.856026252.1735303750&semt=ais_hybrid_sidr" height="50" alt="">
                <div class="message-text">
                    <div class="thinking-indicator">
                        <h2 class="dot"></h2>
                        <h2 class="dot"></h2>
                        <h2 class="dot"></h2>
                    </div>
                </div>
            </div>`;
        const incomingMessage = createMessageElement(botMessageContainer, "bot");
        chatBody.appendChild(incomingMessage);

        // Scroll to bottom after bot response
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
};

// Event listener for form submission
chatForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    handleOutgoingMessage();
});

// Event listener for send button click
sendMessageBtn.addEventListener("click", handleOutgoingMessage);
