// import React, { useContext }  from "react";
// import LangContext from "./LangContext";

// export const Switcher =()=> {
//     const { language, switchLanguage } = useContext(LangContext);

//     return (
//         <div>
//             <h3>{language.switchLanguage}</h3>
//             <select onChange={(e) => switchLanguage(e.target.value)} defaultValue="en">
//                 <option value="en">English</option>
//                 <option value="ar">Arabic</option>
//             </select>
//         </div>
//     );
//   }

// const language = {
//     en: {
//         greeting: 'Hello',
        
//     },
//     ar: {
//         greeting: 'مرحبا ',
//     },
//   };
// const Greeting =()=>{
//     const { language, switchLanguage } = useContext(LangContext);
// return (
//     <>
//         <h1>{}</h1>
//     </>
// )
// }
// export default Greeting;

import React, { useContext, useEffect, useRef, useState } from "react";
import LangContext from "./LangContext";

const translations = {
    en: {
        greeting: "Hello",
        switchLanguage: "Switch Language",
    },
    ar: {
        greeting: "مرحبا",
        switchLanguage: "تغيير اللغة",
    },
};

// Language Switcher Component
export const Switcher = () => {
    const { language, switchLanguage } = useContext(LangContext);

    return (
        <div>
            <h3>{translations[language].switchLanguage}</h3>
            <select onChange={(e) => switchLanguage(e.target.value)} value={language}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
            </select>
        </div>
    );
};

// Greeting Component
const Greeting = () => {
    const { language } = useContext(LangContext);
    const [text, setText] = useState('');
    const lastTextBox = useRef(''); // Box to save last text

    useEffect(() => {
        lastTextBox.current = text; // Save current text in the box
    }, [text]); // Run when text changes
  
    const myRef = useRef(1);
    const inc =()=>{
      myRef.current=  myRef.current+1
        console.log(myRef.current)
    }
    useEffect(()=>{
        
    },[inc])
    return (
        <>
            <h1>{translations[language].greeting}</h1>
            <h2>{myRef.current}</h2>
            <button onClick={inc}>inc</button>
            <h2>My Notes</h2>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a note..."
            />
            <button onClick={() => setText(lastTextBox.current)}>Undo</button>
            <p>Current: {text}</p>
            <p>Last: {lastTextBox.current}</p>
        </>
    );
};

export default Greeting;
