import React, { useCallback, useEffect , useState } from "react";
import FilterButtons, { FilterList } from "../FilterButtons/FilterButtons";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const ToDoItem = ({ todos, dispatch, view }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const viewItem =
        view === "grid" ? "h-[200px] border-2 border-primary p-4 rounded-2xl flex flex-col justify-between" : "flex justify-between";

    const viewCategory =
        view === "grid" ? "grid grid-cols-3 gap-6 px-4" : "flex flex-col gap-6 px-4";

    const ViewList =
        view === "grid" ? " grid grid-cols-1  md:grid-cols-2 gap-6 " : "w-[80%] m-auto";
    const Tasks = (state) =>
        todos
            .filter(todo => todo.isCompleted === state)
            .map(todo => (
                view == 'grid' ?
                    <li className={`dark-list-item  ${viewItem}  `}
                        key={todo.id}>
                        <div className="flex flex-col" >
                            <FilterList todo={todo} dispatch={dispatch} value={todo.isCompleted} />
                            <p className="w-[100%] ">
                                {todo.title}

                            </p>

                        </div>
                        <div className="flex justify-between">
                            <button className="text-primary mx-4" onClick={() => openEditModal(todo)}>
                                <FaRegEdit />
                            </button>
                            <button className="text-red-800" onClick={() => dispatch({ type: "delete_task", payload: todo.id })}>
                                <FaTrashAlt />
                            </button>
                            
                        </div>
                    </li>
                    :
                    <li className={`dark-list-item  ${viewItem}`}
                        key={todo.id}>
                        {todo.title}
                        <div>
                            <FilterButtons todo={todo} dispatch={dispatch} value={todo.isCompleted} />
                            <button className="text-primary mx-4" onClick={() => openEditModal(todo)}>
                                <FaRegEdit />

                            </button>
                            <button className="text-red-800" onClick={() => dispatch({ type: "delete_task", payload: todo.id })}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    </li>
            ));
    // const editTask = useCallback((todo) => {
    //     let newTitle = prompt('edit')
    //     dispatch({ type: "edit_task", payload: { id: todo.id, title: newTitle } })
    // }, [todos])
    const openEditModal = (todo) => {
        setCurrentTask(todo);
        setNewTitle(todo.title);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (newTitle.trim()) {
            dispatch({ type: "edit_task", payload: { id: currentTask.id, title: newTitle } });
        }
        setIsModalOpen(false);
    };
      
    return (
        <>
            <div className={viewCategory}>
                <div className={`to_do `} >
                    <h2 className="headers text-primary" >To Do</h2>
                    <ul className={` ${ViewList}`}>{Tasks("todo")}</ul>
                    {view == 'grid' ? null : <hr className="my-4 border-gray-300 col-span-full" />}

                </div>

                <div className="inprogress">
                    <h2 className="headers text-amber-600">In Progress</h2>
                    <ul className={` ${ViewList}`}>{Tasks("inprogress")}</ul>
                </div>
                {view === 'grid' ? (
                    null
                ) : (
                    <hr className="my-4 border-gray-300 col-span-full" />
                )}
                <div className="done">
                    <h2 className="headers text-green-900">Completed</h2>
                    <ul className={` ${ViewList}`}>{Tasks("completed")}</ul>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[50%] ">
                        <h2 className="text-lg font-semibold mb-4 dark:text-black">Edit Task</h2>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded mb-4 dark:text-black"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-primary text-white rounded "
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default ToDoItem;
