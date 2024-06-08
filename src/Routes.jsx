import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./studentList";

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentList/>}/>            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;