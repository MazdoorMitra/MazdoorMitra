// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import WelcomeScreen from "./home/Welcome"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<WelcomeScreen/>} />
//         <Route path='/supervisor' element={<div>Supervisor Page</div>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeScreen from "./home/Welcome";
import Dashboard from "./supervisor/dashboard"
import './components';
import Login from './contractor/login';
import Signup from './contractor/signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomeScreen/>} />
                <Route path='/contractor/login' element={<Login/>} />
                <Route path='/contractor/signup' element={<Signup/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
