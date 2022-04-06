import React, { useState, useEffect } from "react";
import moment from "moment";
import { Button, Modal, List, Row, Layout, Space, DatePicker, Typography, Checkbox, Switch } from "antd";
import { CheckCircleOutlined, DeleteOutlined, ExclamationCircleOutlined, DeleteTwoTone, EditOutlined } from '@ant-design/icons';

const Todo = ({ text, todo, todos, setTodos, date }) => {
    const now = new Date();
    const dateString = moment(now).format("DD-MM-YYYY");

    const { Header, Footer, Sider, Content } = Layout;

    const hanldeDelete = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const { confirm } = Modal;


    const showDeleteConfirm = id => {
        confirm({
            title: 'Are you sure delete this todo?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                hanldeDelete(id);
            },
            onCancel() { },
        });
    }

    const showNote = id => {
        confirm({
            title: 'Write a note',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleNote(id);
            },
            onCancel() { },
        });
    }

    const [note, setNote] = useState("");

    const handleNote = () => {
        setNote(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, note: item };
                }
                return item;
            })
        );

    };

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

            <Row className="todo">
                <Switch span={15} checked={todo.completed} onChange={(() => handleComplete(todo.id))} />
                <Typography.Text className={` ${todo.completed ? "completed" : ""}`} > {text}</Typography.Text>

                <List className="date">{dateString}</List>

                <Button type="danger" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </Button>
            </Row>
            {/* <Row>
                <List
                    dataSource={todos}
                    renderItem={
                        item => (
                            item.completed ?
                                <List.Item>
                                    <Row>
                                        <Space>
                                            <Switch checked={item.completed} onChange={(() => handleComplete(item.id))} />
                                            <Typography.Text className={` ${item.completed ? "completed" : ""}`} > {text}</Typography.Text>
                                            <Typography.Text className="date">{dateString}</Typography.Text>

                                            <Button type="danger" onClick={showDeleteConfirm}>
                                                <DeleteOutlined />
                                            </Button>
                                        </Space>
                                    </Row>
                                </List.Item> :
                                <List.Item>
                                    <Switch checked={item.completed} onChange={(() => handleComplete(item.id))} />
                                    <Typography.Text  > {text}</Typography.Text>
                                    <Typography.Text className="date">{dateString}</Typography.Text>
                                    <Button type="danger" onClick={showDeleteConfirm}>
                                        <DeleteOutlined />
                                    </Button>
                                </List.Item>
                        )
                    }
                />
            </Row>
            <Row>

            </Row> */}
            {/* <List
                dataSource={todos}
                renderItem={
                    item => (
                        item.completed ?
                            <List.Item>
                                <Typography.Text className={`todo-item ${item.completed ? "completed" : ""}`} > {text}</Typography.Text>
                                <Typography.Text className="date">{dateString}</Typography.Text>
                                <Button gutter={10} type="success" className="complete-btn" onClick={handleComplete}>
                                    <CheckCircleOutlined />
                                </Button>
                                <Button type="danger" onClick={showDeleteConfirm}>
                                    <DeleteOutlined />
                                </Button>
                            </List.Item> : null
                    )
                }
            /> */}
        </>
    );
};

export default Todo;
