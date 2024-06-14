import { Link, Navigate } from "react-router-dom"


const Home = () =>{

    const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));
  
  if(!isAuthenticated){
    return <Navigate to='/login' />
  }
    return (
        <>
            <h1>Simple Home Page</h1>
            <Link to='/students'>Students</Link>
            &nbsp;
            <Link to='/teachers'>Teachers</Link>
        </>
    )
}

export default Home;