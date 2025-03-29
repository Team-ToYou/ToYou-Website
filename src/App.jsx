import '@/App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main/MainPage';
import TeamToYou from '@/pages/TeamToYou/TeamToYouPage';
import History from '@/pages/History/HistoryPage';
import Notfound from '@/pages/Notfound/NotfoundPage';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
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
