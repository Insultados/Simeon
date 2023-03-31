import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Schedule from "./pages/Schedule/Schedule";
import Simeon from "./pages/Simeon/Simeon";
import Contact from "./pages/Contact/Contact";
import History from "./pages/History/History";
import School from "./pages/School/School";
import Clergy from "./pages/Clergy/Clergy";
import Post from "./pages/Post/Post";
import Album from "./pages/Album/Album";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/history' element={<History />} />
            <Route path='/simeon' element={<Simeon />} />
            <Route path='/clergy' element={<Clergy />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/school' element={<School />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/album' element={<Album />} />
            <Route path='/post' element={<Post />} />
            <Route path="*" element={<h3>Страница не существует или была удалена! Проверьте корректность вашего URL</h3>} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
