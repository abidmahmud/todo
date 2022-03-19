import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const handleText = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };

    const hanldeStatus = (e) => {
        setStatus(e.target.value);
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Write your todo..."
                    value={inputText}
                    onChange={handleText}
                />
                <button
                    type="submit"
                    className="todo-button"
                    onClick={handleSubmit}
                >
                    <i className="fas fa-plus-square" />
                </button>
                <div className="select" onChange={hanldeStatus}>
                    <select className="filter-todo" name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="badge">
                    You have
                    {!todos.length
                        ? " no todos"
                        : todos.length === 1
                            ? " 1 todo"
                            : todos.length > 1
                                ? ` ${todos.length} todos`
                                : null}
                </div>
            </form>
        </>
    );
};

export default Form;
