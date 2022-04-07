import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Space, Input, List, Button, Tooltip } from 'antd';
import { CommentOutlined, ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';
import saveLocalTodos from '../../App';
import getLocalTodos from '../../App';

const TodoNote = () => {
    const [note, setNote] = useState('');
    const [comment, setComment] = useState('');
    const [changed, setChanged] = useState(false);

    const handleNote = (e) => {
        setNote(e.target.value);
    };

    // const addComment = (e) => {
    //     todo.comments
    //         ? setTodo({ ...todo, comments: [...todo.comments, e.target.value] })
    //         : setTodo({ ...todo, comments: [e.target.value] });
    //     setComment('');
    //     setChanged(true);
    // };

    const handleComment = (e) => {
        setComment(e.target.value);
    };



    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Input.TextArea
                    showCount
                    maxLength={150}
                    placeholder="Todo Note"
                    value={note}
                    onChange={handleNote}
                />

                <Input.TextArea
                    placeholder="Comment"
                    value={comment}
                    onChange={handleComment}
                />
            </Card>

        </>
    );
}

export default TodoNote;