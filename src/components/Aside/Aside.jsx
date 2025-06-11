import React from "react";

const Aside = ({ listName }) => {
    const saveList = () => {

    }
    return (
        <>
            <aside>
                <h2>My Lists</h2>
                <button onClick={saveList}>Add new List</button>
                <ul>
                    <li>{listName}</li>
                </ul>
            </aside>
        </>
    )
}
export default Aside;