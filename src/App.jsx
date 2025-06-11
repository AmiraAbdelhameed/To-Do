import { useState } from 'react'
import './App.css'
import ToDoApp from './components/ToDoApp/ToDoApp'
import ThemeContext from './context/ThemeContext'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  let storedTheme = JSON.parse(localStorage.getItem('theme'))

  const [theme, setTheme] = useState(storedTheme || 'Light');

  return (
    <>
      <DndProvider backend={HTML5Backend}>
      <div className={`${theme} min-h-screen dark:bg-zinc-800 dark:text-white mb-4 `}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ToDoApp />
      </ThemeContext.Provider>
      </div>
      </DndProvider>
    </>
  )
}

export default App
