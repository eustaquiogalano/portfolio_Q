const clickToChat = document.getElementById('chat');
const chatBox = document.getElementById('chat-box'); 
const chatBoxExitButton = document.querySelector('#chat-box > button');

clickToChat.addEventListener("click", () => {

    chatBox.style.display = "block";
    chatBoxExitButton.style.display = "block";

});

chatBoxExitButton.addEventListener('click', () => {

    chatBox.style.display = "none";
    chatBoxExitButton.style.display = "none";

});

