
// Função para adicionar uma nova tarefa
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Digite uma tarefa válida!');
        return;
    }

    // Criar elementos HTML dinamicamente
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Adicionar classe e evento de clique ao botão de exclusão
    deleteButton.innerText = 'Excluir';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Adicionar classes e eventos de clique à tarefa
    li.classList.add('taskItem');
    li.appendChild(span);
    li.appendChild(deleteButton);

    span.innerText = taskInput.value;
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Adicionar a nova tarefa à lista
    taskList.appendChild(li);

    // Limpar o campo de entrada
    taskInput.value = '';
};
