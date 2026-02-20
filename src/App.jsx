import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Training from './components/Training'
import Challenge from './components/Challenge'
import Leaderboard from './components/Leaderboard'
import ModuleInfo from './components/ModuleInfo'
import Lesson from './components/Lesson'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/my-progress' element={<Dashboard />} />
        <Route path='/achievements' element={<Leaderboard />} />
        <Route path='/certificates' element={<Training />} />
        <Route path='/training' element={<Training />} />
        <Route path='/training/module/:moduleId' element={<ModuleInfo />} />
        <Route path='/training/module/:moduleId/lesson/:lessonId' element={<Lesson />} />
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Route>
    </Routes>
    
  )
}

export default App;
