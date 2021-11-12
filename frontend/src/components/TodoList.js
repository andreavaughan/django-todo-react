import React, {useState, useEffect} from 'react';
import axios from 'axios';


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
            <h2>List:</h2>
            {todoList.map((todo, idx) => {
                return (
                    <div className="todo-item" key={idx}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                )
            })}
        </>
    );
}

