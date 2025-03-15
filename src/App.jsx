import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamToYou from './pages/TeamToYou'
import History from './pages/History'
import Notfound from './pages/Notfound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/teamtoyou' element={<TeamToYou/>}/>
      <Route path='/history' element={<History/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default App;