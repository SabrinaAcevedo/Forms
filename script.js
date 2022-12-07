
const formEl = document.querySelector('form');
const inputEl = document.querySelector('#todo');
const toDoList = document.querySelector('ul')
const todos = [];

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = inputEl.value;
    todos.push(todo);
    console.log(todo);
    rendertodoList();
    inputEl.value = '';
})

function rendertodoList() {
    const template = todos.map(item => `<li>${item}</li>`).join('')
    toDoList.innerHTML = template;
}