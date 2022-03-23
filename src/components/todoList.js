import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filteredTodos, date }) => {

    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            todo={todo}
                            text={todo.text}
                            key={todo.id}
                            date={date}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
};

export default TodoList;