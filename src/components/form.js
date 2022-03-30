import React, { useState } from "react";
import { DatePicker, Space, Menu, Dropdown, Button, Input, Row, List, Col } from 'antd';
import 'antd/dist/antd.css';
import { PlusSquareOutlined, DeleteTwoTone } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, date, setDate }) => {

    const { RangePicker } = DatePicker;

    const handleText = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    };

    const handleDate = e => {
        e.preventDefault();
        setDate(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, startTime: moment(), id: Math.random() * 1000 },
        ]);
        setInputText("");
        setDate(null);
    };

    const hanldeStatus = (e) => {
        setStatus(e.target.value);
    };

    function onChange(value, dateString) {
        setDate(dateString);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(e) {
        setDate(e);
        console.log('onOk: ', e);
    }

    return (
        <>
            <form>
                <Input
                    type="text"
                    size="large"
                    style={{ width: "20rem", padding: "1rem", paddingLeft: "1rem" }}
                    placeholder="Write your todo..."
                    value={inputText}
                    onChange={handleText}
                />

                <Row gutter={1}>
                    <Button
                        type="danger"
                        className="todo-button"
                        onClick={handleSubmit}
                    >
                        <PlusSquareOutlined />
                    </Button>
                </Row>
                <Col className="select" onChange={hanldeStatus}>
                    <select className="filter-todo" name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </Col>
                <Col className="badge">
                    You have
                    {!todos.length
                        ? " no todos"
                        : todos.length === 1
                            ? " 1 todo"
                            : todos.length > 1
                                ? ` ${todos.length} todos`
                                : null}
                </Col>
            </form>
        </>
    );
};

export default Form;
