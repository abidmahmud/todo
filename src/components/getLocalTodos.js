const getLocalTodos = () => {

    const todos = JSON.parse(window.localStorage.getItem('todos'));
    return todos;

}

export default getLocalTodos;