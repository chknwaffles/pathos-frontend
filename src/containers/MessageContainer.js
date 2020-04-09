import React, { useState } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

export default function MessageContainer() {
    const [log, setLog] = useState([])

    const handleMessageSubmit = (message) => {
        setLog([...log, message])
    }

    return (
        <div className='message-container'>
            {log.map((m, i) => <Message key={i} {...m} />)}
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
        </div >
    )
}