import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile} />
            <Route path='/dialogs' Component={Dialogs} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;