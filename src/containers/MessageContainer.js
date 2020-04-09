import React, { useState } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

export default function MessageContainer() {
    const [log, setLog] = useState([])

    const handleMessageSubmit = (message) => {
        socket.emit('message', {
            message
        })
        setLog([...log, message])
    }

    return (
        <div>
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
            {log.map((m, i) => <Message key={i} {...m} />)}
        </div >
    )
}