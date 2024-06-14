import { useEffect , useState} from 'react';
import TeachersList from './teachersList'
import { getallteach } from '../../apis/teachers';
import { jwtDecode } from 'jwt-decode';


function TeachersApp() {
  
  const [teachers, setteachers] =useState([]);

  const loadteacherdata = async () =>{
    const data = await getallteach();
    setteachers(data);
  }


  useEffect(()=>{
    loadteacherdata();
  },[])

  const token = localStorage.getItem('user_details');
  const userDetails = jwtDecode(token);
  const isAuthorised = userDetails.role ==='Teacher'
  if(!isAuthorised){
    return <h1>Your Not authorised to see this page</h1>
  }else{
    return (
      <>
        <TeachersList teachers={teachers}/>
      </>
    )
  }

  
}

export default TeachersApp;
