import React, { useState, useEffect } from 'react';

function Chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Set up the WebSocket subscription
        const socket = new WebSocket('wss://echo.websocket.org'); // Example WebSocket server

        // When the WebSocket connection opens
        socket.onopen = () => {
            console.log('WebSocket connected');
            socket.send('Hello, WebSocket!');
        };

        // When a message is received
        socket.onmessage = (event) => {
            setMessages(prevMessages => [...prevMessages, event.data]);
        };

        // Handle errors
        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Cleanup function to close the WebSocket
        return () => {
            socket.close();
            console.log('WebSocket disconnected');
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <h2>Messages:</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export default Chat;