import React from 'react'
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "../../Screens/Home/Home"
import Login from '../../Screens/Login/Login';
import StudentLogin from '../../Screens/Login/StudentLogin/StudentLogin';
import StudentPortalPage from '../../Screens/StudentPortalSection/StudentPortal'
import SubjectsElectives from '../../Screens/StudentPortalSection/Subjects&Electives';
import Documents from '../../Screens/StudentPortalSection/Documents';
import FeePayments from '../../Screens/StudentPortalSection/FeePayments';


const Router = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='loginadmin' element={<Login/>} />
   <Route path='loginstudent' element={<StudentLogin/>} />
   <Route path='studentpage' element={<StudentPortalPage/>} />
   <Route path='subjectsandelectives' element={<SubjectsElectives/>} />
   <Route path='documents' element={<Documents/>} />
   <Route path='feepayments' element={<FeePayments/>} />
   </Routes>
   
   
   </BrowserRouter>
   
   </>
  )
}

export default Router