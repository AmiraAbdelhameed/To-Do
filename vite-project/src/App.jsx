import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizTimer from './components/Timer'
import Chat from './components/Chat'
import TooltipButton from './components/TooltipButton'
import AutoResizeTextarea from './components/AutoResizeTextarea'
import Header from './components/Header'
import ThemeContext from './components/ThemeContext'
import AuthContext from './components/AuthContext'
import Profile from './components/Profile'
import LangContext from './components/LangContext'
import Greeting, { Switcher } from './components/Greeting'
import ToDo from './components/ToDo'
import CheckoutForm from './components/CheckoutForm'
import ProductFilter from './components/ProductFilter'
import CartTotal from './components/CartTotal'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');
  const [user, setLogged] = useState({ name: 'Amira', isLoggedIn: true })
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const toggleLogging = () => {
    setLogged(user.name = "",  user.isLoggedIn = false)
    console.log(user.isLoggedIn)
  }
  const [language, setLanguage] = useState('en');
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
    <LangContext.Provider value={{language , switchLanguage}}>

      <AuthContext.Provider value={{ user, toggleLogging }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Profile />
          <QuizTimer />
          <Chat />
          <TooltipButton />
          <AutoResizeTextarea />
          <Header />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext.Provider>
        <Switcher />
<Greeting />
<ToDo />
          <CheckoutForm />
          <ProductFilter />
          <CartTotal />
      </AuthContext.Provider>
    </LangContext.Provider>
    </>
  )
}

export default App
