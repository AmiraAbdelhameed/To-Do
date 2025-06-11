import React, { useEffect, useReducer, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";


const FilterButtons = ({ dispatch, todo, value }) => {
let color = '' ;
switch(value){
    case'completed':
        color='green-700'
        break;
    case 'inprogress':
        color='amber-400'
        break;
    default:
        color='primary'

}
    return (
        <>
            <select 
                className={`select2-dropdown text-${color}` }
                value={value}
                onChange={(e) =>
                    dispatch({
                        type: "status",
                        payload: { id: todo.id, status: e.target.value },
                    })
                }
            >
                <option value="todo" className="text-primary">To Do</option>
                <option value="inprogress" className="text-amber-400">In Progress</option>
                <option value="completed" className="text-green-700">Completed</option>
            </select>

        </>
    )
}
export const FilterList = ({ dispatch, todo, value }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleStatusChange = (status) => {
        dispatch({
            type: "status",
            payload: { id: todo.id, status },
        });
        setShowMenu(false);
    };
    return (
        <>
            <button onClick={() => setShowMenu(prev => !prev)} className="self-end" ><CiMenuKebab /></button>
            {showMenu && (
            <ul 
                    className={`absolute z-10 mt-2 w-32 bg-white border rounded shadow text-sm `}

            >
                    <li onClick={() => handleStatusChange("todo")} value="todo" className="text-primary cursor-pointer p-2 hover:bg-gray-100">To Do</li>
                    <li onClick={() => handleStatusChange("inprogress")} value="inprogress" className="text-amber-400 cursor-pointer p-2 hover:bg-gray-100">In Progress</li>
                    <li onClick={() => handleStatusChange("completed")} value="completed" className="text-green-700 cursor-pointer p-2 hover:bg-gray-100">Completed</li>
            </ul>
            )}

        </>
    )
}

export default FilterButtons;