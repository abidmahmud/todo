const saveLocalTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export default saveLocalTodos;