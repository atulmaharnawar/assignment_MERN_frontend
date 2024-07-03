
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';
import Navbar from './components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
          <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route exact path="/userhome" element={<UserHome/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
