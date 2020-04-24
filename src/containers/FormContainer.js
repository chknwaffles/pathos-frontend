import React, { useState } from 'react';
import '../styles/form.css';

const URL = process.env.REACT_URL || "http://localhost:5000"

export default function FormContainer(props) {
    const { open, handleClick, handleUserInfo } = props
    const [form, setForm] = useState('signup')
    const [fields, setFields] = useState({ username: '', password: '' })

    const handleForm = () => setForm(form === 'login' ? 'signup' : 'login')
    const formTitle = () => {
        return form === 'login' ? 'Login' : 'Sign Up'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields),
            }

            const userRes = (await fetch(`${URL}/users/${form}`, config)).json();
            console.log(userRes);

            handleUserInfo(userRes);
            handleClick();
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    return (
        <div className='form-container'>
            <div className={open ? 'container' : 'container hide'}>
                <div className='tabs'>
                    <button className='tab' onClick={handleForm}>Sign up</button>
                    <button className='tab' onClick={handleForm}>Login</button>
                </div>
                <form className='login-form' onSubmit={handleSubmit} >
                    <input className="text-input" type="text" value={fields.username} placeholder="Username" name="username" onChange={handleChange} required />
                    <input type="password" placeholder="Password" value={fields.password} name="password" onChange={handleChange} required />

                    <button type='submit' value="submit">{formTitle()}</button>
                    <button type='button' onClick={handleClick}>Close Form</button>
                </form>
            </div>
        </div>
    )
}