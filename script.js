const todoInput = document.querySelector('#todo-input')
const todoBtn = document.querySelector('#todo-btn')
const todoList = document.querySelector('#todo-list')
const openWindow = document.querySelector('.open-window')

openWindow.addEventListener('click', () => {
    window.open('newWindow.html', '_blank', 'top=500,left=200,frame=true,nodeIntegration=no')
})

todoBtn.addEventListener('click', () => {
    todoList.insertAdjacentHTML('beforeend', `<li>${todoInput.value}</li>`)
    todoInput.value = ''
})