import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentListapp from "../src/pages/students/App.jsx";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/login.jsx";
import Protectedroutes from "./protectedroutes.jsx";
import TeachersApp from "./pages/teachers/app.jsx";
import Home from "./pages/home/home.jsx";

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}  />  
                <Route path="/students" element={<Protectedroutes component={<StudentListapp />} />}/>
                <Route path="/teachers" element={<Protectedroutes component={<TeachersApp />} />}/>
                <Route path='/register' element={<Register />}  />
                <Route path='/login' element={<Login />}  />           
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;