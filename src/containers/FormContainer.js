import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/form.css';

export default function FormContainer(props) {
    const { open, handleClick, handleUserInfo } = props
    const [form, setForm] = useState('login')

    const handleForm = () => setForm(form === 'login' ? 'signup' : 'login')
    const formTitle = () => {
        return form === 'login' ? 'Login' : 'Sign Up'
    }

    const handleSubmit = () => {
        const fetchUser = async () => {
            try {
                const user = await (await fetch(`${URL}/${form}`)).json();
                handleUserInfo(user)
            } catch (err) {
                console.error(err);
            }
        }
        fetchUser();
    }

    return (
        <div className='form-container'>
            <div className={open ? 'container' : 'container hide'}>
                <div className='tabs'>
                    <button className='tab' onClick={handleForm}>Sign up</button>
                    <button className='tab' onClick={handleForm}>Login</button>
                </div>
                <form className='login-form'>
                    <input className="text-input" type="text" placeholder="Username" name="email" required />
                    <input type="password" placeholder="Password" name="psw" required />

                    <button type='submit' onClick={handleSubmit}>{formTitle()}</button>
                    <button type='button' onClick={handleClick}>Close Form</button>
                </form>
            </div>
        </div>
    )
}