import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Space, Input, List, Tooltip, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import getLocalTodos from '../getLocalTodos';
import saveLocalTodos from '../SaveLocalTodos';

const TodoDetails = () => {
    const [todo, setTodo] = useState({});
    const [comment, setComment] = useState('');
    const [changed, setChanged] = useState(false);
    const [note, setNote] = useState('');

    const id = parseInt(useParams().id);

    const handleNote = (e) => {
        setNote(e.target.value);
    };

    const handleComment = (e) => {
        setComment(e.target.value);
    };

    const addComment = (e) => {
        todo.comments
            ? setTodo({ ...todo, comments: [...todo.comments, e.target.value] })
            : setTodo({ ...todo, comments: [e.target.value] });
        setComment('');
        setChanged(true);
    };

    const onDeleteComment = (comment) => {
        const allComments = [...todo.comments];
        const newComments = allComments.filter((item) => item !== comment);
        setTodo({ ...todo, comments: newComments });
        setChanged(true);
    };

    useEffect(() => {
        if (changed) {
            const todos = getLocalTodos();
            todos.forEach((item, i, list) => {
                if (item.id === id) {
                    list[i] = todo;
                }
            });
            saveLocalTodos(todos);
        }
    }, [todo, changed, id]);

    useEffect(() => {
        const todos = getLocalTodos();
        const todo = todos.find((todo) => todo.id === id);
        setTodo(todo);
    }, []);

    return (
        <Space
            direction="horizontal"
            style={{ width: '100%', justifyContent: 'center' }}
        >
            <Card bordered={false} style={{ width: '50vw' }}>


                <Input.TextArea
                    rows={6}
                    showCount
                    maxLength={100}
                    placeholder="Write a note"
                    value={note}
                    onChange={handleNote}
                />

                <Input.TextArea
                    placeholder="Comment"
                    value={comment}
                    onChange={handleComment}
                />
                <Button
                    onClick={addComment}
                >Add</Button>

                {todo.comments && todo.comments.length ? (
                    <List
                        itemLayout="vertical"
                        dataSource={todo.comments}
                        renderItem={(item) => (
                            <List.Item>
                                <Space>
                                    {comment}
                                    <Tooltip title="Delete">
                                        <Button
                                            shape="default"
                                            size="small"
                                            onClick={() => onDeleteComment(comment)}
                                        ><DeleteOutlined /></Button>
                                    </Tooltip>
                                </Space>
                            </List.Item>
                        )}
                    />
                ) : null}
            </Card>
        </Space>
    );
};

export default TodoDetails;
