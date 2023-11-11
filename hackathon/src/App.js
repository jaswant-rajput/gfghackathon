import { Route,Routes } from 'react-router-dom';
import './App.css';

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

import AccountDetails from './components/students/AccountDetails'
import Notes from './components/students/Notes'
import Standing from './components/students/Standing'
import UpcomingEvents from './components/students/UpcomingEvents'
import StudentNav from './components/students/StudentNav';

import Attendence from './components/teacher/Attendence'
import MarksUpload from './components/teacher/MarksUpload'
import Quiz from './components/teacher/Quiz'
import TeacherNav from './components/teacher/TeacherNav';

import Classroom from './components/common/Classroom';
import Forum from './components/common/Forum';

function App() {
  return (
    <>
      <Login/> 
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/accountdetails' Component={AccountDetails}/>
        <Route path='/notes' Component={Notes}/>
        <Route path='/standing' Component={Standing}/>
        <Route path='/upcomingevents' Component={UpcomingEvents}/>
        <Route path='/attendence' Component={Attendence}/>
        <Route path='/marksupload' Component={MarksUpload}/>
        <Route path='/quiz' Component={Quiz}/>  
        <Route path='/studentnav' Component={StudentNav}/>  
        <Route path='/teachernav' Component={TeacherNav}/> 
        <Route path='/classroom' Component={Classroom}/>  
        <Route path='/forum' Component={Forum}/>       
      </Routes>
      
      </>
  );
}

export default App;
