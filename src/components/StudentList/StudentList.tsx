import React, {useState} from 'react';
import {students as studentsData} from '../../data/data';
import './StudentList.css'

function StudentList() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState('');
  const [changeStudent, setChangeStudent] = useState({name: '', id: 0});
  const [changeableStudent, setChangeableStudent] = useState('')

  const addStudent = () => {
    setStudents([...students, {id: students.length + 1, name: newStudent}]);
    setNewStudent('');
  };

  const updateStudent = () => {
    let {id} = changeStudent;
    const updatedStudents = students.map(student =>
      student.id === id ? {...student, name: changeableStudent} : student
    );
    setStudents(updatedStudents);
    setChangeableStudent('')
  };

  const change = (name: string, id: number) => {
    setChangeStudent({name, id})
    setChangeableStudent(name)
  }

  return (
    <div className={'student-list'}>
      <h2 className={'head2'}>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <div className={'student flex'}>
              <p>{student.name}</p>
              <button onClick={(e) => change(student.name, student.id)}>Change</button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newStudent || changeableStudent}
        onChange={(e) => {
          if (newStudent) {
            setNewStudent(e.target.value);
          } else if (changeableStudent) {
            setChangeableStudent(e.target.value);
          }
        }}
        placeholder="Student name"
      />
      <button onClick={() => {
        if (newStudent) {
          addStudent();
        } else if (changeableStudent) {
          updateStudent();
        }
      }}>{newStudent && 'Add Student' || changeableStudent && 'Change student' || 'do'}</button>
    </div>
  );
}

export default StudentList;
