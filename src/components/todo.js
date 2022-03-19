import React from "react";
import moment from "moment";

const Todo = ({ text, todo, todos, setTodos }) => {
    const now = new Date();
    const dateString = moment(now).format("DD-MM-YYYY");

    const hanldeDelete = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    // const handleClear = () => {
    //     setTodos([]);
    //     localStorage.removeItem("localTasks");
    // }

    const handleComplete = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    return (
        <>
            <div className="todo">
                <li
                    className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                    {text}
                </li>
                <li className="date">{dateString}</li>
                <button className="complete-btn" onClick={handleComplete}>
                    <i className="fas fa-check" />
                </button>
                <button className="trash-btn" onClick={hanldeDelete}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </>
    );
};

export default Todo;
