const clickToChat = document.getElementById('chat');
const chatBox = document.getElementById('chat-box'); 
const chatBoxExitButton = document.querySelector('#top-chat-box > button');
const selfIntroductionContainer = document.querySelector('#self-introduction');

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

document.addEventListener('scroll', () => {
    selfIntroductionContainer.style.display = 'flex';
})