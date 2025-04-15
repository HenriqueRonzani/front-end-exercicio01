function getMessageElementClone() {
    const original = document.querySelector('.message-item.message-user')
    return original.cloneNode(true)
}

function createNewMessageElement(message) {
    const cloneElement = messageElement = getMessageElementClone()
    cloneElement.querySelector('.msg-chat').textContent = message
    document.querySelector('.messages-list').appendChild(cloneElement)
}

function initializeJs() {
    chatContainer = document.querySelector('.messages-list')
    formElement = document.querySelector('#form-chat-send')

    formElement.addEventListener('submit', (event) => {
        event.preventDefault()
        const inputElement = document.querySelector('#message')
        const message = inputElement.value
        if (message) {
            createNewMessageElement(message)
            inputElement.value = ''
        }
        chatContainer.scrollTop = chatContainer.scrollHeight
    })
}

let chatContainer, messageElement, formElement
document.addEventListener('DOMContentLoaded', initializeJs)
