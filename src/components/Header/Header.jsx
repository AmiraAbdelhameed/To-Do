import React, { useReducer, useState, useRef, useCallback ,useEffect } from "react";
import '../../index.css'
import { GrUndo } from "react-icons/gr";
import { FaList } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import ViewToggler from "../ViewToggler/ViewToggler";
const Header = ({ state, dispatch, status, listName, setListName, view, setView }) => {
    const [toDo, setToDo] = useState('');
    const prevTodos = useRef([]);
   

  
    const addTask = useCallback(() => {
        if (toDo.trim()) {
            prevTodos.current = [...state.todos];
            dispatch({ type: 'add_task', payload: toDo })
            setToDo('')
            dispatch({ type: 'filter', payload: status });

        }
    }, [toDo])
    const undo = () => {
        if (prevTodos.current.length > 0) {
            dispatch({ type: "undo", payload: prevTodos.current })
        }
    }
    // const saveListName=(e)=>{
    //     setListName(e.target.value);
    // }
    return (

        <>
            <div className="text-center">

                <h1 className="text-primary text-3xl font-bold text-center my-4">Your To Do List</h1>
                <div className="flex items-center ">
                    <div className="flex-0.5">
                        <button onClick={undo} ><GrUndo /></button>
                        <ViewToggler view={view} setView={setView} />
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="flex-8">
                        <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder="Task " className="w-[60%] md:w-[80%] input-text" />
                        <button className="add-btn" onClick={addTask}>Add Task</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Header;