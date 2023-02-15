import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-slate-900 text-slate-100 min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
