import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/todolist.css'


export const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        let isMounted = true

        axios.get('http://127.0.0.1:8000/api/todos/')
        .then(res => {
            if (isMounted && res.status === 200){
                console.log(res.data)
                setTodoList(res.data)
            }
        })

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <>
            <div className="list-today">
                <h2>Today's To Dos:</h2>
                {todoList.map((todo, idx) => {
                    return (
                        <div className="todo-item" key={idx}>
                            <p>{todo.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

