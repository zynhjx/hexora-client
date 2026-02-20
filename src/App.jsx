import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing from './components/pages/landing/Landing'
import Register from './components/pages/auth/Register'
import Login from './components/pages/auth/Login'
import Layout from './components/layout/Layout'
import Dashboard from './components/pages/dashboard/Dashboard'
import Training from './components/pages/training/Training'
import Challenge from './components/pages/challenge/Challenge'
import Leaderboard from './components/pages/leaderboard/Leaderboard'
import ModuleInfo from './components/pages/moduleinfo/ModuleInfo'
import Lesson from './components/pages/lesson/Lesson'

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
