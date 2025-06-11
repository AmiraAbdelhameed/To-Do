import React, { useContext, useEffect, useReducer, useState } from "react";
import Header from "../Header/Header";
import ToDoItem from "../TodoItem/TodoItem";
import ThemeContext from "../../context/ThemeContext";
import Aside from "../Aside/Aside";
import ThemeToggler from "../Theme/ThemeToggler";

export const reducer = (state, action) => {
    switch (action.type) {
        case "add_task":
            const newTask = { title: action.payload, isCompleted: "todo", id: Date.now() };
            return {
                ...state,
                todos: [...state.todos, newTask],
            };
        case "delete_task":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case "edit_task":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id == action.payload.id ? { ...todo, title: action.payload.title } : todo),
            };
        case "status":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, isCompleted: action.payload.status }
                        : todo
                ),
            };
        case "undo":
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};

const ToDoApp = () => {
    let Tasks = JSON.parse(localStorage.getItem('tasks')) || {}
    const [state, dispatch] = useReducer(reducer, { todos: Tasks || [] });
    const [status, setStatus] = useState("all");
    const { theme } = useContext(ThemeContext)
    const [view, setView] = useState(localStorage.getItem("view") || "list");

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.todos))
    }, [state])
        useEffect(() => {
            localStorage.setItem("view", view);
        }, [view]);
      
    return (
        <>
            <div className={`container m-auto  w-[80%] flex flex-col`}>
                {/* <Aside listName={listName} /> */}
                {/* <Header state={state} dispatch={dispatch} status={status} setStatus={setStatus} Tasks={Tasks} listName={listName} setListName={setListName} /> */}
               <ThemeToggler />
                <Header state={state} dispatch={dispatch} status={status} setStatus={setStatus} Tasks={Tasks} view={view}
                    setView={setView} />
                <ToDoItem todos={state.todos} dispatch={dispatch} view={view} />
            </div>
        </>
    );
};

export default ToDoApp;
