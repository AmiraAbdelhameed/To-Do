import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

function AutoResizeTextarea() {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        // Reset height to auto to get accurate scrollHeight
        textarea.style.height = 'auto';
        // Set height based on content
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [text]); // Run when text changes

    return (
        <div>
            <h2>Chat Input</h2>
            <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
            />
        </div>
    );
}

export default AutoResizeTextarea;