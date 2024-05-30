//const {BrowserWindow} = require('electron').remote
const todoInput = document.querySelector('#todo-input')
const todoBtn = document.querySelector('#todo-btn')
const todoList = document.querySelector('#todo-list')
const openWindow = document.querySelector('.open-window')


todoBtn.addEventListener('click', () => {
    todoList.insertAdjacentHTML('beforeend', `<li>${todoInput.value}</li>`)
    todoInput.value = ''
})