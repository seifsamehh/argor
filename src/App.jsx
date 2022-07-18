import React , {useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';
import './App.css'
import { About, Activities, Contact, Header, Home, Process } from './components'

function App() {
  const location = useLocation();
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <>
    {
      loading?
      <ul className='animation'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      :
      <>
        <Header/>
        <main>
        <PageTransition
              preset="roomToBottom"
              transitionKey={location.pathname}
            >
          <Routes location={location}>
            <Route path='/' element={<Home/>}/>
            <Route path='/process' element={<Process/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </PageTransition>
        </main>
      </>
    }
    </>
  )
}

export default App
