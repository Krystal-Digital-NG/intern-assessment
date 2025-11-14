document.addEventListener('DOMContentLoaded', () => {
  const newTaskBtn = document.getElementById('new-task-btn');
  const todoForm = document.getElementById('todo-form');
  const todoTitleInput = document.getElementById('todo-title');
  const todoDatetimeInput = document.getElementById('todo-datetime');
  const todoList = document.getElementById('todo-list');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  newTaskBtn.addEventListener('click', () => {
    todoForm.classList.toggle('hidden');
  });

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = todoTitleInput.value.trim();
    const datetime = todoDatetimeInput.value;
    if (!title || !datetime) return alert('Please fill all fields');

    const todo = { id: Date.now(), title, datetime, completed: false };
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();

    todoForm.reset();
    todoForm.classList.add('hidden');
  });

  function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'group flex justify-between items-center p-3 rounded-lg transition-transform duration-200 hover:scale-[1.02]';
      li.innerHTML = `
        <div>
          <h3 class="font-medium ${todo.completed ? 'line-through text-gray-400' : ''}">
            ${todo.title}
          </h3>
          <p class="text-sm text-gray-400">${todo.datetime}</p>
        </div>
        <div class="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button data-id="${todo.id}" class="toggle text-purple-600">✔</button>
          <button data-id="${todo.id}" class="delete text-red-500">🗑</button>
        </div>
      `;

      li.querySelector('.toggle').addEventListener('click', () => {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
      });

      li.querySelector('.delete').addEventListener('click', () => {
        if (confirm('Delete this task?')) {
          todos = todos.filter(t => t.id !== todo.id);
          localStorage.setItem('todos', JSON.stringify(todos));
          renderTodos();
        }
      });

      todoList.appendChild(li);
    });
  }

  renderTodos();
});

