import { useEffect , useState} from 'react';
import TeachersList from './teachersList'
import { getallteach } from '../../apis/teachers';


function TeachersApp() {
  
  const [teachers, setteachers] =useState([]);

  const loadteacherdata = async () =>{
    const data = await getallteach();
    setteachers(data);
  }


  useEffect(()=>{
    loadteacherdata();
  },[])


  return (
    <>
      <TeachersList teachers={teachers}/>
    </>
  )
}

export default TeachersApp;
