import { List, Row } from 'antd';
import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filteredTodos, date }) => {

    return (
        <>
            <Row className="todo-container">
                <List className="todo-list">
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
                </List>
            </Row>
        </>
    )
};

export default TodoList;