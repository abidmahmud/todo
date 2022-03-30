import React, { useState } from "react";
import moment from "moment";
import { Button, Modal, List, Row, Layout, Space, DatePicker } from "antd";
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
                <List
                    className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                    {text}
                </List>
                <List className="date">{dateString}</List>

                <Button gutter={10} type="success" className="complete-btn" onClick={handleComplete}>
                    <CheckCircleOutlined />
                </Button>
                <Button gutter={10} type="primary" danger ghost onClick={showNote}>
                    <EditOutlined />
                </Button>
                <Button type="danger" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </Button>
            </Row>



        </>
    );
};

export default Todo;
