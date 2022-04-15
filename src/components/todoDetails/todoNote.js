import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Space, Input, List, Row, Button } from 'antd';
import { CommentOutlined, LeftCircleFilled } from '@ant-design/icons';

import Comment from './comment';
import getLocalTodos from '../getLocalTodos';
import saveLocalTodos from '../SaveLocalTodos';
import moment from 'moment';

const TodoDetails = () => {
    const [todo, setTodo] = useState({});
    const [comment, setComment] = useState('');
    const [changed, setChanged] = useState(false);
    const [note, setNote] = useState('');
    const [test, setTest] = useState(false);

    const navigate = useNavigate();
    const id = parseInt(useParams().id);

    const addComment = (e) => {
        todo?.comments
            ? setTodo({ ...todo, comments: [...todo.comments, e.target.value] })
            : setTodo({ ...todo, comments: [e.target.value] });
        setComment('');
        setChanged(true);
    };

    const updateNote = () => {
        setTodo({ ...todo, note: note });
        setChanged(true);
    };

    const onDeleteComment = (comment) => {
        const allComments = [...todo.comments];
        const newComments = allComments.filter((item) => item !== comment);
        setTodo({ ...todo, comments: newComments });
        setChanged(true);
    };

    const handleNote = (e) => {
        setNote(e.target.value);
    };

    const handleComment = (e) => {
        setComment(e.target.value);
    };


    useEffect(() => {
        if (changed) {
            const todos = getLocalTodos();
            todos.forEach((item, i, list) => {
                if (item.id === id) {
                    list[i] = todo;
                }
            });
            saveLocalTodos(todos); // Update localstorage
        }
    }, [todo, changed, id]);


    useEffect(() => {
        const todos = getLocalTodos();
        console.log(todos);
        if (todos) setTest(true);
        const todo = todos?.find((item) => item.id === id);
        if (todo?.note) {
            setNote(todo.note);
        }
        setTodo(todo); // set current todo
    }, [test]);

    return (
        <Row>
            <LeftCircleFilled style={{ fontSize: '30px', marginLeft: '20%', marginTop: '2%' }} onClick={() => navigate(-1)} />
            <Space
                direction="horizontal"
                style={{ width: '100%', justifyContent: 'center' }}
            >
                <Card title={todo?.title} bordered={false} style={{ width: '50vw' }}>
                    {todo?.duration ? <h4>Time taken: {moment.duration(todo?.duration, 'minutes').humanize()}</h4> : null}
                    <Input.TextArea
                        rows={6}
                        showCount
                        maxLength={150}
                        placeholder="Todo Note"
                        value={note}
                        onPressEnter={updateNote}
                        onChange={handleNote}
                    />

                    <Input.TextArea
                        placeholder="Comment"
                        value={comment}
                        onChange={handleComment}
                        onPressEnter={addComment}
                    />

                    {todo?.comments && todo?.comments.length ? (
                        <List
                            itemLayout="vertical"
                            dataSource={todo.comments}
                            renderItem={(item) => (
                                <List.Item>
                                    <Comment comment={item} onDeleteComment={onDeleteComment} />
                                </List.Item>
                            )}
                        />
                    ) : null}
                </Card>
            </Space>
            {/* <button onClick={() => history.goBack()}>Back</button>? */}

        </Row>
    );
};

export default TodoDetails;
