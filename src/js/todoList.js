export const addTodo = () => {
    const newTodoInput = document.getElementById('newTodo');
    let currentTodoList = document.getElementById('todoList').innerHTML;
    currentTodoList += `<li>${newTodoInput.value}</li>`;
    document.getElementById('todoList').innerHTML = currentTodoList;
    newTodoInput.value = '';
}
  
document.getElementById('addTodo').addEventListener('click', addTodo);
  