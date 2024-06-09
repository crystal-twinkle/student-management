import React, { useState } from 'react';
import { students, subjects, grades as gradesData } from '../data/data';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

function Grades() {
  const [grades, setGrades] = useState(gradesData);
  const [newGrade, setNewGrade] = useState({
    studentId: '',
    subjectId: '',
    date: '',
    grade: ''
  });

  const addGrade = () => {
    setGrades([...grades, { ...newGrade, id: grades.length + 1 }]);
    setNewGrade({ studentId: '', subjectId: '', date: '', grade: '' });
  };

  const updateGrade = (index, key, value) => {
    const updatedGrades = grades.map((grade, i) =>
      i === index ? { ...grade, [key]: value } : grade
    );
    setGrades(updatedGrades);
  };

  return (
    <div>
      <Link
        to={RouterPage.WELCOME}
      >
        <button className={'bg-purple-500 mt-5'}> Main page </button>
      </Link>
      <h2>Grades</h2>
      <table>
        <thead>
        <tr>
          <th>Student</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Grade</th>
        </tr>
        </thead>
        <tbody>
        {grades.map((grade, index) => (
          <tr key={index}>
            <td>{students.find(s => s.id === grade.studentId)?.name}</td>
            <td>{subjects.find(s => s.id === grade.subjectId)?.name}</td>
            <td>
              <input
                type="date"
                value={grade.date}
                onChange={(e) => updateGrade(index, 'date', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={grade.grade}
                onChange={(e) => updateGrade(index, 'grade', e.target.value)}
              />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <h3>Add New Grade</h3>
      <div>
        <select value={newGrade.studentId} onChange={(e) => setNewGrade({ ...newGrade, studentId: e.target.value })}>
          <option value="">Select Student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
        <select value={newGrade.subjectId} onChange={(e) => setNewGrade({ ...newGrade, subjectId: e.target.value })}>
          <option value="">Select Subject</option>
          {subjects.map(subject => (
            <option key={subject.id} value={subject.id}>{subject.name}</option>
          ))}
        </select>
        <input
          type="date"
          value={newGrade.date}
          onChange={(e) => setNewGrade({ ...newGrade, date: e.target.value })}
        />
        <input
          type="text"
          value={newGrade.grade}
          onChange={(e) => setNewGrade({ ...newGrade, grade: e.target.value })}
          placeholder="Grade"
        />
        <button onClick={addGrade}>Add Grade</button>
      </div>
    </div>
  );
}

export default Grades;
