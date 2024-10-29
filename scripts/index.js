
const clickToChat = document.getElementById('chat');
//const selfIntroContainer = document.getElementById('self-introduction')
const main = document.querySelector("main");

clickToChat.addEventListener("click", () => {
    
    const chatBox = document.createElement("div");
    chatBox.style.height = "400px";
    chatBox.style.width = "350px"; 
    chatBox.style.backgroundColor = "Gray";
    chatBox.style.position = "fixed";
    chatBox.style.left = "1550px"
    chatBox.style.top = "500px"

    main.appendChild(chatBox);
    
});