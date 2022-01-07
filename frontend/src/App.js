import React from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { Nav } from './components/Nav';
import { TodoList } from './components/TodoList';
import { Calendar } from './components/Calendar';
import { Habits } from './components/Habits';
import { Settings } from './components/Settings';
import './styles/app.css'

export const App = () => {


    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/habits" element={<Habits />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </>
    );
}

