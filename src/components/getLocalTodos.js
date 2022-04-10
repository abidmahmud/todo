const getLocalTodos = () => {

    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;

}

export default getLocalTodos;