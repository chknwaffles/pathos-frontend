import React, { useState } from 'react';

export default function FormContainer() {
    const [form, setForm] = useState('login')

    return (
        <div className='form-container'>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button className='button is-success'>
                        Login
                    </button>
                    <button className='button is-light'>
                        Go Back
                    </button>
                </p>
            </div>
        </div>
    )
}