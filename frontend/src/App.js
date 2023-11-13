import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import AccountDetails from "./components/students/AccountDetails";
import Notes from "./components/students/Notes";
import Standing from "./components/students/Standing";
import UpcomingEvents from "./components/students/UpcomingEvents";
import StudentNav from "./components/students/StudentNav";
import StudentHome from "./components/students/StudentHome";

import Attendence from "./components/teacher/Attendence";
import MarksUpload from "./components/teacher/MarksUpload";
import Quiz from "./components/teacher/Quiz";
import TeacherNav from "./components/teacher/TeacherNav";
import TeacherHome from "./components/teacher/TeacherHome";

import Classroom from "./components/common/Classroom";
import Forum from "./components/common/Forum";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [authenticated,setAuthenticated]=useState(false);

  const navigate=useNavigate();

  const handleSignUpClick = (entity) => {
    if (entity == "student") {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
    setAccount(false);
  };
  const handleLoginClick = (entity) => {
    if (entity == "student") {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
    setAccount(true);
  };

  const handleAuthentication = () => {
    setAuthenticated(true);
  }

  return (
    <>
    {/* {authenticated ? (
      isStudent ? (
        <StudentHome/>
      ):(
        <TeacherHome/>
      )
      
    ):(
      account ? (
        <Login onSignUpClick={handleSignUpClick} student={isStudent} setIsStudent={setIsStudent} handleAuthentication={handleAuthentication}/>
      ) : (
        <Signup onLoginClick={handleLoginClick} student={isStudent} setIsStudent={setIsStudent} handleAuthentication={handleAuthentication}/>
      )
    )} */}
      

      <Routes>
        <Route
          path="/login"
          element={
            <Login onSignUpClick={handleSignUpClick} student={isStudent} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup onLoginClick={handleLoginClick} student={isStudent} />
          }
        />
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/teacherhome" element={<TeacherHome />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/standing" element={<Standing />} />
        <Route path="/upcomingevents" element={<UpcomingEvents />} />
        <Route path="/attendance" element={<Attendence />} />
        <Route path="/marksupload" element={<MarksUpload />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/studentnav" element={<StudentNav />} />
        <Route path="/teachernav" element={<TeacherNav />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  );
}

export default App;
