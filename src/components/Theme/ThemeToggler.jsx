import React, { useContext , useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";


const ThemeToggler =()=>{
    const {theme , setTheme}=useContext(ThemeContext);
   localStorage.setItem('theme', JSON.stringify(theme))
return(
    <>
        <button className="self-end mt-8" onClick={() => setTheme(theme == 'Light' ? 'dark' : 'Light')}>{theme == 'Light' ? <IoMoonOutline /> : <FiSun />}</button>


    </>
)
}
export default ThemeToggler;