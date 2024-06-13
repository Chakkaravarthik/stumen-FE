// src/StudentList.js

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const StudentList = ({ students = [] }) => {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Student List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>ID</th>
              <th>Teacher ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.id}</td>
                <td>{student.teacherid}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/'>Home</Link>
      </div>
    );
  };
  
  export default StudentList;