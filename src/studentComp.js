import React, { useState } from 'react';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    rollNo: '',
    grade: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevTableData) => [...prevTableData, studentData]);
    setStudentData({
      name: '',
      age: '',
      rollNo: '',
      grade: '',
    });
  };

  return (
    <div>
    <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
      <input
        className='input'
        id='name'
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Age :</label>
        <input
        className='input' id='age'
          type="text"
          name="age"
          value={studentData.age}
          onChange={handleInputChange}
        />
        <br />
        <label>Roll No. :</label>
        <input
        className='input'
          type="text"
          name="rollNo"
          value={studentData.rollNo}
          onChange={handleInputChange}
        />
        <br />
        <label>Class :</label><input
        className='input'
        id='class'
          type="text"
          name="grade"
          value={studentData.grade}
          onChange={handleInputChange}
        />
        <br />
        <button className='submit' type="submit">Submit</button>
      </form>

      <div className='table-contain'>
      {tableData.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Roll No.</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.rollNo}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
 );
};

export default StudentForm;

