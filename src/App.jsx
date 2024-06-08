import { useEffect , useState} from 'react';
import './App.css'
import StudentList from './studentList'
import { getallstu } from './apis';

function App() {
  
  const [students, setstudents] =useState([]);

  const loadstudata = async () =>{
    const data = await getallstu();
    setstudents(data);
  }


  useEffect(()=>{
    loadstudata();
  },[])


  return (
    <>
      <StudentList students={students}/>
    </>
  )
}

export default App
