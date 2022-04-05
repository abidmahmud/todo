import React, { useState, useEffect } from 'react';
import Form from './components/form';
import TodoList from "./components/todoList";
import './App.css';
import { Layout } from 'antd';
import Weather from './components/weatherApi';
import DarkMode from './components/DarkMode/darkMode';

function App() {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [date, setDate] = useState([]);
    const [theme, setTheme] = useState("light");

    const { Header, Footer, Sider, Content } = Layout;

    const handleFilter = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    };

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        handleFilter();
        saveLocalTodos();
    }, [todos, status]);

    return (
        <>
            <div className="App">
                <header justify="auto">
                    <DarkMode theme={theme} setTheme={setTheme} />
                    <h1>Todo's</h1>
                    {/* <Weather /> */}
                </header>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    status={status}
                    setStatus={setStatus}
                    setDate={setDate}
                    date={date}
                />
                <TodoList
                    date={date}
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />


            </div>

        </>
    );
}

export default App;