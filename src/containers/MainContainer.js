import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers.css';

export default function MainContainer() {
    return (
        <div className='main-container'>
            <h1>
                Welcome to PathOS!
            </h1>

            <Link to='/signup'>Sign up here</Link>
            <Link to='/login'>Login here</Link>
        </div>
    )
}