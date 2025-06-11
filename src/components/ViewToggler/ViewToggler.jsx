// import React, { useState } from "react";
// import { FaList } from "react-icons/fa";
// import { FaGripHorizontal } from "react-icons/fa";
// const ViewToggler = ({ view, setView })=>{
// //     let display = JSON.parse(localStorage.getItem('view')) ||'list'
// // let [view , setView] = useState(display);
// // localStorage.setItem('view',JSON.stringify(view));

// return(
//     <>
//     <button onClick={()=> setView(view=='list' ? 'grid': 'list')}>
//             {view == 'list' ? <FaGripHorizontal /> : <FaList />}
//     </button>
//     </>
// )
// }
// export default ViewToggler;

import { FaList, FaGripHorizontal } from "react-icons/fa";

const ViewToggler = ({ view, setView }) => {
    const toggleView = () => {
        setView(view === "list" ? "grid" : "list");
    };

    return (
        <button onClick={toggleView} className="p-2">
            {view === "list" ? <FaGripHorizontal /> : <FaList />}
        </button>
    );
};

export default ViewToggler;