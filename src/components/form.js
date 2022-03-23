import React, { useState } from "react";
import { DatePicker, Space, Menu, Dropdown, Button, Input, Row, List } from 'antd';
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
            { text: inputText, completed: false, date: moment(), id: Math.random() * 1000 },
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

    // const menu = (
    //     <Menu>
    //         <Menu.Item value="all"> All  </Menu.Item>
    //         <Menu.Item value="complete"> Completed  </Menu.Item>
    //         <Menu.Item value="uncomplete"> Uncompleted  </Menu.Item>
    //     </Menu>
    // );

    return (
        <>
            <form>
                <Input
                    type="text"
                    style={{ width: "20rem", padding: "1rem", paddingLeft: "1rem" }}
                    placeholder="Write your todo..."
                    value={inputText}
                    onChange={handleText}
                />

                {/* <Space direction="vertical" size={12}>
                    <RangePicker
                        showTime
                        value={date}
                        onChange={e => setDate(e)}
                    />
                </Space> */}

                <div>

                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['Start Time', 'End Time']}
                        onChange={onChange}
                        onOk={onOk}
                        style={{ width: "20rem" }}
                    />
                </div>

                <Button
                    type="submit"
                    className="todo-button"
                    onClick={handleSubmit}
                >
                    <PlusSquareOutlined />
                </Button>
                <div className="select" onChange={hanldeStatus}>
                    <select className="filter-todo" name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                {/* <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onChange={hanldeStatus} onClick={hanldeStatus}>
                        Hover me <DownOutlined />
                    </a>
                </Dropdown> */}
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
