var listElement = document.querySelector('#todo ul');
var inputElement = document.querySelector('#todo input');
var buttonElement = document.querySelector('#todo button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo + ' ');

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Execute');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    /** JSON
     * Javascript Object Notation
     */
    localStorage.setItem('list_todos', JSON.stringify(todos));
}