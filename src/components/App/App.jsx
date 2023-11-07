import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import About from '../About/About.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/allstudents">All Students</Link></li>
                    </ul>
                </nav>
                <Route exact path="/"><StudentForm /></Route>
                <Route exact path="/allstudents"><StudentList /></Route>
                <Route exact path="/about"><About /></Route>
            </Router>
        </div>
    );
}

export default App;
