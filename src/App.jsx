import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TeamToYou from './pages/TeamToYou';
import History from './pages/History';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teamtoyou" element={<TeamToYou />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
