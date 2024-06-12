import { useEffect , useState} from 'react';
import '../students/App.css'
import StudentList from './studentList'
import { getallstu } from '../../apis/students';


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

export default App;
