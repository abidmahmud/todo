import React from "react";
import moment from "moment";
import { Button, Modal, List } from "antd";
import { CheckCircleOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const Todo = ({ text, todo, todos, setTodos, date }) => {
    const now = new Date();
    const dateString = moment(now).format("DD-MM-YYYY");

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
                <Button className="complete-btn" onClick={handleComplete}>
                    <CheckCircleOutlined />
                </Button>
                <Button className="trash-btn" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </Button>
            </div>

            {/* <List
                dataSource={todos}
                renderItem={
                    item => (
                        <List.Item>{item}</List.Item>
                    )}
            /> */}
        </>
    );
};

export default Todo;
