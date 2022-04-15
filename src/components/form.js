import React, { useState } from "react";
import { DatePicker, Space, Menu, Dropdown, Button, Input, Row, List, Col, Typography, Form, Select } from 'antd';
import 'antd/dist/antd.css';
import { PlusSquareOutlined, DeleteTwoTone } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import dayjs from "dayjs";

const InputForm = ({ inputText, setInputText, todos, setTodos, setStatus, date, setDate }) => {

    const { RangePicker } = DatePicker;

    const handleText = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
        // setInputText("");
        // console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputText("");
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000, start: dayjs().format('DD MMMM') },
        ]);
    };

    const hanldeStatus = (e) => {
        setStatus(e.target.value);
    };


    const menu = (
        <Menu name="todos">
            <Menu.Item key={1} value="all">
                All
            </Menu.Item>
            <Menu.Item key={2} value="Completed">
                Completed
            </Menu.Item>
            <Menu.Item key={3} value="Uncompleted" >
                Uncompleted
            </Menu.Item>
        </Menu>
    );

    const [form] = Form.useForm();

    const onFinish = () => {
        form.resetFields();
    };

    return (
        <>



            <Form
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name={"todo"}
                    rules={[{ required: true, message: 'This field is required' }]}
                >
                    <Input
                        type="text"
                        size="large"
                        style={{ width: "20rem", padding: "1rem", paddingLeft: "1rem", marginRight: "1rem" }}
                        placeholder="Write your todo..."
                        value={inputText}
                        onChange={handleText}
                    />
                </Form.Item>
                <Form.Item>
                    <Row gutter={1}>
                        <Button
                            style={{ marginRight: "1rem" }}
                            type="primary"
                            className="todo-button"
                            onClick={handleSubmit}
                        >
                            Add Todo
                            {/* <PlusSquareOutlined /> */}
                        </Button>
                    </Row>
                </Form.Item>

                {/* <Form.Item   >
                    <Select name="todos" placeholder="Todos" onChange={hanldeStatus}>
                        <Select.Option value="all">All</Select.Option>
                        <Select.Option value="completed">Completed</Select.Option>
                        <Select.Option value="uncompleted">Uncompleted</Select.Option>
                    </Select>
                </Form.Item> */}

                <Col className="select" onChange={hanldeStatus}>
                    <select className="filter-todo" name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </Col>
                <Form.Item>
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
                </Form.Item>
            </Form>
        </>
    );
};

export default InputForm;
