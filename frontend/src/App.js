// // import logo from './logo.svg';
// // import './App.css';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import WelcomeScreen from "./home/Welcome"

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path='/' element={<WelcomeScreen/>} />
// //         <Route path='/supervisor' element={<div>Supervisor Page</div>} />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// // import React from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Dashboard from "./supervisor/dashboard"
// // import WelcomeScreen from "./home/welcome";
// // import './components';
// // import Login from './contractor/login';
// // import Signup from './contractor/signup';
// // import HomePage from './supervisor/dashboard';
// // import Register from './labour/register';
// // import AddLabourPage from './contractor/addlabour';
// // import Footer from './contractor/footer';
// // import Header from './contractor/Header';
// // import Labourers from './contractor/labourers';
// // import Overview from './contractor/overview';
// // import NewProject from './contractor/newproject';
// // import Contractordashboard from './contractor/Dashboard/dashboard';
// // import Attendance from './contractor/attendance';
// // import Profile from './labour/overview';
// // import SchemeDashboard from './labour/schemes';
// // import ProfilePage from './labour/profile';
// // import Chat from './contractor/Chat/main'

// // // import Register from './labour/register';
// // function App() {
    
// //     return (
// //         <BrowserRouter>
// //             <Routes>
// //                 <Route path='/' element={<WelcomeScreen/>} />
// //                 <Route path='/dashboard' element={<HomePage/>} />
// //                 <Route path='/contractor/login' element={<Login/>} />
// //                 <Route path='/contractor/signup' element={<Signup/>} />
// //                 <Route path='/labour/register' element={<Register/>} />
// //                 <Route path='/contractor/addlabourer' element={<AddLabourPage/>} />
// //                 <Route path='/footer' element={<Footer/>} />    
// //                 <Route path='/header' element={<Header/>} />
// //                 <Route path='/labourers' element={<Labourers/>} />    
// //                 <Route path='/contractor/project' element={<Overview/>} />  
// //                 <Route path='/contractor/newproject' element={<NewProject/>} /> 
// //                 <Route path='/contractor/dashboard' element={<Contractordashboard/>} />     
// //                 <Route path='/contractor/attendance' element={<Attendance/>} />  
// //                 <Route path='/labour/overview' element={<Profile/>} />   
// //                 <Route path='/labour/scheme' element={<SchemeDashboard/>} /> 
// //                 <Route path='/labour/profile' element={<ProfilePage/>} /> 
// //                 <Route path='/contractor/chat' element={<Chat/>} />  
// //             </Routes>
// //         </BrowserRouter>
// //     );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from "./supervisor/dashboard";
// import WelcomeScreen from "./home/welcome";
// import './components';
// import Login from './contractor/login';
// import Signup from './contractor/signup';
// import HomePage from './supervisor/dashboard';
// import Register from './labour/register';
// import AddLabourPage from './contractor/addlabour';
// import Footer from './contractor/footer';
// import Header from './contractor/Header';
// import Labourers from './contractor/labourers';
// import Overview from './contractor/overview';
// import NewProject from './contractor/newproject';
// import Contractordashboard from './contractor/Dashboard/dashboard';
// import Attendance from './contractor/attendance';
// import Profile from './labour/overview';
// import SchemeDashboard from './labour/schemes';
// import ProfilePage from './labour/profile';
// import Chat from './contractor/Chat/main';

// // Update paths to include dynamic parameters
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<WelcomeScreen />} />
//                 <Route path='/dashboard' element={<HomePage />} />
//                 <Route path='/contractor/login' element={<Login />} />
//                 <Route path='/contractor/signup' element={<Signup />} />
//                 <Route path='/labour/register' element={<Register />} />
//                 <Route path='/contractor/addlabourer' element={<AddLabourPage />} />
//                 <Route path='/footer' element={<Footer />} />
//                 <Route path='/header' element={<Header />} />
//                 <Route path='/labourers' element={<Labourers />} />
//                 <Route path='/contractor/project/:contractorId' element={<Overview />} />
//                 <Route path='/contractor/newproject/:contractorId' element={<NewProject />} />
//                 {/* <Route path='/contractor/dashboard/:projectId' element={<Contractordashboard />} /> */}
//                 <Route path='/contractor/dashboard/:contractorId/:projectId' element={<Contractordashboard />} />
//                 <Route path='/contractor/attendance' element={<Attendance />} />
//                 <Route path='/labour/overview' element={<Profile />} />
//                 <Route path='/labour/scheme' element={<SchemeDashboard />} />
//                 <Route path='/labour/profile' element={<ProfilePage />} />
//                 <Route path='/contractor/chat' element={<Chat />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./supervisor/dashboard";
import WelcomeScreen from "./home/welcome";
import './components';
import Login from './contractor/login';
import Signup from './contractor/signup';
import HomePage from './supervisor/dashboard';
import Register from './labour/register';
import AddLabourPage from './contractor/addlabour';
import Footer from './contractor/footer';
import Header from './contractor/Header';
import Labourers from './contractor/labourers';
import Overview from './contractor/overview';
import NewProject from './contractor/newproject';
import Contractordashboard from './contractor/Dashboard/dashboard';
import Attendance from './contractor/attendance';
import Profile from './labour/overview';
import SchemeDashboard from './labour/schemes';
import ProfilePage from './labour/profile';
import Chat from './contractor/Chat/Chat';
import LabourerDashboard from './labour/Dashboard'
import labourChat from './labour/Chat'

// Update paths to include dynamic parameters
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomeScreen />} />
                <Route path='/dashboard' element={<HomePage />} />
                <Route path='/contractor/login' element={<Login />} />
                <Route path='/contractor/signup' element={<Signup />} />
                <Route path='/labour/register' element={<Register />} />
                <Route path='/contractor/addlabourer/:contractorId/:projectId' element={<AddLabourPage />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/header' element={<Header />} />
                <Route path='/contractor/labourers/:contractorId/:projectId' element={<Labourers />} />
                <Route path='/contractor/project/:contractorId' element={<Overview />} />
                <Route path='/contractor/newproject/:contractorId' element={<NewProject />} />
                <Route path='/contractor/dashboard/:contractorId/:projectId' element={<Contractordashboard />} />
                {/* <Route path='/contractor/attendance' element={<Attendance />} /> */}
                <Route path='/contractor/attendance/:contractorId/:projectId' element={<Attendance />} />
                <Route path="/labour/dashboard/:labourerId" element={<LabourerDashboard />} />
                <Route path='/labour/overview/:labourerId' element={<Profile />} />
                <Route path='/labour/scheme/:labourerId' element={<SchemeDashboard />} />
                <Route path='/labour/profile' element={<ProfilePage />} />
                <Route path='/contractor/chat/:contractorId/:projectId' element={<Chat />} />
                <Route path='/labour/chat/:labourerId' element={<labourChat/>} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;

