const clickToChat = document.getElementById('chat');
const chatBox = document.getElementById('chat-box'); 
const chatBoxExitButton = document.querySelector('#top-chat-box > button');

clickToChat.addEventListener("click", () => {

    chatBox.style.visibility = "visible";

});

chatBoxExitButton.addEventListener('click', () => {

    chatBox.style.visibility = "hidden";

});

