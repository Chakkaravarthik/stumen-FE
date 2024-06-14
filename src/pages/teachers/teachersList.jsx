// src/StudentList.js

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TeachersList = ({ teachers = [] }) => {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Teachers List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>batch</th>
              <th>student id</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.batch}</td>
                <td>{teacher.studentsid}</td>
                <td>{teacher.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/'>Home</Link>
      </div>
    );
  };
  
  export default TeachersList;