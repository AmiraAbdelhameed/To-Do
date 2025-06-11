import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "add_task":
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
            };
            break;
        case "delete_todo":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
                
            };
            break
        case "toggle_todo":
            return{
                ...state,
                todos: state.todos.map((todo) => todo.id == action.payload ? { ...todo, completed: !todo.completed }: todo)
            };
            break
    }

}

const ToDo = () => {
  localStorage.setItem("Tasks" , "[]") ;
    const [state, dispatch] = useReducer(reducer, { todos: [] })
    const [task, setInput] = useState('');
    
    const addTodo = () => {
        if (task.trim()) {
            dispatch({ type: 'add_task', payload: task });
            setInput('');
       
        }
    };
    return (
        <>
            <h3>To Do list app</h3>
            <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" value={task} onChange={(e) => setInput(e.target.value )} />
            <button onClick={addTodo} >Add Task</button>
            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ color: todo.completed ? 'green' : 'black' }}
                            onClick={() => dispatch({ type: 'toggle_todo', payload: todo.id })}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'delete_todo', payload: todo.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            </form>
        </>
    )
}

export default ToDo;

