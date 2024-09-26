document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("message-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

document.getElementById("reply-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});


function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const replyInput =document.getElementById("reply-input");

    const messageText = messageInput.value.trim();
    const replyText = replyInput.value.trim();

    if (messageText !== "" ||  replyText !=="") {
        const chatBox = document.getElementById("chat-box");

       if(messageText !== ""){
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `<p>${messageText}</p>`;
       
        chatBox.appendChild(messageElement);
       }

       if(replyText !== ""){
        const replyElement=document.createElement("div");
        replyElement.classList.add("message","received");
        replyElement.innerHTML = `<p>${replyText}</p>`;

        chatBox.appendChild(replyElement);
       }

      
        messageInput.value = "";
        replyInput.value="";


        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
