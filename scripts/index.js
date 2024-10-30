const clickToChat = document.getElementById('chat');
const chatBox = document.getElementById('chat-box'); 
const chatBoxExitButton = document.querySelector('#top-chat-box > button');
const selfIntroductionContainer = document.querySelector('#self-introduction');
const chatBoxSendButton = document.querySelector('#send');
const chatBoxInput = document.querySelector('#bottom-chat-box input');
const middleChatBox = document.querySelector('#middle-chat-box');

clickToChat.addEventListener("click", () => {
    setTimeout(() => {
        chatBox.style.visibility = "visible";
    }, 100);   
});

chatBoxExitButton.addEventListener('click', () => {
    setTimeout(() => {
        chatBox.style.visibility = "hidden";
    }, 100);
});

chatBoxSendButton.addEventListener('click', () => {

    const messageBox = document.createElement("div");
    messageBox.style.height = "Auto";
    messageBox.style.width = "Auto";
    messageBox.style.backgroundColor = "Gray";
    middleChatBox.appendChild(messageBox);

    const message = document.createElement("p");
    message.textContent = `${chatBoxInput.value}`;
    messageBox.appendChild(message);

    chatBoxInput.value = '';
});

document.addEventListener('scroll', () => {
    selfIntroductionContainer.style.display = 'flex';
})