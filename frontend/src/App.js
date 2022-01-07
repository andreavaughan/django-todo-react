import React from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { Nav } from './components/Nav';
import { TodoList } from './components/TodoList';
import './styles/app.css'

export const App = () => {


    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<TodoList />} />
                </Routes>
            </Router>
        </>
    );
}

