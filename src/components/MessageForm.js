import React, { useState } from 'react'

export default function MessageForm({ handleMessageSubmit }) {
    const [fields, setFields] = useState({ username: '', message: '' })

    const handleInput = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleMessageSubmit(fields)

        //clear fields
        setFields({ username: '', message: '' })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={fields.username} onChange={(e) => handleInput(e)} />
                </label>
                <label>
                    Message:
                    <input name="message" type="text" value={fields.message} maxLength="200" size="200" onChange={(e) => handleInput(e)} />
                </label>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}