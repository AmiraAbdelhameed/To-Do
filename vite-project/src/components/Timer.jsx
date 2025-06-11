import React, { useState, useEffect } from 'react';

function QuizTimer() {
    const [seconds, setSeconds] = useState(5);
    const [start, setStart] = useState(false)

    useEffect(() => {
        // Start a timer
        const timer = setInterval(() => {
            if (start == true) {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer); 
                        return 0;
                    }
                    return prev - 1;
                });
            }
        }, 1000);
        console.log(start)
        return () => clearInterval(timer);
    }, [start]); 
    return (
        <div>
            <h2>Quiz Timer</h2>
            <button onClick={() => setStart(start => !start)}>{start ? "Stop" : "Start"}</button>
            <button onClick={()=> {setSeconds(seconds => seconds=5 ) ; setStart(start=> start=false )}}>Reset</button>
            <p>Time left: {seconds} seconds</p>
            {seconds === 0 && <p>Time's up!</p>}
        </div>
    );
}

export default QuizTimer;