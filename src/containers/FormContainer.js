import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/form.css';

export default function FormContainer() {
    const [form, setForm] = useState('login')
    const history = useHistory()

    const handleForm = () => setForm(form === 'login' ? 'signup' : 'login')
    const formTitle = () => {
        return form === 'login' ? 'Login' : 'Sign Up'
    }

    return (
        <div className='form-container'>
            <div className='container'>
                <div className='tabs'>
                    <button className='tab' onClick={handleForm}>Sign up</button>
                    <button className='tab' onClick={handleForm}>Login</button>
                </div>
                <form className='login-form'>
                    <h2>{formTitle()}</h2>
                    <input type="text" placeholder="Username" name="email" required />
                    <input type="password" placeholder="Password" name="psw" required />

                    <button type='submit'>{formTitle()}</button>
                    <button type='button' onClick={history.goBack}>Go Back</button>
                </form>
            </div>
        </div>
    )
}