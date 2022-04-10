import React, { useState, useEffect } from "react";
import { Button, Modal, List, Row, Layout, Space, DatePicker, Typography, Checkbox, Switch } from "antd";
import { CheckCircleOutlined, DeleteOutlined, ExclamationCircleOutlined, DeleteTwoTone, EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment"

const Todo = ({ text, todo, todos, setTodos, date }) => {
    const dateString = dayjs().format('DD MMMM');
    const end = dayjs();

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

    const handleComplete = (id, end) => {
        const allTodos = [...todos];
        allTodos.forEach((item, index, list) => {
            if (item.id === todo.id) {
                if (item.completed) {
                    item.completed = false;
                } else {
                    item.completed = true;
                    item.end = end;
                    const duration = moment
                        .duration(end.diff(item.start))
                        .asHours();
                    item.duration = duration;
                }
                list[index] = item;
            }
        })
        setTodos(allTodos);
    };

    const handleDone = id => {
        confirm({
            title: 'Select your finish time',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleComplete(id, end);
            },
            onCancel() { },
            content: (
                <DatePicker
                    format="ddd, MMMM Do , h:mm:ss a"
                    showTime={{ defaultValue: dayjs() }}
                    defaultValue={end}
                    onChange={(dateString) => (end = dateString)}
                />
            ),
        });
    }

    return (
        <>
            {
                !todo.completed ?
                    <Row className="todo">
                        <Switch span={15} checked={todo.completed} onChange={(() => handleDone(todo.id))} />
                        <Typography.Text className={` ${todo.completed ? "completed" : ""}`} >
                            <Link style={{ color: "currentcolor" }} to={`/todo/${todo.id}`}>{text}</Link>
                        </Typography.Text>

                        <List className="date">{dateString}</List>

                        <Button type="danger" onClick={showDeleteConfirm}>
                            <DeleteOutlined />
                        </Button>
                    </Row> : null
            }
            {
                todo.completed ?
                    <Row className="todo">
                        <Switch span={15} checked={todo.completed} onChange={handleComplete} />
                        <Typography.Text className={` ${todo.completed ? "completed" : ""}`} >
                            <Link style={{ color: "currentcolor" }} to={`/todo/${todo.id}`}>{text}</Link>
                        </Typography.Text>

                        <List className="date">{dateString}</List>

                        <Button type="danger" onClick={showDeleteConfirm}>
                            <DeleteOutlined />
                        </Button>
                    </Row> : null
            }
        </>
    );
};

export default Todo;
