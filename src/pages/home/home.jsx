import { Link } from "react-router-dom"


const Home = () =>{
    return (
        <>
            <h1>Simple Home Page</h1>
            <Link to='/students'>Students</Link>
            <Link to='/teachers'>Teachers</Link>
        </>
    )
}

export default Home;