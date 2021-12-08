import React from 'react';
import { Nav } from './components/Nav';
import { TodoList } from './components/TodoList';
import './styles/app.css'

export const App = () => {


    return (
        <>
            <Nav />
            <TodoList />
        </>
    );
}

